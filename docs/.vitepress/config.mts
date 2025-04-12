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
      { text: 'Vue3.4', link: '/vue/01.vue3设计思想和理念' }
    ],

    sidebar: [
      {
        text: 'Vue3.4',
        items: [
          { text: 'vue3 设计思想和理念', link: '/vue/01.vue3设计思想和理念' },
          { text: 'Vue3 整体架构', link: '/vue/02.Vue3整体架构' },
          {
            text: 'Vue3 响应式原理',
            items: [
              { text: 'Vue3 响应式', link: '/vue/03.Vue3响应式' },
              { text: 'Reactive & Effect', link: '/vue/04.Reactive&Effect' },
              { text: 'Ref 实现原理', link: '/vue/05.Ref实现原理' },
              { text: 'Computed', link: '/vue/06.Computed' }
            ]
          }
        ]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
});
