import React, { ElementType, lazy, Suspense } from "react";
import { RouteObject, useRoutes } from "react-router";

/*
 * Suspense is a component that wraps the custom components and enables them to communicate
 *  to React that they're waiting for some data to load before the component is rendered.
 * */
const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<h1>Loading</h1>}>
      <Component {...props} />
    </Suspense>
  );

/* Lazy Loaded Todos Pages for code splitting*/
const WorkTodosPage = Loadable(lazy(() => import("./pages/WorkTodosPage")));
const ShoppingListPage = Loadable(
  lazy(() => import("./pages/ShoppingListPage"))
);
const LoginPage = Loadable(lazy(() => import("./pages/LoginPage")));

type Paths = { work: string; shoppingList: string; auth: string };
/* we will reuse this in creating todos */
export const pathNames: Paths = {
  work: "/",
  shoppingList: "/shopping-list",
  auth: "/auth",
};

/*
 *object-based routes
 *nesting routes is another way of writing routes
 */
const lazyRoutes: RouteObject[] = [
  {
    path: pathNames.work,
    element: <WorkTodosPage />,
  },
  {
    path: pathNames.shoppingList,
    element: <ShoppingListPage />,
  },
  {
    path: pathNames.auth,
    element: <LoginPage />,
  },
];

const LazyRoutes = () => {
  const contents = useRoutes(lazyRoutes);
  return <>{contents}</>;
};

export default LazyRoutes;
