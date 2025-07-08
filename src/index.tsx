import { StrictMode } from 'react';
import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { Loader } from '@components';
import { theme } from '@theme';

import { router } from './router';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Suspense fallback={<Loader />}>
                <RouterProvider router={router} />
            </Suspense>
        </ThemeProvider>
    </StrictMode>,
);
