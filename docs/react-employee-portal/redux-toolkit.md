# How to Create Redux Toolkit Logic for a New Feature

This guide will walk you through the process of creating Redux Toolkit logic for a new feature in your project. The steps include setting up the slice, API calls, thunks, and integrating the new feature into the store.

---

### 1. **File Structure Overview**

When creating a new feature, you will typically need to create three main files within the `features/yourFeatureName` directory:

1. `yourFeatureSlice.js`: This file defines the Redux slice, including the initial state, reducers, and extra reducers for handling asynchronous logic.
2. `yourFeatureApi.js`: This file contains the API calls related to the feature, utilizing `axios` or any other HTTP client.
3. `yourFeatureThunk.js`: This file contains the asynchronous logic (thunks) that handle side effects like API requests and dispatch the appropriate actions based on the request's outcome. 

**The thunk file and api file are optional, you don't need to create them if your feature doesn't require any API calls or asynchronous logic.**

---

### 2. **Step-by-Step Guide**

#### Step 1: Create the Feature Directory
Navigate to the `features` folder in your project and create a new directory for your feature. For example, if your feature is named `userProfile`, create a folder named `userProfile`.

```bash
src/features/userProfile/
```

#### Step 2: Create the Redux Slice (`userProfileSlice.js`)
In the `userProfile` folder, create a file named `userProfileSlice.js`. This file will define the Redux slice for your feature.

```javascript
import { createSlice } from '@reduxjs/toolkit';
import { fetchUserProfile, updateUserProfile } from './userProfileThunk';

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    clearUserProfileError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { clearUserProfileError } = userProfileSlice.actions;
export default userProfileSlice.reducer;
```

#### Step 3: Create the API Utility File (`userProfileApi.js`)
In the same `userProfile` folder, create a file named `userProfileApi.js`. This file contains the functions that handle API requests related to the feature.

```javascript
import apiClient from 'api/apiClient';
import { USER_PROFILE_URLS } from 'api/apiUrls';

export const fetchUserProfileApi = () => {
  return apiClient.get(USER_PROFILE_URLS.GET_USER_PROFILE);
};

export const updateUserProfileApi = (data) => {
  return apiClient.patch(USER_PROFILE_URLS.UPDATE_USER_PROFILE, data);
};
```

#### Step 4: Create the Thunks (`userProfileThunk.js`)
Next, create the `userProfileThunk.js` file, which will define the asynchronous logic for fetching and updating the user profile data.

```javascript
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUserProfileApi, updateUserProfileApi } from './userProfileApi';

export const fetchUserProfile = createAsyncThunk(
  'userProfile/fetchUserProfile',
  async (_, thunkAPI) => {
    try {
      const response = await fetchUserProfileApi();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data || 'Fetch User Profile failed');
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  'userProfile/updateUserProfile',
  async (userProfileData, thunkAPI) => {
    try {
      const response = await updateUserProfileApi(userProfileData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Update User Profile failed');
    }
  }
);
```

#### Step 5: Integrate the Slice into the Root Reducer
Finally, integrate your new slice into the root reducer. Open the `store/rootReducer.js` file and add the new slice reducer.

```javascript
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from 'features/auth/authSlice';
import personalInfoReducer from 'features/personalInfo/personalInfoSlice';
import userProfileReducer from 'features/userProfile/userProfileSlice'; // Import your new slice

const rootReducer = combineReducers({
  auth: authReducer,
  personalInfo: personalInfoReducer,
  userProfile: userProfileReducer, // Add your new slice reducer here
});

export default rootReducer;
```

---

### 3. **Development Workflow**
1. **Create the Feature Directory**: Start by creating a new directory for your feature under `src/features`.
2. **Define the Slice**: Create the `yourFeatureSlice.js` file to define your Redux slice.
3. **Set Up API Calls**: Define the API calls in `yourFeatureApi.js` using your HTTP client.
4. **Write Thunks**: Implement the asynchronous logic in `yourFeatureThunk.js` using `createAsyncThunk`.
5. **Integrate into Store**: Add your slice reducer to the root reducer in `store/rootReducer.js`.
6. **Test Your Feature**: Once everything is set up, test your feature thoroughly to ensure it behaves as expected.

---

### 4. **Best Practices**
- **Follow Naming Conventions**: Use consistent naming conventions across all files for better readability and maintainability.
- **Modularize Your Code**: Keep your API, slice, and thunk logic separated into different files for modularity.
- **Document Your Code**: Add comments and documentation where necessary to explain the purpose and functionality of your code.
- **Use Async Thunks for Side Effects**: Always use `createAsyncThunk` for handling side effects like API calls, and handle loading, success, and error states in your slice.