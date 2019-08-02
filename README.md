# mmPlayer

模仿 QQ 音乐网页版界面，采用 flexbox 和 position 布局；
mmPlayer 虽然是响应式，但主要以为 PC 端为主，移动端只做相应适配（未做歌词显示）；
只做主流浏览器兼容（对 IE 说拜拜，想想以前做项目还要兼容 IE7 ，都是泪啊！！！）

> api：一个开源的[网易云音乐 NodeJS 版 API](https://binaryify.github.io/NeteaseCloudMusicApi)

## 如何安装与使用

> Player

```
git clone https://github.com/YanBo0621/Vue-MinimalMusicPlayer.git  //下载 mmPlayer

cd mmPlayer // 进入 mmPlayer 播放器目录

npm install // 安装依赖

npm run serve // 运行 mmPlayer

npm run build  // 项目打包
```

> 后台服务器

[网易云音乐 NodeJS 版 API](https://binaryify.github.io/NeteaseCloudMusicApi)

```
下载 NeteaseCloudMusicApi

npm install // 安装依赖

node app.js // 服务端运行 访问 http://localhost:3000
```

#### 运行 mmPlayer 后无法获取音乐请检查后台服务器是否启动

#### src/config 的 URL 地址要和后台服务器地址一致

## 技术栈

- Vue-Cli（Vue 脚手架工具）
- Vue（核心框架）
- Vue-Router（页面路由）
- Vuex（状态管理）
- ES 6 / 7 （JavaScript 语言的下一代标准）
- Less（CSS 预处理器）
- Axios（网络请求）
- FastClick（解决移动端 300ms 点击延迟）

## 项目布局

<details>
<summary>展开查看</summary>
<pre><code>.
├── Player                                        // 项目打包版本，可直接使用
├── public                                          // 静态资源目录
│   └─index.html                                    // 入口html文件
├── screenshots                                     // 项目截图
├── src                                             // 项目源码目录
│   ├── api                                         // 数据交互目录
│   │   └── index.js                                // 获取数据
│   ├── assets                                      // 资源目录
│   │   ├── css                                     // 样式文件目录
│   │   │   ├── index.less                          // mmPlayer相关基础样式
│   │   │   ├── mixin.less                          // 样式混合
│   │   │   ├── reset.less                          // 样式重置
│   │   │   └── var.less                            // 样式变量（字体大小、字体颜色、背景颜色）
│   │   ├── img                                     // 静态图片目录
│   │   └── js                                      // 数据交互目录
│   │        ├── hack.js                            // 修改 nextTick 
│   │        ├── mixin.js                           // 组件混合
│   │        ├── song.js                            // 数据处理
│   │        ├── storage.js                         // localstorage配置
│   │        └── util.js                            // 公用js方法
│   ├── base                                        // 公共基础组件目录
│   │   ├── mm-dialog
│   │   │   └── mm-dialog.vue                       // 对话框组件
│   │   ├── mm-loading
│   │   │   └── mm-loading.vue                      // 加载动画组件
│   │   ├── mm-no-result
│   │   │   └── mm-no-result.vue                    // 暂无数据提示组件
│   │   ├── mm-progress
│   │   │   └── mm-progress.vue                     // 进度条拖动组件
│   │   └── mm-toast
│   │        ├── index.js                           // mm-toast 组件插件化配置
│   │        └── mm-toast.vue                       // 弹出层提示组件
│   ├── components                                  // 公共项目组件目录
│   │   ├── lyric
│   │   │   └── lyric                               // 歌词和封面组件
│   │   └── mm-header
│   │   │   └── mm-header.vue                       // 头部组件
│   │   ├── music-btn
│   │   │   └── music-btn.vue                       // 按钮组件
│   │   └── music-list
│   │        └── music-list.vue                     // 列表组件
│   ├── pages                                       // 入口主文件
│   │   ├── comment
│   │   │   └── comment.vue                         // 评论
│   │   ├── details
│   │   │   └── details.vue                         // 排行榜详情
│   │   ├── historyList
│   │   │   └── historyList.vue                     // 我听过的（播放历史）
│   │   ├── playList
│   │   │   └── playList.vue                        // 正在播放
│   │   ├── search
│   │   │   └── search.vue                          // 搜索
│   │   ├── topList
│   │   │   └── topList.vue                         // 排行榜页面
│   │   ├── userList
│   │   │   └── userList.vue                        // 我的歌单
│   │   ├── mmPlayer.js                             // 播放器事相关件绑定
│   │   └── music.vue                               // 播放器主页面
│   ├── router
│   │   └── index.js                                // 路由配置
│   ├── store                                       // vuex的状态管理
│   │   ├── actions.js                              // 配置actions
│   │   ├── getters.js                              // 配置getters
│   │   ├── index.js                                // 引用vuex，创建store
│   │   ├── mutation-types.js                       // 定义常量mutations名
│   │   ├── mutations.js                            // 配置mutations
│   │   └── state.js                                // 配置state
│   ├── App.vue                                     // 根组件
│   ├── config.js                                   // 基本配置
│   └── main.js                                     // 入口主文件
└── vue.config.js                                   // vue-cli 配置文件
</code></pre>
</details>

## 功能

- 播放器
- 快捷键操作
- 歌词滚动
- 正在播放
- 排行榜
- 歌单详情
- 搜索
- 播放历史
- 查看评论
- 同步网易云歌单
