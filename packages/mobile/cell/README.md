### 示例
```js
<pm-cell title="基础用法" value="abc"></pm-cell>

<pm-cell-group title="基础信息">
  <pm-cell title="年龄" value="20"></pm-cell>
  <pm-cell title="性别" value="男" :title-ratio="5"></pm-cell>
</pm-cell-group>
```
### 属性方法
#### props
| 参数 | 类型 | 说明 | 可选参数 | 默认值 |
| --- | --- | --- | --- | ---|
| iconClass | String | 自定义图标 | - | - |
| icon | String | 框架内的图标 | - | - |
| isLink | Boolean | 是否显示右边箭头 | true,false | false |
| title | String | 标题 | - | - |
| value | [String, Number] | 右边的值 | - | - |
| titleRatio | [String, Number] | 标题占的比列 | 1-10 | 5 |
| path | String | isLink为true时，点击后使用router跳转地址 | - | - |
| link | String | isLink为true时，点击后使用location.href跳转地址 | - | - |
#### events
| 事件名称 | 说明 | 回调参数 | 
| --- | --- | --- |
| click | 点击按钮事件 | event |
