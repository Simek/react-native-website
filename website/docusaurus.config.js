/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const RemarkablePlugins = require('./core/RemarkablePlugins');

const users = require('./showcase.json');
let communityRepos = [];
try {
  communityRepos = require('./community-repos.json');
} catch (e) {
  // We don't care if there are no repos synced locally
  // We only care if we are on the CI server and about to deploy
}
const defaultVersionShown = '0.62';
const baseUrl = '/';
const repoUrl = 'https://github.com/facebook/react-native';
const siteConfig = {
  title: 'React Native',
  tagline: 'A framework for building native apps using React',
  url: 'https://reactnative.dev',
  baseUrl,
  projectName: 'react-native',
  // cname: 'reactnative.dev',
  // repoUrl,
  // defaultVersionShown,
  // users,
  // communityRepos,
  // footerIcon: 'img/header_logo.png',
  favicon: 'img/favicon.ico',
  // colors: {
  //   brand: '#61dafb', // electric blue
  //   dark: '#282c34', // dark blue
  //   deepdark: '#20232a', // really dark blue
  //   light: '#373940', // light blue
  //   text: '#1a1a1a', // black substitute
  //   subtle: '#6d6d6d', // light grey for text
  //   divider: '#ececec', // very light grey
  //   tintColor: '#f7f7f7', // slightly off white
  //   backgroundColor: 'white',
  //   // we don't use these any more but docusaurus complains if we don't
  //   primaryColor: 'black',
  //   secondaryColor: 'gray',
  // },
  // blogSidebarCount: 'ALL',
  // facebookAppId: '1677033832619985',
  // twitter: 'reactnative',
  // twitterImage: 'img/logo-og.png',
  // ogImage: 'img/logo-og.png',
  // markdownPlugins: [
  //   RemarkablePlugins.SnackPlayer,
  //   RemarkablePlugins.ReactNativeWebPlayer,
  // ],
  // usePrism: [
  //   'javascript',
  //   'js',
  //   'jsx',
  //   'java',
  //   'objective-c',
  //   'json',
  //   'sh',
  //   'tsx',
  // ],
  // highlight: {
  //   theme: 'solarized-dark',
  // },
  // gaTrackingId: 'UA-41298772-2',
  scripts: [
    'https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js',
    'https://snack.expo.io/embed.js',
    'https://platform.twitter.com/widgets.js',
    'https://buttons.github.io/buttons.js',
    baseUrl + 'js/codeblocks.js',
    baseUrl + 'js/tabs.js',
    baseUrl + 'js/docs-rating.js',
    baseUrl + 'js/announcement.js',
  ],
  // cleanUrl: true,
  // scrollToTop: true,
  // scrollToTopOptions: {
  //   zIndex: 100,
  // },
  // docsSideNavCollapsible: true,
  // onPageNav: 'separate',
  themeConfig: {
    algolia: {
      apiKey: '2c98749b4a1e588efec53b2acec13025',
      indexName: 'react-native-versions',
      algoliaOptions: {
        facetFilters: ['tags:VERSION'],
        hitsPerPage: 5,
      },
    },
    customCss: require.resolve('./src/css/custom.css'),
    sidebarCollapsible: true,
    prism: {
      defaultLanguage: 'jsx',
      additionalLanguages: [
        'javascript',
        'js',
        'jsx',
        'java',
        'objectivec',
        'objc',
        'json',
        'bash',
        'sh',
        'tsx',
      ],
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    navbar: {
      title: 'React Native',
      logo: {
        alt: 'React Native',
        src: 'img/header_logo.svg'
      },
      hideOnScroll: true,
      links: [
        {doc: 'getting-started', label: 'Docs', position: 'left'},
        {doc: 'components-and-apis', label: 'Components', position: 'left'},
        {doc: 'accessibilityinfo', label: 'API', position: 'left'},
        {page: 'help', label: 'Community', position: 'left'},
        {blog: true, label: 'Blog'},
        {search: true},
        {href: repoUrl, label: 'GitHub', position: 'right'},
      ]
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          postsPerPage: 'ALL',
        },
        docs: {
          // Docs folder path relative to website dir.
          path: 'docs',
          // Sidebars file relative to website dir.
          sidebarPath: require.resolve('./sidebars.json'),
          // Equivalent to `editUrl` but should point to `website` dir instead of `website/docs`.
          editUrl: 'https://github.com/facebook/react-native-website/blob/master/website/',
          // Equivalent to `docsUrl`.
          // routeBasePath: 'docs',
          // Remark and Rehype plugins passed to MDX. Replaces `markdownOptions` and `markdownPlugins`.
          remarkPlugins: [
            // RemarkablePlugins.SnackPlayer,
            // RemarkablePlugins.ReactNativeWebPlayer,
          ],
          rehypePlugins: [],
          // Equivalent to `enableUpdateBy`.
          showLastUpdateAuthor: true,
          // Equivalent to `enableUpdateTime`.
          showLastUpdateTime: true,
        },
        googleAnalytics: {
          trackingID: 'UA-41298772-2'
        },
      },
    ],
  ],
};

module.exports = siteConfig;
