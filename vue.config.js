
const path=require('path')
module.exports={
	// 修改pages入口文件
	// pages:{
	// 	index:{
	// 	entry:'src/main.js',
	// 	template:'public/index.html', //模版
	// 	filename:'index.html' //输出文件
    // 	}
	// },
	publicPath:'./',
	outputDir:'dist',
	assetsDir:'static',
	indexPath:'index.html',
	// 扩展webpack配置
	chainWebpack:config=>{
  config.resolve.alias
  .set('@',path.resolve('src'))
  .set('~',path.resolve('packages'))

  config.module
	.rule('js')
	.include.add(/packages/).end()
	.include.add(/src/).end()
	.use('babel')
	.loader('babel-loader')
	.tap(options=>{
		return options
	})
	},
	lintOnSave:false,
	devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
 },
 productionSourceMap:false,
 filenameHashing:true

//  module:{
//    rules:[
// 	   {
// 		   test:/\.(png|jpg|gif|svg)$/,
// 		   use:[
// 			   {
// 				   loader:'file-loader',
// 				   options:{
// 					   name:'[path][name].[ext]'
// 				   }
// 			   }
// 		   ]
// 	   }
//    ]
//  }
//  // publicPath:'./',
// 	// outputDir:'lib',
// 	// indexPath:'index.html' , //主页
}