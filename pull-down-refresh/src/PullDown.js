import hammer from 'hammerjs';
export default function WebPullToRefresh() {
  var defaults = {
    bodyEl: document.body,  // 最外层盒子u
    contentEl: null,       // 内容区域
    ptrEl: null,            // loading
    distance: 40,
    loadingFunction: () => {},    // 返回 Promise
    resistance: 2.5        // 阻尼  100px / 2.5
  }
  function init(options) {
    options = {
      ...defaults,
      ...options
    }
    const h = new hammer(options.contentEl);
    h.get('pan').set({ direction: hammer.DIRECTION_VERTICAL })
    h.on('panstart', _panStart);
    h.on('pandown', _panDown);
    h.on('panup', _panUp);
    h.on('panend', _panEnd);
    const ptrClass = options.ptrEl.classList;
    let pan = {};
    function _panStart() {
      ptrClass.add('ptr-start');
    }
    function _panDown(e) {
      console.log('pan down');
      pan.distance = e.distance / options.resistance;
      _setContentPan();
    }
    function _panUp() {}
    function _panEnd() {}
    function _setContentPan() {
      options.contentEl.style.transform = 
      `translate3d(0, ${pan.distance}px, 0)`;
    }
  }
  return {
    init
  }
}
