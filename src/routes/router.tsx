import { lazy } from 'react';

import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';

import { MainLayout } from '@layout';

import { ROUTES } from './routes.constants';

const Dashboard = lazy(() =>
    import('@pages').then((module) => ({
        default: module.Dashboard,
    })),
);

const NotFoundPage = lazy(() =>
    import('@pages').then((module) => ({
        default: module.NotFound,
    })),
);
const ErrorPage = lazy(() =>
    import('@pages').then((module) => ({
        default: module.ErrorPage,
    })),
);

const routes: RouteObject[] = [
    {
        path: ROUTES.HOME,
        errorElement: <Navigate to={ROUTES.ERROR} />,
        element: <MainLayout />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: ROUTES.ERROR, element: <ErrorPage /> },
            { path: '*', element: <NotFoundPage /> },
        ],
    },
];

export const router = createBrowserRouter(routes);
