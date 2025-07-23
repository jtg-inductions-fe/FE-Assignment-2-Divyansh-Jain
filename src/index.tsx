import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';

import { CssBaseline, Stack, ThemeProvider } from '@mui/material';

import { Loader } from '@components';
import { MasterContextProvider } from '@provider';
import { router } from '@routes';
import { theme } from '@theme';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Suspense
                fallback={
                    <Stack height="100vh" justifyContent="center">
                        <Loader />
                    </Stack>
                }
            >
                <MasterContextProvider>
                    <RouterProvider router={router} />
                </MasterContextProvider>
            </Suspense>
        </ThemeProvider>
    </StrictMode>,
);
