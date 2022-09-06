import { metaData } from "./config/constants";
import head from "./config/head";
//@ts-ignore
import getTags from "vitepress-tags";

const pages = getTags("./");

export default {
  title: metaData.title,
  description: metaData.description,
  lang: metaData.locale,
  head,
  themeConfig: {
    repo: "DeFUCC/starovdenis.com",
    logo: "/media/davay.svg",
    docsRepo: "DeFUCC/starovdenis.com",
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
  markdown: {
    config: (md) => {
      md.use(require("markdown-it-container"), "card");
      md.use(require("markdown-it-external-links"), {
        internalDomains: ["localhost", "starovdenis.com"],
      });
    },
  },
};
