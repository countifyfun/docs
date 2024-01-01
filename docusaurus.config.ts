import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";
import { socials } from "./socials";

const config: Config = {
  title: "Countify",
  titleDelimiter: "–",
  tagline: "Documentation for your dream Discord counting bot.",
  favicon: "https://countify.fun/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.countify.fun",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

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
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/countifyfun/docs/edit/main",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "https://countify.fun/og.jpg",
    metadata: [{ name: "theme-color", content: "#fde047" }],
    navbar: {
      title: "Countify",
      logo: {
        alt: "Countify Logo",
        src: "https://countify.fun/logo.png",
        href: "https://countify.fun",
        target: "_self",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        ...socials,
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Countify",
          items: [
            {
              label: "Home",
              to: "https://countify.fun",
            },
            {
              label: "Docs",
              to: "/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/countifyfun/countify",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Countify Labs (a subdivision of Graphify Studios).`,
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    prism: {
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ["json"],
    },
  } satisfies Preset.ThemeConfig,

  clientModules: [require.resolve("./src/discord-components")],
};

export default config;
