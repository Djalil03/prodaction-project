import { lazy } from 'react';

export const AboutPageAsunc = lazy(async () => await new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => { resolve(import('./AboutPage')); }, 1500);
}));
