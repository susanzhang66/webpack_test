// 自定义loader
// loader 就是一个函数 ，不可以是箭头函数
// loader必须有返回值
// loader如何接受参数
// loader 的 api 都挂载this对象上
// 如何返回多种信息 this.callback
// 如何处理异步逻辑 this.async
// 多个自定义loader如何处理
// 如何处理自定义loader的路径问题
module.exports = function (source) {
  return source.replace("webpack", "好好笑");
};


// 自定义loader最重要的是 ，它是一个回调函数，里面会传source资源过来，然后去返回你更改的内容就好了。还有了解同步，异步的问题。
