export const nav = [
  { text: '主页', link: '/index' },
  // !积累
  {
    text: '基础',
    items: [
      { text: '计算机基础', link: '/积累/计算机基础/1.计算机基础.md' },
      { text: '数据结构', link: '/积累/计算机基础/2.数据结构.md' },
      { text: '算法', link: '/积累/计算机基础/3.算法.md' },
    ],
  },
  {
    text: '自动化部署流程设计',
    link: '/积累/自动化部署流程设计/1.自动化部署流程设计.md',
  },
  {
    text: '第三方库',
    items: [{ text: 'nvm', link: '/积累/第三方库/1.nvm.md' }],
  },
  // ! 面试题
  {
    text: '理解八股文',
    items: [
      {
        text: 'HTML&CSS',
        items: [
          { text: 'HTML', link: '/面试/前端基础/1.html.md' },
          { text: 'CSS', link: '/面试/前端基础/2.css.md' },
        ],
      },
      {
        text: 'JavaScript',
        items: [
          { text: 'JS八股文', link: '/面试/JavaScript/1.面试题.md' },
          { text: 'JS手写题', link: '/面试/JavaScript/2.手写题.md' },
        ],
      },
      { text: 'TypeScript', link: '/面试/TypeScript/1.ts.md' },
      {
        text: 'Vue八股文',
        link: '/面试/Vue/1.VUE.md',
      },
      {
        text: 'React八股文',
        link: '/面试/React/1.react.md',
      },
      {
        text: 'Vite八股文',
        link: '/面试/Vite/1.vite.md',
      },
      {
        text: 'Webpack八股文',
        link: '/面试/Webpack/1.webpack.md',
      },
      {
        text: 'uniapp八股文',
        link: '/面试/uniapp/1.uniapp.md',
      },
    ],
  },
]
