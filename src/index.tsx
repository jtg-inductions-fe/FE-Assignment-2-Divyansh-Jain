import { StrictMode } from 'react';
import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from '@theme';

import { Spinner } from './components/Loader/Spinner';
import { router } from './router';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Suspense fallback={<Spinner />}>
                <RouterProvider router={router} />
            </Suspense>
        </ThemeProvider>
    </StrictMode>,
);
