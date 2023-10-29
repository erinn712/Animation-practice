// 加入AOS Script
AOS.init({
  // Global settings:
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,

  // 以下也可以用data-aos-*放入element來設定樣式
  // 完成動畫所需的時間，範圍從 0-3000
  duration: 800,
  // 動畫觸發的位置
  anchorPlacement: "top-center",

  // 網頁往下滑時與視窗大小底端距離多長才會出現動畫效果，但不要設0，感覺會跟沒動畫一樣。
  // offset: 120,

  // 延遲時間，範圍從 0-3000，通常不會設定，設定時間太長會有網頁太慢載入的感覺
  // delay: 0,

  // 400、600、800毫秒蠻常使用，建議不要超過1秒以上
  // duration: 400,

  // 動畫曲線
  // easing: 'ease',

  // 動畫是否只跑一次
  // once: false,

  // mirror: false,
});
