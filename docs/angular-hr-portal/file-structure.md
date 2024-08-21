# Project File Structure

```plaintext
│  favicon.ico
│  index.html
│  main.ts
│  polyfills.ts
│  styles.scss
│  test.ts
│
├─app
│  │  app-config.ts
│  │  app-routing.module.ts
│  │  app.component.html
│  │  app.component.scss
│  │  app.component.spec.ts
│  │  app.component.ts
│  │  app.module.ts
│  │
│  ├─components
│  │  ├─common
│  │  │  ├─icon-button
│  │  │  └─main-card
│  │  │
│  │  ├─employee-profiles
│  │  └─layouts
│  │      ├─auth
│  │      └─portal
│  │
│  ├─data
│  │      menu.ts
│  │
│  ├─guards
│  │      .gitkeep
│  │
│  ├─interceptors
│  │      .gitkeep
│  │
│  ├─interfaces
│  │      layout.ts
│  │      navigation.ts
│  │
│  ├─pages
│  │  ├─auth
│  │  ├─employee-profiles
│  │  └─error
│  │
│  ├─services
│  │      layout.service.ts
│  │
│  ├─shared
│  │      shared.module.ts
│  │
│  ├─store
│  │  ├─auth
│  │  │      auth.actions.ts
│  │  │      auth.effects.ts
│  │  │      auth.reducer.ts
│  │  │      auth.selectors.ts
│  │  │
│  │  └─layout
│  │          layout.actions.ts
│  │          layout.reducer.ts
│  │          layout.selectors.ts
│  │
│  └─validators
│          .gitkeep
│
├─assets
│  ├─fonts
│  └─images
│
├─environments
│      environment.prod.ts
│      environment.ts
│
└─scss
    ├─fonts
    ├─theme
    └─layouts
```

## Directory Overview

- **app/**: Contains the main application code, including components, services, and routing modules.
  - **components/**: Houses reusable UI components organized into subdirectories like `common` for shared components and `layouts` for layout-specific components.
  - **data/**: Stores static data files, such as menu configurations.
  - **guards/**: Includes route guards for securing specific routes.
  - **interceptors/**: Contains HTTP interceptors to modify requests or handle errors globally.
  - **interfaces/**: Defines TypeScript interfaces used throughout the application.
  - **pages/**: Contains specific page components, each representing different routes in the application.
  - **services/**: Houses Angular services that encapsulate business logic and API interactions.
  - **shared/**: Includes shared modules, components, and utilities that are used across the application.
  - **store/**: Contains NgRx state management files, such as actions, reducers, selectors, and effects for handling global state.
  - **validators/**: Stores custom validators used for form validation across the application.

- **assets/**: Contains static assets like fonts and images used by the application.

- **environments/**: Holds environment-specific configuration files, such as `environment.prod.ts` for production settings.

- **scss/**: Stores global and theme-related styles, including custom fonts, theme configurations, and layout-specific styles.