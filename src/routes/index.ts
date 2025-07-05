import { lazy } from 'react';
import { ComponentType } from 'react';

import { createBrowserRouter, RouteObject } from 'react-router-dom';

import { MainLayout } from '../layout/MainLayout';
import { ErrorPage } from '../pages';

// For demo only will be removed in next PR

const delayForDemo = (promise: Promise<{ default: ComponentType<unknown> }>) =>
    new Promise((resolve) => {
        setTimeout(resolve, 2000);
    }).then(() => promise);

const Dashboard = lazy(() =>
    // Will be updated in next PR
    delayForDemo(
        import('../pages/Dashboard').then((module) => ({
            default: module.Dashboard,
        })),
    ),
);
const NotFoundPage = lazy(() =>
    // Will be updated in next PR
    delayForDemo(
        import('../pages/NotFoundPage').then((module) => ({
            default: module.NotFoundPage,
        })),
    ),
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
