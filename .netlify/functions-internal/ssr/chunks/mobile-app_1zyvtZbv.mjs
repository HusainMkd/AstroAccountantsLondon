export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/mobile-app_ZkcOTEIk.mjs').then(n => n.m);

export { page };
