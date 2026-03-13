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
          // Uses/Setup - Showing dev setup, tools, stack preferences
          // Blog/Notes - A few posts on things i've learned. (Communication, Arch, Teamwork, w/e)
          // Component Sandbox - Show off the things i built for the portfolio. Code snippets & playground?
        ],
      },
      { path: '*', element: <Navigate to={ROUTE_PATHS.WELCOME} replace /> },
    ],
  },
]);
