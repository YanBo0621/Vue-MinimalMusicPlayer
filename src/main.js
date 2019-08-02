// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'babel-polyfill'
// import 'assets/js/hack'
import Vue from 'vue'
import store from './store'
import router from './router'
import App from './App'
import fastclick from 'fastclick'
import Toast from 'base/toast'
import VueLazyload from 'vue-lazyload'
import { VERSION } from './config'

import '@/assets/css/index.less'

// 优化移动端300ms点击延迟
fastclick.attach(document.body)

// 弹出层
Vue.use(Toast)

// 懒加载
Vue.use(VueLazyload, {
  preLoad: 1,
  loading: require('assets/img/default.png')
})

const redirectList = ['/music/details', '/music/comment']
router.beforeEach((to, from, next) => {
  window._hmt &&
    to.path &&
    window._hmt.push(['_trackPageview', '/#' + to.fullPath])
  if (redirectList.includes(to.path)) {
    next()
  } else {
    document.title =
      (to.meta.title && `${to.meta.title} - 极简在线音乐播放器`) ||
      '极简Player在线音乐播放器'
    next()
  }
})

// 版权信息
window.Player = window.player = `欢迎使用 musicPlayer!
当前版本为：V${VERSION}
作者：yanbo0621
Github：https://github.com/YanBo0621/Vue-MinimalMusicPlayer
歌曲来源于网易云音乐 (http://music.163.com)`
console.info(`%c${window.player}`, `color:blue`)

/* eslint-disable no-new */
new Vue({
  el: '#Player',
  store,
  router,
  render: h => h(App)
})
