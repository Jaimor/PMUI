const ZIndex = (_ => {
  let _instance = null;
  function F() {}
  F.prototype.zIndex = 2000;
  F.prototype.nextZIndex = function () {
    return ++this.zIndex;
  };
  return {
    getInstance() {
      if (!_instance) {
        _instance = new F();
      }
      return _instance;
    }
  }
})();

export default ZIndex.getInstance();
