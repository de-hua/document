import { defineConfig } from 'vitepress'
import { nav } from './nav'
import { sidebar } from './sidebar'

export default defineConfig({
  base: '/document/',
  title: '在线文档', // 网站标题
  description: '在线文档', // 网站描述
  srcDir: './', // 源码目录
  themeConfig: {
    logo: '/logo.png', // 导航栏logo
    nav,
    // sidebar,
    search: {
      provider: 'local',
    },
    footer: {
      message: '创作不易请尊重他人劳动成果，未经授权禁止转载！',
    },
  },
})
