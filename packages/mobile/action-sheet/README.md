### 示例
```js
<pm-button type="success" @click="open">打开</pm-button>
<pm-action-sheet
    v-model="show"
    title="测试"
    :actions="actions"
    @action-click="action"
></pm-action-sheet>
    
export default {
    name: "ActionSheetTest",
    data() {
      return {
        show: false,
        actions: [{title: '按钮1'}, {title: '按钮2'}, {title: '按钮3'}]
      }
    },
    methods: {
      open() {
        this.show = true;
      },
      action(index) {
        alert(index);
      }
    }
  }
```
### 属性方法
#### props
| 参数 | 类型 | 说明 | 可选参数 | 默认值 |
| --- | --- | --- | --- | ---|
| v-model | Boolean | 控制显示 | true,false | false |
| showMask | Boolean | 是否现实蒙版 | true,false | true |
| title | String | 标题(可选)，填写了就显示 | - | - |
| actions | Array | 选项列，数据示例[{title: '按钮1'}, {title: '按钮2'}] | - | - |
| actionKey | String | 数据列中的属性名称(可选) | - | title |
#### events
| 事件名称 | 说明 | 回调参数 | 
| --- | --- | --- |
| click | 点击选项事件 | actions中被点击的下标 |
| cancel | 点击取消按钮事件 | event |