class TxtWebpackPlugin {
  // apply函数 帮助插件注册，接收complier类
  // 暗号：做人嘛，最重要的是开心
  constructor(options) {
    console.log(options);
  }
  apply(complier) {
    //   complier.hooks.
    //emit 输出asset阶段。
    complier.hooks.emit.tapAsync("TxtWebpackPlugin", (compilation, cb) => {
        // console.log(compilation);
      compilation.assets["fileList.txt"] = {
        source: function () {
          // 定义文件的内容
          var str = JSON.stringify(Object.keys( compilation.assets ).filter(( file )=>  file !== 'fileList.txt')) + ''
          return str;
        },
        size: function () {
          // 定义文件的体积
          return 1024;
        },
      };
      cb();
    });
    complier.hooks.compile.tap("TxtWebpackPlugin", (compilation) => {
      console.log("哈哈 我是一个同步的钩子");
    });
  }
}

module.exports = TxtWebpackPlugin;
