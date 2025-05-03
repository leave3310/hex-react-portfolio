import {lazy} from 'react'
import {
  createBrowserRouter,
} from "react-router";


export const routes = [
  {
    path: "/",
    Component: lazy(() => import("@/pages/index/index.tsx")),
  },
  {
    path: "/blog",
    Component: lazy(() => import("@/pages/blog/index.tsx")),
  },
]

export const router = createBrowserRouter(routes);
