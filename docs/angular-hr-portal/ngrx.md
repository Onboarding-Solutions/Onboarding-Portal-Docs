# Adding a New NgRx Store Feature in Angular

This guide will walk you through the steps to add a new NgRx feature to our Angular project. 

## Step 1: Create the Store Folder Structure

1. Navigate to the `store/` directory under `app/`.
2. Create a new folder for your feature, for example, `profile/`.

Your `store/` directory structure should look like this:

```plaintext
store/
├── auth/
│   ├── auth.actions.ts
│   ├── auth.effects.ts
│   ├── auth.reducer.ts
│   ├── auth.selectors.ts
│
├── layout/
│   ├── layout.actions.ts
│   ├── layout.reducer.ts
│   ├── layout.selectors.ts
│
└── profile/
    ├── profile.actions.ts
    ├── profile.effects.ts
    ├── profile.reducer.ts
    └── profile.selectors.ts
```

## Step 2: Create Actions

In `profile.actions.ts`, define actions for your new feature:

```typescript
import { createAction, props } from '@ngrx/store';

export const loadProfile = createAction('[Profile] Load Profile');
export const loadProfileSuccess = createAction('[Profile] Load Profile Success', props<{ profile: any }>());
export const loadProfileFailure = createAction('[Profile] Load Profile Failure', props<{ error: any }>());
```

## Step 3: Create Reducer

In `profile.reducer.ts`, create the reducer to handle the state changes:

```typescript
import { createReducer, on } from '@ngrx/store';
import { loadProfile, loadProfileSuccess, loadProfileFailure } from './profile.actions';

export interface ProfileState {
  profile: any;
  loading: boolean;
  error: string | null;
}

export const initialState: ProfileState = {
  profile: null,
  loading: false,
  error: null,
};

export const profileReducer = createReducer(
  initialState,
  on(loadProfile, state => ({ ...state, loading: true })),
  on(loadProfileSuccess, (state, { profile }) => ({ ...state, loading: false, profile })),
  on(loadProfileFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
```

## Step 4: Create Effects

In `profile.effects.ts`, define the effects to handle side effects like HTTP requests:

```typescript
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProfileService } from '../services/profile.service';
import { loadProfile, loadProfileSuccess, loadProfileFailure } from './profile.actions';

@Injectable()
export class ProfileEffects {

  loadProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProfile),
      mergeMap(() =>
        this.profileService.getProfile().pipe(
          map(profile => loadProfileSuccess({ profile })),
          catchError(error => of(loadProfileFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private profileService: ProfileService
  ) {}
}
```

## Step 5: Create Selectors

In `profile.selectors.ts`, create selectors to easily access parts of the state:

```typescript
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProfileState } from './profile.reducer';

export const selectProfileState = createFeatureSelector<ProfileState>('profile');

export const selectProfile = createSelector(
  selectProfileState,
  state => state.profile
);

export const selectProfileLoading = createSelector(
  selectProfileState,
  state => state.loading
);

export const selectProfileError = createSelector(
  selectProfileState,
  state => state.error
);
```

## Step 6: Update the App Module

In `app.module.ts`, import the `StoreModule` and `EffectsModule`, and register the new feature state and effects:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { profileReducer } from './store/profile/profile.reducer';
import { ProfileEffects } from './store/profile/profile.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('profile', profileReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([ProfileEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Step 7: Using the Store in a Component

In your component, inject the store and dispatch actions or select state data:

```typescript
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ProfileState } from './store/profile/profile.reducer';
import { selectProfile, selectProfileLoading, selectProfileError } from './store/profile/profile.selectors';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile$: Observable<any>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store<{ profile: ProfileState }>) {
    // Initialize observables with store selectors
    this.profile$ = this.store.select(selectProfile);
    this.loading$ = this.store.select(selectProfileLoading);
    this.error$ = this.store.select(selectProfileError);
  }

  ngOnInit(): void {
    // Dispatch an action to load the profile when the component initializes
    this.store.dispatch({ type: '[Profile] Load Profile' });

    // Example usage: subscribe to the profile data and perform an action
    this.profile$.subscribe(profile => {
      console.log('Profile data:', profile);
    });
  }
}

```

## Workflow Summary

1. **Create a New Feature Directory:**
   - In the `store/` directory, create a new folder (e.g., `profile/`) to house your feature's NgRx files.

2. **Define Actions:**
   - In `profile.actions.ts`, create actions to represent the various events that can occur for this feature (e.g., loading data, success, and failure).

3. **Create the Reducer:**
   - In `profile.reducer.ts`, implement a reducer to handle the state transitions based on the actions you defined.

4. **Set Up Effects:**
   - In `profile.effects.ts`, define effects to manage side effects, such as API calls, and handle asynchronous operations.

5. **Create Selectors:**
   - In `profile.selectors.ts`, create selectors to provide an easy way to access specific slices of state.

6. **Integrate with the App Module:**
   - In `app.module.ts`, import the new reducer and effects into the `StoreModule` and `EffectsModule` respectively.

7. **Use the Store in Components:**
   - Inject the `Store` in your component, use selectors to access state data, and dispatch actions as needed.
