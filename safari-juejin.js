// 测试

function completion (data) {
  console.log('completion', data)
}

// 测试

// 第一部分开始

// 用户选择的分类
var type = '选取的项目'
// 返回的结果
var results = {
  name: document.title,
  note: document.title,
  url: location.href,
  type: type
}

completion(JSON.stringify(results))

// 第一部分结束










// 测试

function completion (data) {
  console.log('completion', data)
}

// 测试

// 第二部分开始 在 github 网页上运行

function getDate () {
  const dt = new Date()
  let year = dt.getFullYear()
  let month = dt.getMonth() + 1
  let day = dt.getDate()
  month = month < 10 ? '0' + month : month
  day = day < 10 ? '0' + day : day
  return `${year}年${month}月${day}日`
}

var githubQueryObj = JSON.parse('剪贴板')

document.querySelector('#new_issue > div > input').value = `🔗 日报提交 | ${githubQueryObj.name}`

document.querySelector('#new_issue > div > textarea').value = `
**:hash: 标题** : ${githubQueryObj.name}

**:page_with_curl: 介绍** : ${githubQueryObj.note}

**:link: 链接** : [${githubQueryObj.url}](${githubQueryObj.url})

**:pencil2: Markdown**

\`\`\`
- name: ${githubQueryObj.type}
  list:
  - name: ${githubQueryObj.name}
    note: ${githubQueryObj.note}
    url: ${githubQueryObj.url}
\`\`\`

由 iOS12 捷径 APP 自动提交
`.trim()

const buttonSubmit = document.querySelector('#new_issue > div > button')
buttonSubmit.disabled = false
buttonSubmit.click()

completion()

// 第二部分结束