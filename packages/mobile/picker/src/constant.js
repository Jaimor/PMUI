export default {
  ulKey: 'PM_PICKER_UL',
  liKey: 'PM_PICKER_LI',
  selectedHeight: 2.5 * 16,   //2.5在picker.less中的@picker-content-ul-li-height定义，16为html的font-size。这样写死其实不好，一点修改都不好维护
  util: {
    getParent(event) {
      if (event.target)
        return event.target.parentNode;
      return null;
    }
  }
}
