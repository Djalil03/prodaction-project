import { lazy } from 'react';

export const ProfilePageAsync = lazy(async () => await new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => { resolve(import('./ProfilePage')); }, 1500);
}));
