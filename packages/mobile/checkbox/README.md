### 示例
```html
<pm-checkbox v-model="check1">这里是基本用法</pm-checkbox>

<pm-checkbox-group v-model="checkGroup">
  <pm-checkbox>组1</pm-checkbox>
  <pm-checkbox>组2</pm-checkbox>
  <pm-checkbox disabled>组3</pm-checkbox>
  <pm-checkbox>组4</pm-checkbox>
</pm-checkbox-group>
```
### 属性方法
#### props
| 参数 | 类型 | 说明 | 可选参数 | 默认值 |
| --- | --- | --- | --- | ---|
| v-model | Boolean | 标志是否被选中 | true,false | false |
| checkedColor | String | 选中时的背景颜色 | - | #1989fa |
| disabled | Boolean | 是否被禁用 | - | - |
#### events
| 事件名称 | 说明 | 回调参数 | 
| --- | --- | --- |
| - | - | - |
#### 依赖
| 依赖组件 | 引入 | 
| --- | --- |
| pm-icon | import { PmIcon } from '...' |
