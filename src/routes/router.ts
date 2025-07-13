import { lazy } from 'react';

import { createBrowserRouter, RouteObject } from 'react-router-dom';

import { MainLayout } from '@layout';

import { ROUTES } from './routes';

const Dashboard = lazy(() =>
    import('@pages').then((module) => ({
        default: module.Dashboard,
    })),
);

const routes: RouteObject[] = [
    {
        path: ROUTES.HOME,
        Component: MainLayout,
        children: [{ index: true, Component: Dashboard }],
    },
];

export const router = createBrowserRouter(routes);
