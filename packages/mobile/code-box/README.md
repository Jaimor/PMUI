### 示例
```js
<pm-code-box
  ref="psd1"
  length="4"
  gutter="1"
  info="请输入验证码"
  @box-click="boxClick('psd1')"
  v-model="password1"
></pm-code-box>
```
### 属性方法
#### props
| 参数 | 类型 | 说明 | 可选参数 | 默认值 |
| --- | --- | --- | --- | ---|
| v-model | Array | 输入的值 | - | - |
| info | String | 提示信息 | - | - |
| length | [Number,String] | 输入框个数 | - | 4 |
| gutter | [Number, String] | 输入框之间的间距 | - | - |
| password | Boolean | 是否为密码输入，隐藏输入值 | - | - |
#### events
| 事件名称 | 说明 | 回调参数 | 
| --- | --- | --- |
| click | 点击输入框事件 | - |
