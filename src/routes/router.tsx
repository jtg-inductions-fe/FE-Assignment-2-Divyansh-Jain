import { lazy } from 'react';

import { createBrowserRouter, RouteObject } from 'react-router-dom';

import { MainLayout } from '@layout';

import { ROUTES } from './routes.constants';

const Dashboard = lazy(() =>
    import('@pages').then((module) => ({
        default: module.Dashboard,
    })),
);

const routes: RouteObject[] = [
    {
        path: ROUTES.HOME,
        element: <MainLayout />,
        children: [{ index: true, element: <Dashboard /> }],
    },
];

export const router = createBrowserRouter(routes);
