// 导入组件
import RsSelectBox from './src/select-box.vue'

// 为组件提供 install 安装方法，供按需引入
RsSelectBox.install = function(Vue) {
  Vue.component(RsSelectBox.name, RsSelectBox)
}

// 默认导出组件
export default RsSelectBox
