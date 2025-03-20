import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Symbiota-Documentation/pt/blog',
    component: ComponentCreator('/Symbiota-Documentation/pt/blog', 'ed7'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/pt/blog/archive',
    component: ComponentCreator('/Symbiota-Documentation/pt/blog/archive', '00b'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/pt/blog/authors',
    component: ComponentCreator('/Symbiota-Documentation/pt/blog/authors', 'd32'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/pt/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/Symbiota-Documentation/pt/blog/authors/all-sebastien-lorber-articles', '39a'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/pt/blog/authors/yangshun',
    component: ComponentCreator('/Symbiota-Documentation/pt/blog/authors/yangshun', 'd11'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/pt/blog/first-blog-post',
    component: ComponentCreator('/Symbiota-Documentation/pt/blog/first-blog-post', 'cf8'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/pt/blog/long-blog-post',
    component: ComponentCreator('/Symbiota-Documentation/pt/blog/long-blog-post', '639'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/pt/blog/mdx-blog-post',
    component: ComponentCreator('/Symbiota-Documentation/pt/blog/mdx-blog-post', 'e17'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/pt/blog/tags',
    component: ComponentCreator('/Symbiota-Documentation/pt/blog/tags', 'b0f'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/pt/blog/tags/docusaurus',
    component: ComponentCreator('/Symbiota-Documentation/pt/blog/tags/docusaurus', '275'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/pt/blog/tags/facebook',
    component: ComponentCreator('/Symbiota-Documentation/pt/blog/tags/facebook', '56f'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/pt/blog/tags/hello',
    component: ComponentCreator('/Symbiota-Documentation/pt/blog/tags/hello', 'a1e'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/pt/blog/tags/hola',
    component: ComponentCreator('/Symbiota-Documentation/pt/blog/tags/hola', 'ebc'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/pt/blog/welcome',
    component: ComponentCreator('/Symbiota-Documentation/pt/blog/welcome', '834'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/pt/markdown-page',
    component: ComponentCreator('/Symbiota-Documentation/pt/markdown-page', 'c40'),
    exact: true
  },
  {
    path: '/Symbiota-Documentation/pt/docs',
    component: ComponentCreator('/Symbiota-Documentation/pt/docs', '541'),
    routes: [
      {
        path: '/Symbiota-Documentation/pt/docs/1.1.0',
        component: ComponentCreator('/Symbiota-Documentation/pt/docs/1.1.0', 'ed4'),
        routes: [
          {
            path: '/Symbiota-Documentation/pt/docs/1.1.0',
            component: ComponentCreator('/Symbiota-Documentation/pt/docs/1.1.0', 'd79'),
            routes: [
              {
                path: '/Symbiota-Documentation/pt/docs/1.1.0/about',
                component: ComponentCreator('/Symbiota-Documentation/pt/docs/1.1.0/about', 'acb'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/Symbiota-Documentation/pt/docs/1.1.0/User Guide/Accessibility',
                component: ComponentCreator('/Symbiota-Documentation/pt/docs/1.1.0/User Guide/Accessibility', '816'),
                exact: true,
                sidebar: "docSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/Symbiota-Documentation/pt/docs/next',
        component: ComponentCreator('/Symbiota-Documentation/pt/docs/next', '054'),
        routes: [
          {
            path: '/Symbiota-Documentation/pt/docs/next',
            component: ComponentCreator('/Symbiota-Documentation/pt/docs/next', '98e'),
            routes: [
              {
                path: '/Symbiota-Documentation/pt/docs/next/about',
                component: ComponentCreator('/Symbiota-Documentation/pt/docs/next/about', 'a1c'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/Symbiota-Documentation/pt/docs/next/User Guide/Accessibility',
                component: ComponentCreator('/Symbiota-Documentation/pt/docs/next/User Guide/Accessibility', '7cd'),
                exact: true,
                sidebar: "docSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/Symbiota-Documentation/pt/docs',
        component: ComponentCreator('/Symbiota-Documentation/pt/docs', '076'),
        routes: [
          {
            path: '/Symbiota-Documentation/pt/docs',
            component: ComponentCreator('/Symbiota-Documentation/pt/docs', '888'),
            routes: [
              {
                path: '/Symbiota-Documentation/pt/docs/about',
                component: ComponentCreator('/Symbiota-Documentation/pt/docs/about', 'cc6'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/Symbiota-Documentation/pt/docs/User Guide/Accessibility',
                component: ComponentCreator('/Symbiota-Documentation/pt/docs/User Guide/Accessibility', 'b08'),
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
    path: '/Symbiota-Documentation/pt/',
    component: ComponentCreator('/Symbiota-Documentation/pt/', '4b5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
