# React Vite Tailwind CSS Starter

## Steps

- Vite https://vitejs.dev
- pnpm https://pnpm.io
- pnpm create vite@latest

## Pick your UI library or UI framework

- tailwindcss https://tailwindcss.com
- https://blog.logrocket.com/setting-up-dev-environment-react-vite-tailwind/

## Create pages and routers

#### Setting up the routers is a one time setup.

#### Future pages will be registered in your router.

- pnpm add -D prettier
- create ./src/pages/HomePage.tsx, ./src/pages/AnotherPage.tsx, etc, with the name of the page as the h1 for POC
- pnpm add react-router react-router-dom
- create a component, EagerRoutes.tsx, to register the pages
- use the EagerRoutes component in the App.tsx with BrowserRouter
- run the application and navigate to different pages using the URL field of the browser
- create another component for routing and name it LazyRoutes.tsx
- register the pages in the LazyRoutes
- use the LazyRoutes component in the App.tsx with BrowserRouter
- run the application and navigate to different pages using the URL field of the browser

## Create navigation bar

- create a component, NavigationBar.tsx
- Add links/menus for different pages in the NavigationBar
- run the application and try to navigate using the menus
- create styling for the navigation bar
- create a views folder, ./src/views/
- create a layout template for the pages and put it in the ./src/views/MainLayout.tsx
- run the application to see if it works

## Model/Schema

- create ./src/models/todoType.ts or ./src/models/todoModel.ts
- create other models if needed

## Set up axios for API calls

- pnpm add axios
- create ./src/api/axiosConfig.ts
- this is also where interceptors will be added for header authorization if needed

## Set up generic http services

- create ./src/api/genericApiCalls.ts

## Set up json-server and concurrently

- pnpm add -D json-server concurrently
- create ./src/json-server/db.json and ./src/json-server/routes.json
- add proxy in the packages.json
- update the scripts

## Create the page that will render the list of todos

- create ./src/pages/WorkTodosPage.tsx
- write the local states for the page
- write a function to fetch the todos
- add the fetch function to the useEffect hook
- run the application, npm run start:fullstack, and see the network tab of DevTools if response is 200ok
- use the map array utility to render all the todos.

## Custom Hooks

- create ./src/hooks/useBudget.ts
- use the useBudget hook on the WorkTodosPage.tsx
- create the button and presentation for the budget

## Custom Hooks Test

- add a test for the useBudget hook on the WorkTodosPage.test.ts
