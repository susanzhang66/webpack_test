// 自定义loader
// loader 就是一个函数 ，不可以是箭头函数
// loader必须有返回值
// loader如何接受参数
// loader 的 api 都挂载this对象上
// 如何返回多种信息 this.callback
// 如何处理异步逻辑 this.async
// 多个自定义loader如何处理

// 自定义loader工具包
const getOptions = require('loader-utils') ;
// 异步 同步处理
module.exports = function (source) {
  // console.log(this, this.query, source);
  // 获取参数
  console.log(getOptions.getOptions(this))
  // 获取参数
  console.log(this.query);
  // this.query: //配置项里 传入的参数

  // 异步处理 this.async()
  const callback = this.async();
  setTimeout(() => {
    const content = source.replace("hello", "哈哈");
    callback(null, content);
  }, 3000);
  
  //   this.callback(null, content);
  //   return source.replace("hello", this.query.name);
};
