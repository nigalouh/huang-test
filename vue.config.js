
module.exports = {
  //关闭校验工具
  lintOnSave:false,
  pages:{
  index:{
    //入口
      entry:'src/main.js',
  },
},

//开启代理服务器
devServer:{
  proxy:{
    '/atguigu':{
      target:'http://localhost:5000',
      pathRewrite:{'^/atguigu':''},
      ws:true,
      changeOrigin:true
    },
    './api':{
      target:' http://gmall-h5-api.atguigu.cn',
      pathRewrite:{'^/api':''},
    }
    // '.demo':{
    //   target:'http://localhost:5001',
    //   pathRewrite:{'^/demo':''},
    // }
   
  }
 }
}


