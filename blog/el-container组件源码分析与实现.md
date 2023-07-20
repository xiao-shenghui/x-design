# el-container组件源码分析与实现

> el-container组件源码分析与实现, 含header,aside,main和footer组件

## el-container

### 组件用法

```html
<!--上下布局-->
<el-container>
  <el-header>Header</el-header>
  <el-main>Main</el-main>
</el-container>
<!--左右布局-->
<el-container>
  <el-aside width="200px">Aside</el-aside>
  <el-main>Main</el-main>
</el-container>
<!--上，下（左右）布局-->
<el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>
<!--左，右（上下布局）-->
<el-container>
  <el-aside width="200px">Aside</el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
  </el-container>
</el-container>
```

- el-container: 当子元素中包含 <el-header> 或 <el-footer> 时，全部子元素会垂直上下排列，否则会水平左右排列。(联想到flex布局，问题是如何判断子元素？)
- el的解释：<el-container> 的子元素只能是后四者，后四者的父元素也只能是 <el-container>(如何遍历判断所有子元素？)
- el-container: 有`direction`,提供两个可选值`horizontal / vertical`，子元素中有 `el-header` 或 `el-footer` 时为 vertical，否则为 horizontal
- el-aside: 有`width`属性，用于指定侧边栏的宽度。
- el-header: 有`height`属性，用于指定底部栏的高度。
- el-footer: 有`height`属性，用于指定底部栏的高度。

> 猜测实现原理：首先direction的值，由遍历子元素的name，遍历的结果自动决定，获取当用户指定的话，以指定的为准。
其次，使用direction设置flex布局的flex-direction。
其次，遍历子元素name时，如果出现了意料之外的name,则报错。
其次，el-aside组件内，有个默认的宽度，不然会占满全局。同理，el-header和el-footer有默认的高度。这两个属性的值，都用props接收，指定默认值。

### 查看源码

2023-07-20 20:58 待更新......
