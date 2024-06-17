// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Reason OCaml India",
  tagline: "India's Reason/OCaml community",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://reason-ocaml.in",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ReasonOCamlIndia", // Usually your GitHub org/user name.
  projectName: "reason-ocaml-india.github.io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/social-card.jpg",
      navbar: {
        title: "Reason OCaml India",
        logo: {
          alt: "Reason OCaml India logo",
          src: "img/logo.jpeg",
        },
        items: [
          { to: "/upcoming-meetups", label: "Upcoming meetups", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://x.com/ReasonBangalore",
            label: "Twitter",
            position: "right",
          },
          {
            href: "https://github.com/ReasonOCamlIndia",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.com/invite/RamP7SCKcU",
              },
              {
                label: "Twitter",
                href: "https://x.com/ReasonBangalore",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/ReasonOCamlIndia",
              },
            ],
          },
        ],
        copyright: `Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  plugins: ["./plugins/docusaurus-webpack-plugin"],
};

export default config;
