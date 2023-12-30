export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/contact_oH__IKky.mjs').then(n => n.c);

export { page };
