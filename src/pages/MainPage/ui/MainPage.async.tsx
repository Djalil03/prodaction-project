import { lazy } from 'react';

export const MainPageAsync = lazy(async () => await new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => { resolve(import('./MainPage')); }, 1500);
}));
