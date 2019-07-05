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
    ['@vuepress/last-updated', {
        transformer: (timestamp, lang) => {
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).format("D MMMM YYYY, dddd")
        }
    }],
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
            text: 'Module 1 - Introduction',
            items: [
              { text: 'The Internet', link: '/module_1/the_internet.md' },
              { text: 'Website vs Webapp', link: '/module_1/website_vs_webapp.md'}
            ]
          },
          {
            text: 'Module 2',
            items: [
              { text: 'Other Topic', link: '/module_2/other_topic.md' },
            ]
          }
        ]
      },
      { text: 'Important Dates & Schedule', link: '/important_dates_schedule.md'},
    ],
    sidebar: [
      {
        title: 'Module 1 - Introduction',   // required
        path: '/module_1/',      // optional, which should be a absolute path.
        children: [
          { title: 'The Internet', path: '/module_1/the_internet.md' },
          { title: 'Website vs Webapp', path: '/module_1/website_vs_webapp.md' }
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