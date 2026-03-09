import { createBrowserRouter, Navigate } from "react-router";
import App from "../App";
import AboutMe from "../features/about-me/AboutMe";
import Experience from "../features/experience/Experience";
import Welcome from "../features/welcome/Welcome";
import { ROUTE_PATHS } from "./paths";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Navigate to={ROUTE_PATHS.WELCOME} replace /> },
      { path: 'welcome', element: <Welcome /> },
      { path: 'about-me', element: <AboutMe /> },
      { path: 'experience', element: <Experience /> },
      { path: '*', element: <Navigate to={ROUTE_PATHS.WELCOME} replace /> },
    ],
  },
]);