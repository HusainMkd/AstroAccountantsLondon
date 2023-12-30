import { d as createAstro, e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, g as addAttribute, F as Fragment, u as unescapeHTML } from '../astro_87-zhTjO.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$WidgetWrapper, a as $$Headline, i as $$Icon, b as $$Button, l as $$Features3, d as $$PageLayout } from './about_nV5-xbie.mjs';
import { $ as $$HeroText } from './contact_oH__IKky.mjs';
import { b as $$Steps, a as $$FAQs } from './index_eUyIknEx.mjs';
import { $ as $$CallToAction } from './click-through_R3w2ZfQy.mjs';

const $$Astro$1 = createAstro("https://astrowind.vercel.app");
const $$Pricing$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pricing$1;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    prices = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${maybeRenderHead()}<div class="flex items-stretch justify-center"> <div class="grid grid-cols-3 gap-4 dark:text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"> ${prices && prices.map(({ title: title2, subtitle: subtitle2, price, period, items, callToAction, hasRibbon = false, ribbonTitle }) => renderTemplate`<div class="col-span-3 mx-auto flex w-full sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"> ${price && period && renderTemplate`<div class="rounded-lg backdrop-blur border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow px-6 py-8 flex w-full max-w-sm flex-col justify-between text-center"> ${hasRibbon && ribbonTitle && renderTemplate`<div class="absolute right-[-5px] 2xl:right-[-8px] rtl:right-auto rtl:left-[-8px] rtl:2xl:left-[-10px] top-[-5px] 2xl:top-[-10px] z-[1] h-[100px] w-[100px] overflow-hidden text-right"> <span class="absolute top-[19px] right-[-21px] rtl:right-auto rtl:left-[-21px] block w-full rotate-45 rtl:-rotate-45 bg-green-700 text-center text-[10px] font-bold uppercase leading-5 text-white shadow-[0_3px_10px_-5px_rgba(0,0,0,0.3)] before:absolute before:left-0 before:top-full before:z-[-1] before:border-[3px] before:border-r-transparent before:border-b-transparent before:border-l-green-800 before:border-t-green-800 before:content-[''] after:absolute after:right-0 after:top-full after:z-[-1] after:border-[3px] after:border-l-transparent after:border-b-transparent after:border-r-green-800 after:border-t-green-800 after:content-['']"> ${ribbonTitle} </span> </div>`} <div class="px-2 py-0"> ${title2 && renderTemplate`<h3 class="text-center text-xl font-semibold uppercase leading-6 tracking-wider mb-2">${title2}</h3>`} ${subtitle2 && renderTemplate`<p class="font-light sm:text-lg text-gray-600 dark:text-slate-400">${subtitle2}</p>`} <div class="my-8"> <div class="flex items-center justify-center text-center mb-1"> <span class="text-5xl">$</span> <span class="text-6xl font-extrabold">${price}</span> </div> <span class="text-base leading-6 lowercase text-gray-600 dark:text-slate-400">${period}</span> </div> ${items && renderTemplate`<ul role="list" class="my-8 md:my-10 space-y-2 text-left"> ${items.map(
    ({ description, icon }) => description && renderTemplate`<li class="mb-1.5 flex items-start space-x-3 leading-7"> <div class="rounded-full bg-primary mt-1"> ${renderComponent($$result2, "Icon", $$Icon, { "name": icon ? icon : "tabler:check", "class": "w-5 h-5 font-bold p-1 text-white" })} </div> <span>${description}</span> </li>`
  )} </ul>`} </div> ${callToAction && renderTemplate`<div${addAttribute(`flex justify-center`, "class")}> ${typeof callToAction === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(callToAction)}` })}` : callToAction && callToAction.href && renderTemplate`${renderComponent($$result2, "Button", $$Button, { ...hasRibbon ? { variant: "primary" } : {}, ...callToAction })}`} </div>`} </div>`} </div>`)} </div> </div> ` })}`;
}, "/workspaces/AstroAccountantsLondon/src/components/widgets/Pricing.astro", void 0);

const $$Astro = createAstro("https://astrowind.vercel.app");
const $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pricing;
  const metadata = {
    title: "Pricing"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "HeroText", $$HeroText, { "tagline": "Pricing", "title": "Stellar Pricing for Every Financial Journey", "subtitle": "Tailored plans that align perfectly with your business goals." })}  ${renderComponent($$result2, "Prices", $$Pricing$1, { "title": "Our Packages", "subtitle": "Transparent, Affordable, and Customized for You", "prices": [
    {
      title: "Startup",
      subtitle: "Ideal for new businesses and solo entrepreneurs",
      price: 50,
      period: "Per Month",
      items: [
        {
          description: "Monthly financial statements and bookkeeping"
        },
        {
          description: "Quarterly tax planning and advice"
        },
        {
          description: "Unlimited email support"
        },
        {
          description: "Access to basic accounting software"
        }
      ],
      callToAction: {
        target: "_blank",
        text: "Get started",
        href: "#"
      }
    },
    {
      title: "Growth",
      subtitle: "Perfect for expanding small to medium-sized businesses",
      price: 150,
      period: "Per Month",
      items: [
        {
          description: "Comprehensive bookkeeping and financial analysis"
        },
        {
          description: "Bi-monthly tax strategy sessions"
        },
        {
          description: "Payroll management for up to 10 employees"
        },
        {
          description: "Priority email and phone support"
        },
        {
          description: "Advanced software access and training"
        }
      ],
      callToAction: {
        target: "_blank",
        text: "Get started",
        href: "#"
      },
      hasRibbon: true,
      ribbonTitle: "Most Popular"
    },
    {
      title: "Enterprise",
      subtitle: "Designed for established companies seeking comprehensive solutions",
      price: 300,
      period: "Per Month",
      items: [
        {
          description: "Full-spectrum accounting and financial management"
        },
        {
          description: "Custom tax optimization and compliance"
        },
        {
          description: "Dedicated account manager and team support"
        },
        {
          description: "Payroll and HR solutions for unlimited employees"
        },
        {
          description: "Regular in-person strategy meetings"
        }
      ],
      callToAction: {
        target: "_blank",
        text: "Get started",
        href: "#"
      }
    }
  ] })}  ${renderComponent($$result2, "Features3", $$Features3, { "title": "Why Aurora Accounting?", "subtitle": "Explore the advantages of partnering with us", "columns": 2, "items": [
    {
      title: "Customized Solutions",
      description: "Every business is unique, and our services reflect that. Personalized accounting that grows with you.",
      icon: "tabler:adjustments-horizontal"
    },
    {
      title: "Expert Team",
      description: "Our team of certified accountants brings unparalleled expertise to your financial needs.",
      icon: "tabler:users"
    },
    {
      title: "Technology-Driven",
      description: "Leveraging the latest in accounting software for efficiency and accuracy.",
      icon: "tabler:device-computer-camera"
    },
    {
      title: "Responsive Support",
      description: "Your questions answered swiftly by our dedicated support team.",
      icon: "tabler:message-circle"
    }
  ], "classes": { container: "max-w-5xl" } })}  ${renderComponent($$result2, "Steps", $$Steps, { "title": "Start Your Financial Journey with Us", "tagline": "Simple, Streamlined Process", "isReversed": true, "items": [
    {
      title: "Discover Our Plans",
      icon: "tabler:search"
    },
    {
      title: "Choose Your Package",
      icon: "tabler:select"
    },
    {
      title: "Easy Signup",
      icon: "tabler:login"
    },
    {
      title: "Personalized Onboarding",
      icon: "tabler:user-plus"
    },
    {
      title: "Secure Payment",
      icon: "tabler:wallet"
    },
    {
      title: "Confirmation and Welcome",
      icon: "tabler:check"
    },
    {
      title: "Access Your Customized Services",
      icon: "tabler:layout-dashboard"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1536816579748-4ecb3f03d72a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    alt: "Steps image"
  } })}  ${renderComponent($$result2, "FAQs", $$FAQs, { "title": "Pricing FAQs", "subtitle": "Understanding our pricing is key to making the best choice for your accounting needs. Here are answers to common questions about our plans.", "columns": 1, "items": [
    {
      title: "Do all accounting plans include personalized support?",
      description: "Yes, each of our accounting plans comes with dedicated support to ensure you have all the assistance you need."
    },
    {
      title: "Can I experience your services before committing to a plan?",
      description: "While we don't offer trial periods, we provide an initial consultation to discuss your needs and how our services can benefit you."
    },
    {
      title: "Is it possible to switch between different accounting plans?",
      description: "Absolutely! We offer flexible plan options that you can change at any time to match your evolving accounting needs."
    },
    {
      title: "What payment methods are available?",
      description: "We accept various payment methods including major credit cards, bank transfers, and online payment platforms for your convenience."
    },
    {
      title: "Are there additional costs beyond the plan rates?",
      description: "No, our transparent pricing ensures that the plan rate includes all the accounting services listed, with no hidden fees."
    }
  ] })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "Elevate Your Financial Management Today", "subtitle": "Join the growing number of businesses benefiting from Aurora Accounting London's expert services.", "actions": [
    {
      variant: "primary",
      text: "Explore Our Plans",
      href: "/plans"
    }
  ] })} ` })}`;
}, "/workspaces/AstroAccountantsLondon/src/pages/pricing.astro", void 0);

const $$file = "/workspaces/AstroAccountantsLondon/src/pages/pricing.astro";
const $$url = "/pricing";

const pricing = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pricing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Pricing$1 as $, pricing as p };
