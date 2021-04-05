// 要自定义插件，那么最重点的是 了解 webpack的生命周期。
class TxtWebpackPlugin {
  // apply函数 帮助插件注册，接收complier类
  constructor(options) {
    console.log(options);
  }
  apply(complier) {
    //   complier.hooks.
    // 异步的要用这个 tapAsync
    complier.hooks.emit.tapAsync("TxtWebpackPlugin", (compilation, cb) => {
      //   console.log(compilation.assets);
      compilation.assets["laohan.txt"] = {
        source: function () {
          // 定义文件的内容
          return "明月几时有，我赌特朗普连任！！！！！！！";
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


// compilation： 当 Webpack 以开发模式运行时，每当检测到文件变化，一次新的 Compilation 将被创建。一个 Compilation 对象包含了当前的模块资源、编译生成资源、变化的文件等。Compilation 对象也提供了很多事件回调供插件做扩展。
