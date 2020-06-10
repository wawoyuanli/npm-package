/**
 *统一配置插件
 */
import RsTab from './rs-tab/index'

var components=[
   
    RsTab,
    
]

const install=Vue=>{
    // 判断是否可以安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
  }

  const defaultObj = {
    install
  }
  
  components.map((item) => { defaultObj[item.name] = item })
  
  export default defaultObj