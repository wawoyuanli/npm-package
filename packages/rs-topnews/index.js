// 导入组件
import RsTopnews from './src/rs-topnews.vue'

// 为组件提供 install 安装方法，供按需引入
RsTopnews.install = function(Vue) {
  Vue.component(RsTopnews.name, RsTopnews)
}

// 默认导出组件
export default RsTopnews
