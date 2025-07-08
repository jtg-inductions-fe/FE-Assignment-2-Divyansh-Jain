import { lazy } from 'react';

import { MainLayout } from 'layout';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

const Dashboard = lazy(() =>
    import('./pages').then((module) => ({
        default: module.Dashboard,
    })),
);

const routes: RouteObject[] = [
    {
        path: '/',
        Component: MainLayout,

        children: [{ index: true, Component: Dashboard }],
    },
];

export const router = createBrowserRouter(routes);
