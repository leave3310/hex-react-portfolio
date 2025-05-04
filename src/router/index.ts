import {lazy} from 'react'
import {
  createHashRouter,
} from "react-router-dom";

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

export const router = createHashRouter(routes);
