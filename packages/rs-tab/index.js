/**
 * 单个插件配置
 */
// 导入组件
import RsTab from './src/rs-tab.vue'

// 为组件提供 install 安装方法，供按需引入
RsTab.install = function(Vue) {
  Vue.component(RsTab.name, RsTab)
}

// 默认导出组件
export default RsTab
