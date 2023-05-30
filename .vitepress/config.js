import { metaData } from "./constants";
//@ts-ignore
import getTags from "vitepress-tags";

const pages = getTags({
  dir: "./"
});

export default {
  title: metaData.title,
  description: metaData.description,
  lang: metaData.locale,
  themeConfig: {
    repo: "davay42/starovdenis.com",
    logo: "/media/davay.svg",
    docsRepo: "davay42/starovdenis.com",
    pages,
    nav: [
      {
        text: "Сотрудничество",
        link: "/collab/",
        //@ts-ignore
        items: pages.collab,
      },
      {
        text: "Творчество",
        link: "/art/",
        //@ts-ignore
        items: pages.art,
      },
      {
        text: "Философия",
        link: "/philosophy/",
        //@ts-ignore
        items: pages.philosophy,
      },
      {
        text: "Контакты",
        link: "/contact.html",
        //@ts-ignore
        items: pages.contact,
      },
    ],
    sidebar: {
      "/": [
        {
          text: "Сотрудничество",
          link: "/collab/",
          //@ts-ignore
          children: pages.collab,
        },
        {
          text: "Творчество",
          link: "/art/",
          //@ts-ignore
          children: pages.art,
        },
        {
          text: "Философия",
          link: "/philosophy/",
          //@ts-ignore
          children: pages.philosophy,
        },
        {
          text: "Контакты",
          link: "/contact.html",
          //@ts-ignore
          children: pages.contact,
        },
      ],
    },
  },
  head: [
    ["script", { async: true, defer: true, "data-website-id": "72505cf3-03a7-4120-b0da-cf91d8566bff", src: "https://stats.defucc.me/umami.js" }],

    ['meta', { name: 'author', content: metaData?.author }],
    ['meta', { name: 'keywords', content: metaData?.tags }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: metaData.icon }],

    ['meta', { name: 'HandheldFriendly', content: 'True' }],
    ['meta', { name: 'MobileOptimized', content: '320' }],
    ['meta', { name: 'theme-color', content: '#0ea5e9' }],
    [
      'meta',
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],

    ['meta', { name: 'description', content: metaData.description }],

    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: metaData?.site }],
    ['meta', { name: 'twitter:title', value: metaData?.title }],
    ['meta', { name: 'twitter:description', value: metaData.description }],
    ['meta', { name: 'twitter:image', content: metaData?.image }],

    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: metaData.locale }],
    ['meta', { property: 'og:site', content: metaData.site }],
    ['meta', { property: 'og:url', content: metaData.site }],
    ['meta', { property: 'og:site_name', content: metaData.title }],
    ['meta', { property: 'og:title', content: metaData.title }],
    ['meta', { property: 'og:image', content: metaData.image }],
    ['meta', { property: 'og:description', content: metaData.description }],

  ],
  markdown: {
    config: (md) => {
      md.use(require("markdown-it-container"), "card");
      md.use(require("markdown-it-external-links"), {
        internalDomains: ["localhost", "starovdenis.com"],
      });
    },
  },
};
