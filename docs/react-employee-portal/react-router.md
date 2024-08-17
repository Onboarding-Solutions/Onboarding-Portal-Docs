# How to Add Feature Page to the Router

This guide will help you add your feature page to the our project router.

---

### 1. **File Structure Overview**
Our project's router configuration is organized into different route files within the `src/routes` directory:
```
.
├── errorRoutes.jsx
├── index.jsx
├── privateRoutes.jsx
└── publicRoutes.jsx
```
Each of these files contains the route definitions for different parts of the application.

---

### 2. **Steps to Add Your Feature Page to the Router**

#### Step 1: Import Your Page with `lazy` and `withDefaultPageLoader`

In the appropriate route file (e.g., `privateRoutes.jsx`), start by importing your feature page using `lazy` and wrapping it with `withDefaultPageLoader` for lazy loading and default page loading behavior.

**Example:**
```javascript
import { lazy } from 'react';
import WithDefaultPageLoader from 'hoc/WithDefaultPageLoader';

const MyFeaturePage = WithDefaultPageLoader(lazy(() => import('pages/myFeature/MyFeaturePage')));
```

#### Step 2: Add Your Page to the `children` Array

Next, add your imported page to the `children` array within the route configuration. Make sure to set the appropriate `path` for your page.

**Example:**
```javascript
const privateRoutes = {
  path: 'portal',
  element: (
    <AuthGuard>
      <PortalLayout />
    </AuthGuard>
  ),
  children: [
    { index: true, element: <Navigate to="personal-info" replace /> },
    { path: 'personal-info', element: <PersonalInfoEditPage /> },
    { path: 'my-feature', element: <MyFeaturePage /> } // Add your feature page here
  ]
};
```

---

### 3. **Adding Nested Routes**

If your feature page contains child routes, you can nest them within the `children` array of your main feature route. Properly set the `path` and `children` properties.

**Nested Route Example:**
```javascript
const MyFeatureSubPage = WithDefaultPageLoader(lazy(() => import('pages/myFeature/MyFeatureSubPage')));

const privateRoutes = {
  path: 'portal',
  element: (
    <AuthGuard>
      <PortalLayout />
    </AuthGuard>
  ),
  children: [
    { index: true, element: <Navigate to="personal-info" replace /> },
    { path: 'personal-info', element: <PersonalInfoEditPage /> },
    {
      path: 'my-feature',
      element: <MyFeaturePage />,
      children: [
        { path: 'sub-page', element: <MyFeatureSubPage /> } // Nested route
      ]
    }
  ]
};
```