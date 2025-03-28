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
    component: ComponentCreator('/Symbiota-Documentation/docs', '0e6'),
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
        path: '/Symbiota-Documentation/docs/1.3.2',
        component: ComponentCreator('/Symbiota-Documentation/docs/1.3.2', '711'),
        routes: [
          {
            path: '/Symbiota-Documentation/docs/1.3.2',
            component: ComponentCreator('/Symbiota-Documentation/docs/1.3.2', 'efc'),
            routes: [
              {
                path: '/Symbiota-Documentation/docs/1.3.2/about',
                component: ComponentCreator('/Symbiota-Documentation/docs/1.3.2/about', 'f28'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/Symbiota-Documentation/docs/1.3.2/New Feature',
                component: ComponentCreator('/Symbiota-Documentation/docs/1.3.2/New Feature', '1df'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/Symbiota-Documentation/docs/1.3.2/User Guide/Accessibility',
                component: ComponentCreator('/Symbiota-Documentation/docs/1.3.2/User Guide/Accessibility', '139'),
                exact: true,
                sidebar: "docSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/Symbiota-Documentation/docs/next',
        component: ComponentCreator('/Symbiota-Documentation/docs/next', '9a2'),
        routes: [
          {
            path: '/Symbiota-Documentation/docs/next',
            component: ComponentCreator('/Symbiota-Documentation/docs/next', '82e'),
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
                path: '/Symbiota-Documentation/docs/next/New Feature2',
                component: ComponentCreator('/Symbiota-Documentation/docs/next/New Feature2', 'f24'),
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
        component: ComponentCreator('/Symbiota-Documentation/docs', 'd2e'),
        routes: [
          {
            path: '/Symbiota-Documentation/docs',
            component: ComponentCreator('/Symbiota-Documentation/docs', 'fc1'),
            routes: [
              {
                path: '/Symbiota-Documentation/docs/about',
                component: ComponentCreator('/Symbiota-Documentation/docs/about', '92c'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/Symbiota-Documentation/docs/Editor Guide/AddingRecords',
                component: ComponentCreator('/Symbiota-Documentation/docs/Editor Guide/AddingRecords', '12d'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/Symbiota-Documentation/docs/User Guide/accessibility',
                component: ComponentCreator('/Symbiota-Documentation/docs/User Guide/accessibility', 'bbf'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/Symbiota-Documentation/docs/User Guide/Checklists/',
                component: ComponentCreator('/Symbiota-Documentation/docs/User Guide/Checklists/', '713'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/Symbiota-Documentation/docs/User Guide/Checklists/',
                component: ComponentCreator('/Symbiota-Documentation/docs/User Guide/Checklists/', 'f2e'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/Symbiota-Documentation/docs/User Guide/Checklists/add_taxa',
                component: ComponentCreator('/Symbiota-Documentation/docs/User Guide/Checklists/add_taxa', '790'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/Symbiota-Documentation/docs/User Guide/Checklists/add_voucher',
                component: ComponentCreator('/Symbiota-Documentation/docs/User Guide/Checklists/add_voucher', '20d'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/Symbiota-Documentation/docs/User Guide/Checklists/create_checklist',
                component: ComponentCreator('/Symbiota-Documentation/docs/User Guide/Checklists/create_checklist', '080'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/Symbiota-Documentation/docs/User Guide/Checklists/dynamic_checklist',
                component: ComponentCreator('/Symbiota-Documentation/docs/User Guide/Checklists/dynamic_checklist', '64d'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/Symbiota-Documentation/docs/User Guide/Checklists/games_checklist',
                component: ComponentCreator('/Symbiota-Documentation/docs/User Guide/Checklists/games_checklist', '398'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/Symbiota-Documentation/docs/User Guide/Checklists/report_checklist',
                component: ComponentCreator('/Symbiota-Documentation/docs/User Guide/Checklists/report_checklist', 'ed0'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/Symbiota-Documentation/docs/User Guide/Checklists/split_checklist',
                component: ComponentCreator('/Symbiota-Documentation/docs/User Guide/Checklists/split_checklist', '0f4'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/Symbiota-Documentation/docs/User Guide/Checklists/voucher_conflict',
                component: ComponentCreator('/Symbiota-Documentation/docs/User Guide/Checklists/voucher_conflict', 'c85'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/Symbiota-Documentation/docs/User Guide/Datasets/',
                component: ComponentCreator('/Symbiota-Documentation/docs/User Guide/Datasets/', '7d6'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/Symbiota-Documentation/docs/User Guide/Datasets/',
                component: ComponentCreator('/Symbiota-Documentation/docs/User Guide/Datasets/', 'cda'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/Symbiota-Documentation/docs/User Guide/Datasets/create_dataset',
                component: ComponentCreator('/Symbiota-Documentation/docs/User Guide/Datasets/create_dataset', 'afb'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/Symbiota-Documentation/docs/User Guide/Datasets/edit_dataset',
                component: ComponentCreator('/Symbiota-Documentation/docs/User Guide/Datasets/edit_dataset', '665'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/Symbiota-Documentation/docs/User Guide/Download/download_data',
                component: ComponentCreator('/Symbiota-Documentation/docs/User Guide/Download/download_data', '4d9'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/Symbiota-Documentation/docs/User Guide/Download/download_images',
                component: ComponentCreator('/Symbiota-Documentation/docs/User Guide/Download/download_images', '2d6'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/Symbiota-Documentation/docs/User Guide/permissions',
                component: ComponentCreator('/Symbiota-Documentation/docs/User Guide/permissions', 'ddd'),
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
