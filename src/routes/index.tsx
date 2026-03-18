import App from '@/App';
import PageLayout from '@/components/layout/page-layout/PageLayout';
import AboutMe from '@/features/about-me/AboutMe';
import Experience from '@/features/experience/Experience';
import Welcome from '@/features/welcome/Welcome';
import { createBrowserRouter, Navigate } from 'react-router';
import { ROUTE_PATHS } from './paths';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Navigate to={ROUTE_PATHS.WELCOME} replace /> },
      {
        element: <PageLayout />,
        children: [
          { path: 'welcome', element: <Welcome /> },
          { path: 'about-me', element: <AboutMe /> },
          { path: 'experience', element: <Experience /> },
          // TODO:Shane - Other route ideas:
          // Config/Uses/Setup - Showing dev setup, tools, config files (tsconfig, eslint, prettier, could be a new "folder" in explorer panel)
          // Blog/Notes - A few posts on things i've learned. (Communication, PR's, Arch, Teamwork, Declarative BE vs FE react functional)
          // Component Sandbox - Show off the things i built for the portfolio. Code snippets & playground?
        ],
      },
      { path: '*', element: <Navigate to={ROUTE_PATHS.WELCOME} replace /> },
    ],
  },
]);
