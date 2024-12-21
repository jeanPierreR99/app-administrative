import { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import { Loader2 } from "lucide-react";

const LoadingFallback = () => <div className="absolute left-0 w-full h-full bg-gray-100/70 z-10 flex justify-center items-center"><Loader2 className="animate-spin text-blue-500" /></div>
  ;

const Home = lazy(() => import("@/pages/Home"));
const RolesUsers = lazy(() => import("@/pages/roles-users/RolesUsers"));
const GeneratorCode = lazy(() => import("@/pages/generator-code/GeneratorCode"));
const Administrative = lazy(() => import("@/pages/administrative/Administrative"));
const Trading = lazy(() => import("@/pages/trading/Trading"));
const Lawful = lazy(() => import("@/pages/lawful/Lawful"));
const Accountant = lazy(() => import("@/pages/accountant/Accountant"));

const BBVA = lazy(() => import("@/pages/generator-code/BBVA"));
const IRBSA = lazy(() => import("@/pages/generator-code/IRBSA"));
// const Login = lazy(() => import("@/pages/Login"));

const withSuspense = (Component: React.ReactNode) => (
  <Suspense fallback={<LoadingFallback />}>{Component}</Suspense>
);

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <div>Oops! Something went wrong.</div>,
    children: [
      {
        path: "/",
        element: withSuspense(<Home />),
      },
      {
        path: "/roles-users",
        element: withSuspense(<RolesUsers />),
      },
      {
        path: "/generator-code",
        element: withSuspense(<GeneratorCode />),
        children: [{
          path: "BBVA",
          element: withSuspense(<BBVA />),
        },
        {
          path: "IRBSA",
          element: withSuspense(<IRBSA />),

        }
        ]
      },
      {
        path: "/administrative",
        element: withSuspense(<Administrative />),
      },
      {
        path: "/trading",
        element: <Trading />,
      },
      {
        path: "/lawful",
        element: <Lawful />,
      },
      {
        path: "/accountant",
        element: <Accountant />,
      },
    ],
  },
];

// export const routesLogin: RouteObject[] = [
//   {
//     path: "/",
//     element: withSuspense(<Login />),
//     errorElement: <div>Failed to load Login page.</div>,
//   },
// ];
