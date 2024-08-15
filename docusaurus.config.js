import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Onboarding Solutions",
  tagline: "Wonderful team!!",
  favicon: "img/favicon.ico",

  url: "https://onboarding-solutions.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "onboarding-solutions", // Usually your GitHub org/user name.
  projectName: "onboarding-solutions-docs", // Usually your repo name.

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
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
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
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Onboarding Solutions",
        logo: {
          alt: "Onboarding Solutions Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            sidebarId: "serverDocsSidebar",
            position: "left",
            label: "Server",
            to: "/docs/category/server",
          },
          {
            sidebarId: "reactEmployeeDocsSidebar",
            position: "left",
            label: "React Employee",
            to: "/docs/category/react---employee-portal",
          },
          {
            sidebarId: "angularHRDocsSidebar",
            position: "left",
            label: "Angular HR",
            to: "/docs/category/angular---hr-portal",
          },
          {
            href: "https://github.com/Onboarding-Solutions",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "API",
                to: "/docs/server/api/intro",
              },
              {
                label: "Common Components",
                to: "/docs/react-wmployee-portal/components/intro",
              },
              {
                label: "Github Workflow",
                to: "/docs/development-docs/github-workflow",
              },
            ],
          },
          {
            title: "Tools",
            items: [
              {
                label: "JIRA",
                href: "https://liamli-team.atlassian.net/jira/software/projects/SCRUM/boards/1/timeline?shared=&atlOrigin=eyJpIjoiN2VlYWUwZGMxNTQ0NDA1ZTllY2QzYTc2NzBkNDMxZjMiLCJwIjoiaiJ9",
              },
              {
                label: "Zoom",
                href: "https://us05web.zoom.us/j/4057451441?pwd=HJyEP6p4fH8XhiXjPD7itE5GrfvFF1.1",
              },
            ],
          },
          {
            title: "Github Repos",
            items: [
              {
                label: "Server",
                href: "https://github.com/Onboarding-Solutions/Onboarding-Portal-Server",
              },
              {
                label: "Frontend - Employee",
                href: "https://github.com/Onboarding-Solutions/Onboarding-Portal-Frontend-Employees",
              },
              {
                label: "Frontend - HR",
                href: "https://github.com/Onboarding-Solutions/Onboarding-Portal-Frontend-HR"
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Onboarding Solutions. Built with Liam-Li team.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
