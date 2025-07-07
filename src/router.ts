import { lazy } from 'react';

import { createBrowserRouter, RouteObject } from 'react-router-dom';

import { MainLayout } from './layout/Main.layout';
import { ErrorPage } from './pages';

const Dashboard = lazy(() =>
    import('./pages/Dashboard.pages').then((module) => ({
        default: module.Dashboard,
    })),
);
const NotFoundPage = lazy(() =>
    import('./pages/NotFound.pages').then((module) => ({
        default: module.NotFoundPage,
    })),
);

const routes: RouteObject[] = [
    {
        path: '/',
        Component: MainLayout,
        ErrorBoundary: ErrorPage,

        children: [
            { index: true, Component: Dashboard },
            { path: '*', Component: NotFoundPage },
        ],
    },
];

export const router = createBrowserRouter(routes);
