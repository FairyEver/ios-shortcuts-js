// var className = '分类名称'  
// var results = {}

// function getValue (selector) {
//   return document.getElementsByClassName('article-title')[0].innerHTML
// }

// results.name = getValue('#juejin > div.view-container > main > div > div.main-area.article-area.shadow > article > h1')

// results.url = location.href

// results.md = `
// - name: 新闻
//   list:
//   - name: Visual Studio 公布 2019 宜居度路线图，有你期待的吗
//     url: https://docs.microsoft.com/zh-cn/visualstudio/productinfo/vs-roadmap
// `.trim()

// console.log('results', results)

// completion(encodeURI(JSON.stringify(results)))

// 第二部分

// function getDate () {
//   const dt = new Date()
//   let year = dt.getFullYear()
//   let month = dt.getMonth() + 1
//   let day = dt.getDate()
//   month = month < 10 ? '0' + month : month
//   day = day < 10 ? '0' + day : day
//   return `${year}年${month}月${day}日`
// }

// var githubQuery = 'daily={"name":"Vue.js 你不知道的奇技淫巧","url":"https://juejin.im/post/5be01d0ce51d450700084925"}'

// var githubQueryObj = JSON.parse(decodeURI(githubQuery.substr(6)))

// console.log(githubQueryObj)

// document.querySelector('#new_issue > div > input').value = `日报提交测试 - ${githubQueryObj.name}`

// document.querySelector('#new_issue > div > textarea').value = `
// **:hash: 标题** : ${githubQueryObj.name}

// **:link: 链接** : [${githubQueryObj.url}](${githubQueryObj.url})

// **:page_with_curl: 介绍** : 暂无
// `.trim()

// const buttonSubmit = document.querySelector('#new_issue > div > button')
// buttonSubmit.disabled = false
// buttonSubmit.click()

// completion()