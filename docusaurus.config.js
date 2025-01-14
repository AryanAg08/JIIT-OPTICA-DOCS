import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jiit Optica Docs',
  tagline: 'A complete documentation hub for Jiit Optica',
  favicon: 'img/icon.png',
  url: process.env.URL || "http://localhost:3000",
  baseUrl: '/',

  organizationName: 'JiitOptica',
  projectName: 'optica docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        debug: true,
        docs: {
          path: "docs",
          sidebarPath: "./config/sidebars.js",
          numberPrefixParser: false,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          admonitions: {
            keywords: ["my-custom-admonition"],
            extendDefaults: true,
          },
          editUrl: "https://github.com/jiitopticachapter",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/jiitopticachapter',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // announcementBar: {
      //   id: 'announcementBar',
      //   content: '⭐️ If you like Optica docs, give it a star on <a target="_blank" href="https://github.com/jiitopticachapter">GitHub</a>.⭐️',
      //   isCloseable: true,
      //   backgroundColor: "var(--ifm-color-primary)",
      // },

      customCss: require.resolve('./src/css/custom.css'),
      navbar: {
        title: 'JIIT OPTICA',
        logo: {
          alt: 'Optica Logo',
          src: 'img/logo.svg',
          href: '/',
        },
        items: [
          { to: '/', label: 'Home', position: 'left' }, // Corresponds to "Home"
          { to: '/docs/', label: 'Docs', position: 'left' }, // Corresponds to "Docs"
          { to: '/showcase', label: 'Showcase', position: 'left' }, // Corresponds to "Showcase"
          { to: '/community', label: 'Community', position: 'left' }, // Corresponds to "Community"
          // { to: '/tags', label: 'Tags', position: 'left' }, // Corresponds to "Tags"
        ],
        style: 'primary',
      },
      footer: {
        style: "dark",
        links: [
          {
            title: " ",
            items: [
              {
                html: `
                    <div class="footer_info--container">
                      <img src="/img/logo.png" alt="Footer logo" />
                      <span>
                      </span>
                    </div>
                  `,
              },
            ],
          },
          {
            title: "Resources",
            items: [
              {
                label: "Tutorials",
                to: "/docs",
              },
              {
                label: "Courses",
                to: "/courses",
              },
              {
                label: "DSA Problems",
                to: "/dsa-problems/",
              },
              {
                label: "DSA Solutions",
                to: "/dsa-solutions/",
              },
            ],
          },
          {
            title: "Company",
            items: [
              {
                label: "About",
                to: "/about/",
              },
              {
                label: "Faqs",
                to: "/community/faqs.tsx",
              },
              {
                label: "Careers",
                to: "#",
              },
              {
                label: "Team",
                to: "/community/team/",
              },
            ],
          },
          {
            title: "Quick Links",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Community",
                to: "/community/",
              },
              {
                label: "GitHub",
                href: "https://github.com/jiitopticachapter",
              },
            ],
          },
          {
            title: "Social Media",
            items: [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/",
              },
              {
                label: "Discord",
                href: "https://discord.gg/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jiit Optica!!</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
