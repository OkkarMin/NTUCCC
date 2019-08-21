module.exports = {
  title: 'NTU CCC',
  description:
    'Resource site for participants of NTU Cloud Computing Challenge',
  base: '/NTUCCC/',
  dest: 'docs',
  head: [
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      }
    ],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    [
      'link',
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }]
  ],
  plugins: [
    [
      'container',
      {
        type: 'right',
        defaultTitle: ''
      }
    ],
    [
      'container',
      {
        type: 'theorem',
        before: info => `<div class="theorem"><p class="title">${info}</p>`,
        after: '</div>'
      }
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).format('D MMM YYYY, dddd')
        }
      }
    ]
  ],
  theme: '@vuepress/theme-default',
  themeConfig: {
    displayAllHeaders: false,
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: 'Modules',
        items: [
          {
            text: '1 - Introduction',
            items: [
              {
                text: 'The Internet',
                link: '/module_1/the_internet.md'
              },
              {
                text: 'Website vs WebApp vs MobileApp',
                link: '/module_1/website_vs_webapp_vs_mobileapp.md'
              },
              {
                text: 'Hosting & Cloud Computing',
                link: '/module_1/hosting_cloud_computing.md'
              }
            ]
          },
          {
            text: '2 - Fundamentals',
            items: [
              {
                text: 'macOS',
                link: '/module_2/macos.md'
              },
              {
                text: 'Windows',
                link: '/module_2/windows.md'
              }
            ]
          },
          {
            text: '3 - Basic Web Development',
            items: [{ text: 'Other Topic', link: '/module_3/other_topic.md' }]
          },
          {
            text: '4A - WebApp Development',
            items: [{ text: 'Other Topic', link: '/module_4A/other_topic.md' }]
          },
          {
            text: '4B - MobileApp Development',
            items: [{ text: 'Other Topic', link: '/module_4B/other_topic.md' }]
          },
          {
            text: '5 - Amazon Amplify',
            items: [{ text: 'Other Topic', link: '/module_5/other_topic.md' }]
          }
        ]
      },
      {
        text: 'Important Dates & Schedule',
        link: '/important_dates_schedule.md'
      }
    ],
    sidebar: [
      {
        title: '1 - Introduction', // required
        path: '/module_1/', // optional, which should be a absolute path.
        children: [
          {
            title: 'The Internet',
            path: '/module_1/the_internet.md'
          },
          {
            title: 'Website vs WebApp vs MobileApp',
            path: '/module_1/website_vs_webapp_vs_mobileapp.md'
          },
          {
            title: 'Hosting & Cloud Computing',
            path: '/module_1/hosting_cloud_computing.md'
          }
        ]
      },
      {
        title: '2 - Fundamentals',
        path: '/module_2/',
        children: [
          {
            title: 'macOS',
            path: '/module_2/macos.md'
          },
          {
            title: 'Windows',
            path: '/module_2/windows.md'
          }
        ]
      },
      {
        title: '3 - Basic Web Development',
        path: '/module_3/',
        children: ['/module_3/other_topic']
      },
      {
        title: '4A - WebApp Development',
        path: '/module_4a/',
        children: ['/module_4A/other_topic']
      },
      {
        title: '4B - MobileApp Development',
        path: '/module_4b/',
        children: ['/module_4B/other_topic']
      },
      {
        title: '5 - Amazon Amplify',
        path: '/module_5/',
        children: ['/module_5/other_topic']
      }
    ]
  }
}
