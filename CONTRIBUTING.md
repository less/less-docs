##贡献文档

**标准格式**

为了在文档中所有的例子的一致性和确保我们例子中代码的可读性，在创建文件的时候，请按照以下指引：

*四个空格的缩进并合理的使用缩进
*多行格式（每行一个属性和一个属性值）
*只能使用双引号，不能使用单引号
*总是在属性的冒号后面空一格（例如：“display: block;”，不能“display:block;”）
*所有行都要以分号结束
*对于多个以逗号分隔的选择器，每个选择器都要单独一行
*属性选择器，例如“input[type="text"]”,应该总是用双引号包着属性值。这样做对你代码的一致性和安全性是非常重要的（阅读[blog post on unquoted attribute values](http://mathiasbynens.be/notes/unquoted-attribute-values)就会明白，这会导致XSS攻击）
*在你的例子中用HTML时，要使用符合HTML5 Doctype的标签和元素（例如：自结束标签用_on尾随slash_）
*所有的页面文件应具有全局唯一的名称，不管这些文件在哪个库中

##工具

###组合

*访问[Assemble's documentation](http://assemble.io/docs/)学习更多关于定制和配置的知识。
*Markdown: [Markdown Cheatsheet](http://assemble.io/docs/Cheatsheet-Markdown.html)

##代码风格

例子：

**符合标准**

```css
body {
	padding-top: 80px;
	font-size: 12px;
}
```

**不符合标准**

```css
body {
padding-top: 80px;
font-size: 12px;
}
```

**不符合标准**

```css
body { padding-top: 80px; font-size: 12px }
```

### 功能请求，Bugs 和 Pull 请求

*如果你想请求新功能，建议改进或是反馈错误，请[提交问题]({{ site.codeissues }})。
*如果你能附加一个清晰的描述用例，这样你的功能要求会更容易得到关注。
*如果你想提交pull请求，首先请阅读[这里]({{ site.codebasemaster }}CONTRIBUTING).md。

