// 导入组件
import RsTabList from './src/rs-tablist.vue'

// 为组件提供 install 安装方法，供按需引入
RsTabList.install = function(Vue) {
  Vue.component(RsTabList.name, RsTabList)
}

// 默认导出组件
export default RsTabList
