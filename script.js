function creat (src) {
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  head.appendChild(script);
}

document.body.style.backgroundColor = 'red'

creat('https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js')

// 结束捷径操作
if (completion) {
  completion()
}