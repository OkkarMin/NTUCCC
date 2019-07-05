module.exports = {
  title: 'NTU CCC',
  description: 'Resource site for participants of NTU Cloud Computing Challenge',
  base: '/NTUCCC/',
  dest: 'docs',
  plugins: [
    ['container', {
      type: 'right',
      defaultTitle: '',
    }],
    ['container', {
      type: 'theorem',
      before: info => `<div class="theorem"><p class="title">${info}</p>`,
      after: '</div>',
    }],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).format("D MMMM YYYY, dddd")
        }
      }
    ]
  ],
  theme: '@vuepress/theme-default',
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: 'Modules',
        items: [
          {
            text: 'Module 1 - Introduction',
            items: [
              { text: 'The Internet', link: '/module_1/the_internet'},
            ]
          },
          {
            text: 'Module 2',
            items: [
              { text: 'Other Topic', link: '/module_2/other_topic' },
            ]
          }
        ]
      },
      { text: 'Important Dates', link: '/important_dates'},
    ],
    sidebar: [
      {
        title: 'Module 1 - Introduction',   // required
        path: '/module_1/',      // optional, which should be a absolute path.
        children: [
          '/module_1/the_internet',
        ]
      },
      {
        title: 'Module 2',
        path: '/module_2/',
        children: [
          '/module_2/other_topic',
        ]
      }
    ]
  },
}