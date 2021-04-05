module.exports = function (source) {
  // style
  // style ={ source}
  // style -> head
  return `const tag = document.createElement('style');
        tag.innerHTML = ${source};
        document.head.appendChild(tag)
    `;
};
