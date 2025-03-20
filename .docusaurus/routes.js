import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Symbiota-Documentation/__docusaurus/debug',
    component: ComponentCreator('/Symbiota-Documentation/__docusaurus/debug', 'bab'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/__docusaurus/debug/config',
    component: ComponentCreator('/Symbiota-Documentation/__docusaurus/debug/config', '86a'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/__docusaurus/debug/content',
    component: ComponentCreator('/Symbiota-Documentation/__docusaurus/debug/content', 'ee0'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/__docusaurus/debug/globalData',
    component: ComponentCreator('/Symbiota-Documentation/__docusaurus/debug/globalData', '95b'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/__docusaurus/debug/metadata',
    component: ComponentCreator('/Symbiota-Documentation/__docusaurus/debug/metadata', '30b'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/__docusaurus/debug/registry',
    component: ComponentCreator('/Symbiota-Documentation/__docusaurus/debug/registry', '9ef'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/__docusaurus/debug/routes',
    component: ComponentCreator('/Symbiota-Documentation/__docusaurus/debug/routes', '996'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/blog',
    component: ComponentCreator('/Symbiota-Documentation/blog', '4a5'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/blog/archive',
    component: ComponentCreator('/Symbiota-Documentation/blog/archive', '71c'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/blog/authors',
    component: ComponentCreator('/Symbiota-Documentation/blog/authors', '919'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/Symbiota-Documentation/blog/authors/all-sebastien-lorber-articles', 'bec'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/blog/authors/yangshun',
    component: ComponentCreator('/Symbiota-Documentation/blog/authors/yangshun', 'ca9'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/blog/first-blog-post',
    component: ComponentCreator('/Symbiota-Documentation/blog/first-blog-post', '22f'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/blog/long-blog-post',
    component: ComponentCreator('/Symbiota-Documentation/blog/long-blog-post', 'c28'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/blog/mdx-blog-post',
    component: ComponentCreator('/Symbiota-Documentation/blog/mdx-blog-post', 'f2c'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/blog/tags',
    component: ComponentCreator('/Symbiota-Documentation/blog/tags', '9fd'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/blog/tags/docusaurus',
    component: ComponentCreator('/Symbiota-Documentation/blog/tags/docusaurus', '257'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/blog/tags/facebook',
    component: ComponentCreator('/Symbiota-Documentation/blog/tags/facebook', '046'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/blog/tags/hello',
    component: ComponentCreator('/Symbiota-Documentation/blog/tags/hello', 'e19'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/blog/tags/hola',
    component: ComponentCreator('/Symbiota-Documentation/blog/tags/hola', 'd0e'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/blog/welcome',
    component: ComponentCreator('/Symbiota-Documentation/blog/welcome', '34f'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/markdown-page',
    component: ComponentCreator('/Symbiota-Documentation/markdown-page', '759'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/docs',
    component: ComponentCreator('/Symbiota-Documentation/docs', '886'),
    routes: [
      {
        path: '/Symbiota-Documentation/docs/1.1.0',
        component: ComponentCreator('/Symbiota-Documentation/docs/1.1.0', '8e1'),
        routes: [
          {
            path: '/Symbiota-Documentation/docs/1.1.0',
            component: ComponentCreator('/Symbiota-Documentation/docs/1.1.0', '022'),
            routes: [
              {
                path: '/Symbiota-Documentation/docs/1.1.0/about',
                component: ComponentCreator('/Symbiota-Documentation/docs/1.1.0/about', '4b2'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/Symbiota-Documentation/docs/1.1.0/User Guide/Accessibility',
                component: ComponentCreator('/Symbiota-Documentation/docs/1.1.0/User Guide/Accessibility', '351'),
                exact: true,
                sidebar: "docSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/Symbiota-Documentation/docs/1.2.0',
        component: ComponentCreator('/Symbiota-Documentation/docs/1.2.0', 'd60'),
        routes: [
          {
            path: '/Symbiota-Documentation/docs/1.2.0',
            component: ComponentCreator('/Symbiota-Documentation/docs/1.2.0', '047'),
            routes: [
              {
                path: '/Symbiota-Documentation/docs/1.2.0/about',
                component: ComponentCreator('/Symbiota-Documentation/docs/1.2.0/about', 'b84'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/Symbiota-Documentation/docs/1.2.0/User Guide/Accessibility',
                component: ComponentCreator('/Symbiota-Documentation/docs/1.2.0/User Guide/Accessibility', '1a8'),
                exact: true,
                sidebar: "docSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/Symbiota-Documentation/docs/next',
        component: ComponentCreator('/Symbiota-Documentation/docs/next', 'efc'),
        routes: [
          {
            path: '/Symbiota-Documentation/docs/next',
            component: ComponentCreator('/Symbiota-Documentation/docs/next', '707'),
            routes: [
              {
                path: '/Symbiota-Documentation/docs/next/about',
                component: ComponentCreator('/Symbiota-Documentation/docs/next/about', 'e86'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/Symbiota-Documentation/docs/next/New Feature',
                component: ComponentCreator('/Symbiota-Documentation/docs/next/New Feature', 'f27'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/Symbiota-Documentation/docs/next/User Guide/Accessibility',
                component: ComponentCreator('/Symbiota-Documentation/docs/next/User Guide/Accessibility', 'a02'),
                exact: true,
                sidebar: "docSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/Symbiota-Documentation/docs',
        component: ComponentCreator('/Symbiota-Documentation/docs', '380'),
        routes: [
          {
            path: '/Symbiota-Documentation/docs',
            component: ComponentCreator('/Symbiota-Documentation/docs', 'd51'),
            routes: [
              {
                path: '/Symbiota-Documentation/docs/about',
                component: ComponentCreator('/Symbiota-Documentation/docs/about', 'dc7'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/Symbiota-Documentation/docs/New Feature',
                component: ComponentCreator('/Symbiota-Documentation/docs/New Feature', 'c43'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/Symbiota-Documentation/docs/User Guide/Accessibility',
                component: ComponentCreator('/Symbiota-Documentation/docs/User Guide/Accessibility', 'e5b'),
                exact: true,
                sidebar: "docSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Symbiota-Documentation/',
    component: ComponentCreator('/Symbiota-Documentation/', 'a99'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
