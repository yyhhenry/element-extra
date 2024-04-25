# @yyhhenry/element-extra

对 ElementPlus 的简单封装。覆盖了一些常用的组合使用场景。

A simple encapsulation of ElementPlus. Covering some common combination usage scenarios.

## Installation

```bash
npm install @yyhhenry/element-extra
```

你仍然需要在你的工作区安装vue和element-plus，另外，不要忘记对CSS进行引入。

You still need to install vue and element-plus in your workspace, and don't forget to import CSS.

对本仓库的 CSS 进行引入，会自动引入本仓库依赖的确切版本的 element-plus 的 CSS，如果这不符合你的需求，你可以自行从源码构建本仓库的 CSS。

Importing the CSS of this repository will automatically import the CSS of the exact version of element-plus that this repository depends on. If this does not meet your needs, you can build the CSS of this repository from the source code.

```css
@import '/node_modules/@yyhhenry/element-extra/dist/style.css';
/* 
or in main.js:
import '@yyhhenry/element-extra/dist/style.css';
*/
```
