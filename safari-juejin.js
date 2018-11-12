var className = '分类名称'  
var results = {}

function getValue (selector) {
  return document.getElementsByClassName('article-title')[0].innerHTML
}

results.name = getValue('#juejin > div.view-container > main > div > div.main-area.article-area.shadow > article > h1')

results.url = location.href

results.md = `
- name: 新闻
  list:
  - name: Visual Studio 公布 2019 宜居度路线图，有你期待的吗
    url: https://docs.microsoft.com/zh-cn/visualstudio/productinfo/vs-roadmap
`

console.log('results', results)

completion(results)