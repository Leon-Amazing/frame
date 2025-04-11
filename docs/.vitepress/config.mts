import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/frame/',
  title: 'front end frame',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Vue3.4', link: '/vue/01.vue3设计思想和理念' },
    ],

    sidebar: [
      {
        text: 'Vue3.4',
        items: [
          { text: 'vue3 设计思想和理念', link: '/vue/01.vue3设计思想和理念' },
          { text: 'Vue3 整体架构', link: '/vue/02.Vue3整体架构' },
          { text: 'Vue3 响应式数据核心', link: '/vue/03.Vue3响应式数据核心' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
});
