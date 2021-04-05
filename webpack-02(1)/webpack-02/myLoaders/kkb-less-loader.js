// 使用 less模块处理less语法

const less = require("less");

module.exports = function (source) {
  less.render(source, (error, output) => {
    let { css } = output;
    this.callback(error, css);
  });
};
