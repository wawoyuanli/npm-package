// 导入组件
import RsVehicleList from './src/rs-vehiclelist.vue'

// 为组件提供 install 安装方法，供按需引入
RsVehicleList.install = function(Vue) {
  Vue.component(RsVehicleList.name, RsVehicleList)
}

// 默认导出组件
export default RsVehicleList
