import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/symbiota-docs-docusaurus/pt/blog',
    component: ComponentCreator('/symbiota-docs-docusaurus/pt/blog', '66e'),
    exact: true
  },
  {
    path: '/symbiota-docs-docusaurus/pt/blog/archive',
    component: ComponentCreator('/symbiota-docs-docusaurus/pt/blog/archive', '3b3'),
    exact: true
  },
  {
    path: '/symbiota-docs-docusaurus/pt/blog/authors',
    component: ComponentCreator('/symbiota-docs-docusaurus/pt/blog/authors', '29f'),
    exact: true
  },
  {
    path: '/symbiota-docs-docusaurus/pt/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/symbiota-docs-docusaurus/pt/blog/authors/all-sebastien-lorber-articles', '688'),
    exact: true
  },
  {
    path: '/symbiota-docs-docusaurus/pt/blog/authors/yangshun',
    component: ComponentCreator('/symbiota-docs-docusaurus/pt/blog/authors/yangshun', '678'),
    exact: true
  },
  {
    path: '/symbiota-docs-docusaurus/pt/blog/first-blog-post',
    component: ComponentCreator('/symbiota-docs-docusaurus/pt/blog/first-blog-post', 'e19'),
    exact: true
  },
  {
    path: '/symbiota-docs-docusaurus/pt/blog/long-blog-post',
    component: ComponentCreator('/symbiota-docs-docusaurus/pt/blog/long-blog-post', '76c'),
    exact: true
  },
  {
    path: '/symbiota-docs-docusaurus/pt/blog/mdx-blog-post',
    component: ComponentCreator('/symbiota-docs-docusaurus/pt/blog/mdx-blog-post', '6f1'),
    exact: true
  },
  {
    path: '/symbiota-docs-docusaurus/pt/blog/tags',
    component: ComponentCreator('/symbiota-docs-docusaurus/pt/blog/tags', '385'),
    exact: true
  },
  {
    path: '/symbiota-docs-docusaurus/pt/blog/tags/docusaurus',
    component: ComponentCreator('/symbiota-docs-docusaurus/pt/blog/tags/docusaurus', '565'),
    exact: true
  },
  {
    path: '/symbiota-docs-docusaurus/pt/blog/tags/facebook',
    component: ComponentCreator('/symbiota-docs-docusaurus/pt/blog/tags/facebook', '69a'),
    exact: true
  },
  {
    path: '/symbiota-docs-docusaurus/pt/blog/tags/hello',
    component: ComponentCreator('/symbiota-docs-docusaurus/pt/blog/tags/hello', '9cb'),
    exact: true
  },
  {
    path: '/symbiota-docs-docusaurus/pt/blog/tags/hola',
    component: ComponentCreator('/symbiota-docs-docusaurus/pt/blog/tags/hola', 'cfc'),
    exact: true
  },
  {
    path: '/symbiota-docs-docusaurus/pt/blog/welcome',
    component: ComponentCreator('/symbiota-docs-docusaurus/pt/blog/welcome', '79a'),
    exact: true
  },
  {
    path: '/symbiota-docs-docusaurus/pt/markdown-page',
    component: ComponentCreator('/symbiota-docs-docusaurus/pt/markdown-page', '8ff'),
    exact: true
  },
  {
    path: '/symbiota-docs-docusaurus/pt/docs',
    component: ComponentCreator('/symbiota-docs-docusaurus/pt/docs', 'ec6'),
    routes: [
      {
        path: '/symbiota-docs-docusaurus/pt/docs/1.1.0',
        component: ComponentCreator('/symbiota-docs-docusaurus/pt/docs/1.1.0', '587'),
        routes: [
          {
            path: '/symbiota-docs-docusaurus/pt/docs/1.1.0',
            component: ComponentCreator('/symbiota-docs-docusaurus/pt/docs/1.1.0', '9e2'),
            routes: [
              {
                path: '/symbiota-docs-docusaurus/pt/docs/1.1.0/about',
                component: ComponentCreator('/symbiota-docs-docusaurus/pt/docs/1.1.0/about', '75c'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/symbiota-docs-docusaurus/pt/docs/1.1.0/User Guide/Accessibility',
                component: ComponentCreator('/symbiota-docs-docusaurus/pt/docs/1.1.0/User Guide/Accessibility', 'b01'),
                exact: true,
                sidebar: "docSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/symbiota-docs-docusaurus/pt/docs/next',
        component: ComponentCreator('/symbiota-docs-docusaurus/pt/docs/next', '43f'),
        routes: [
          {
            path: '/symbiota-docs-docusaurus/pt/docs/next',
            component: ComponentCreator('/symbiota-docs-docusaurus/pt/docs/next', '4e3'),
            routes: [
              {
                path: '/symbiota-docs-docusaurus/pt/docs/next/about',
                component: ComponentCreator('/symbiota-docs-docusaurus/pt/docs/next/about', '5c3'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/symbiota-docs-docusaurus/pt/docs/next/User Guide/Accessibility',
                component: ComponentCreator('/symbiota-docs-docusaurus/pt/docs/next/User Guide/Accessibility', '571'),
                exact: true,
                sidebar: "docSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/symbiota-docs-docusaurus/pt/docs',
        component: ComponentCreator('/symbiota-docs-docusaurus/pt/docs', '819'),
        routes: [
          {
            path: '/symbiota-docs-docusaurus/pt/docs',
            component: ComponentCreator('/symbiota-docs-docusaurus/pt/docs', '7d5'),
            routes: [
              {
                path: '/symbiota-docs-docusaurus/pt/docs/about',
                component: ComponentCreator('/symbiota-docs-docusaurus/pt/docs/about', '1de'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/symbiota-docs-docusaurus/pt/docs/User Guide/Accessibility',
                component: ComponentCreator('/symbiota-docs-docusaurus/pt/docs/User Guide/Accessibility', 'f51'),
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
    path: '/symbiota-docs-docusaurus/pt/',
    component: ComponentCreator('/symbiota-docs-docusaurus/pt/', '951'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
