export default {
  ulKey: 'PM_PICKER_UL',
  liKey: 'PM_PICKER_LI',
  util: {
    getParent(event) {
      if (event.target)
        return event.target.parentNode;
      return null;
    }
  }
}
