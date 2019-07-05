module.exports = {
  title: 'longger个人博客',
  description: 'Personal Website',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/photo.jpg' }],
    ['link', { rel: 'manifest', href: '/images/photo.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/photo.jpg' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate' }],
    ['meta', { 'http-quiv': 'expires', cotent: '0' }]
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    nav: [ // 顶部导航栏配置
      { text: '首页', link: '/' },
      { text: '前端', link: '/accumulate/' },
      { text: '算法题库', link: '/algorithm/' },
      { text: '诗和远方', link: '/others/' },
      { text: '微博', link: 'https://baidu.com' }
    ],
    // 侧边栏菜单( 一个模块对应一个菜单形式 )
    sidebar: {
      // 打开accumulate主页链接时生成下面这个菜单
      '/accumulate/': [
        //多级菜单形式
        {
          title: 'git',
          // 子菜单
          children: [
            // ['','']=>[路径,标题]
            // 或者写成 '路径',标题自动识别为该地址的文件中的h1标题
            // 不以 '/' 结尾的就是指向.md文件
            ['/accumulate/git/handleGit', 'git操作步骤']
          ]
        },
        {
          title: 'JS高级',
          children: [
            ['/accumulate/JS/Tools', 'JS开发常用工具函数']
          ]
        },
      ],

    },
    // sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2
  }
};