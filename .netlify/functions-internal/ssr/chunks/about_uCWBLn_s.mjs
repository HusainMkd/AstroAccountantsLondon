export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/about_nV5-xbie.mjs').then(n => n.p);

export { page };
