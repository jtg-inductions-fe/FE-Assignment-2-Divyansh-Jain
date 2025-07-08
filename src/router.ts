import { lazy } from 'react';

import { createBrowserRouter, RouteObject } from 'react-router-dom';

import { MainLayout } from './layout/Main/Main.layout';

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
