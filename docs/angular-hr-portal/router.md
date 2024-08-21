# Adding a New Page in Angular

This guide will walk you through the steps to add a new page to your Angular application, update the navigation menu, and configure the routing.

## Step 1: Update the Navigation Menu

1. **Navigate to `data/menu` Directory:**
   - Open the `menu.ts` file located in the `data/menu` directory.

2. **Add a New Menu Item:**
   - Add a new entry in the `menus` array. Here’s an example of how to add a new menu item:

   ```typescript
   export const menus: Navigation[] = [
     {
       id: 'employee-management',
       title: 'Employee Management',
       type: 'group',
       icon: 'icon-navigation',
       children: [
         {
           id: 'employee-profiles',
           title: 'Employee Profiles',
           type: 'item',
           classes: 'nav-item',
           url: '/portal/employee-profiles',
           icon: '#custom-story'
         },
         {
           id: 'new-page',
           title: 'New Page',
           type: 'item',
           classes: 'nav-item',
           url: '/portal/new-page',
           icon: '#new-icon'  // Placeholder icon, consult for the appropriate icon
         },
       ],
     },
   ];
   ```

   - Replace `#new-icon` with the appropriate icon. Feel free to consult if you need help selecting one.

## Step 2: Update the Routing Configuration

1. **Open `app-routing.module.ts`:**
   - Navigate to and open the `app-routing.module.ts` file.

2. **Update the Routes:**
   - Add a new route for your page within the `routes` array. Here’s how you can set it up:

   ```typescript
   import { NgModule } from '@angular/core';
   import { RouterModule, Routes } from '@angular/router';

   import { PortalLayoutComponent } from './components/layouts/portal/portal-layout/portal-layout.component';

   const routes: Routes = [
     {
       path: 'portal',
       component: PortalLayoutComponent,
       children: [
         { path: 'employee-profiles', loadChildren: () => import('./pages/employee-profiles/employee-profiles.module').then(m => m.EmployeeProfilesModule) },
         { path: 'new-page', loadChildren: () => import('./pages/new-page/new-page.module').then(m => m.NewPageModule) }, // New Page Route
       ]
     },
   ];

   @NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
   })
   export class AppRoutingModule { }
   ```

   - This example assumes that you’ll be lazy-loading the `NewPageModule` for your new page. Replace `'new-page'` and `NewPageModule` with the correct path and module name for your new component.

## Step 3: Create the New Page Module and Component

1. **Generate the New Module and Component:**
   - Use Angular CLI to generate the new module and component:

   ```bash
   ng generate component pages/new-page
   ```

   - This command will automatically create the necessary files and update the routing for you.

2. **Customize the Component:**
   - Open `new-page.component.ts` and `new-page.component.html` to customize your new page’s logic and template as needed.

## Step 4: Test the New Page

1. **Run the Application:**
   - Start your Angular application:

   ```bash
   ng serve
   ```

2. **Verify the Navigation:**
   - Open your application in the browser, and navigate to `/portal/new-page` to ensure the new page is correctly routed and displayed.

3. **Check the Menu:**
   - Confirm that the new menu item appears in the navigation and that it routes correctly to your new page.