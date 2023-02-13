export default {
  base: '/css-pills/',
  title: 'CSS Pills',
  description: 'A collection of CSS pills',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Pills', link: '/pills/' },
      { text: 'Team', link: '/team' },
      { text: 'GitHub', link: 'https://github.com/onebeyond/css-pills' },
    ],
    sidebar: [
      {
        text: 'Pills',
        items: [
          { text: 'Pill 1', link: '/pills/pill1' },
          { text: 'Pill 2', link: '/pills/pill2' },
        ],
      },
    ],
    editLink: {
      pattern: 'https://github.com/onebeyond/css-pills/edit/main/docs/:path',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 - One Beyond',
    },
  },
};
