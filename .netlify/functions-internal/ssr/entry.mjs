import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_geusxM5q.mjs';

const _page0  = () => import('./chunks/callback_-vvbGjUG.mjs');
const _page1  = () => import('./chunks/generic_3QiTGPMy.mjs');
const _page2  = () => import('./chunks/admin_EU9UijCy.mjs');
const _page3  = () => import('./chunks/index_1pklZLcK.mjs');
const _page4  = () => import('./chunks/index_8dPfFiFj.mjs');
const _page5  = () => import('./chunks/services_Xeh2qlPv.mjs');
const _page6  = () => import('./chunks/contact_O_Stj38Y.mjs');
const _page7  = () => import('./chunks/lead-generation_NNBUAlIe.mjs');
const _page8  = () => import('./chunks/click-through_ps9-TTXD.mjs');
const _page9  = () => import('./chunks/subscription_tl1iDQQy.mjs');
const _page10  = () => import('./chunks/pre-launch_av4SaF4u.mjs');
const _page11  = () => import('./chunks/product_yYHs8pkC.mjs');
const _page12  = () => import('./chunks/sales_AfMcdFP3.mjs');
const _page13  = () => import('./chunks/pricing_m00QOfml.mjs');
const _page14  = () => import('./chunks/privacy_VVJWNKC4.mjs');
const _page15  = () => import('./chunks/rss_iehtuc3j.mjs');
const _page16  = () => import('./chunks/about_uCWBLn_s.mjs');
const _page17  = () => import('./chunks/mobile-app_1zyvtZbv.mjs');
const _page18  = () => import('./chunks/personal_TLE1M1d3.mjs');
const _page19  = () => import('./chunks/startup_fJAqEcgT.mjs');
const _page20  = () => import('./chunks/saas_Pc7bX7z9.mjs');
const _page21  = () => import('./chunks/terms_KQFZL6hY.mjs');
const _page22  = () => import('./chunks/404_uGTk-DfH.mjs');
const _page23  = () => import('./chunks/_.._DWDph0ql.mjs');
const _page24  = () => import('./chunks/_.._RdxiYXW5.mjs');
const _page25  = () => import('./chunks/_.._2DVRfanb.mjs');
const _page26  = () => import('./chunks/index_rYn95ya1.mjs');const pageMap = new Map([["node_modules/astro-decap-cms-oauth/src/oauth/callback.ts", _page0],["node_modules/astro/dist/assets/endpoint/generic.js", _page1],["node_modules/astro-decap-cms-oauth/src/admin.astro", _page2],["node_modules/astro-decap-cms-oauth/src/oauth/index.ts", _page3],["src/pages/index.astro", _page4],["src/pages/services.astro", _page5],["src/pages/contact.astro", _page6],["src/pages/landing/lead-generation.astro", _page7],["src/pages/landing/click-through.astro", _page8],["src/pages/landing/subscription.astro", _page9],["src/pages/landing/pre-launch.astro", _page10],["src/pages/landing/product.astro", _page11],["src/pages/landing/sales.astro", _page12],["src/pages/pricing.astro", _page13],["src/pages/privacy.md", _page14],["src/pages/rss.xml.ts", _page15],["src/pages/about.astro", _page16],["src/pages/homes/mobile-app.astro", _page17],["src/pages/homes/personal.astro", _page18],["src/pages/homes/startup.astro", _page19],["src/pages/homes/saas.astro", _page20],["src/pages/terms.md", _page21],["src/pages/404.astro", _page22],["src/pages/[...blog]/[category]/[...page].astro", _page23],["src/pages/[...blog]/[tag]/[...page].astro", _page24],["src/pages/[...blog]/[...page].astro", _page25],["src/pages/[...blog]/index.astro", _page26]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
