// gsap-物件、to-方法、.box-目標、{ }-屬性或參數

// set，定義初始狀態，需搭配其他語法
gsap.set("#box1", { x: 100 });

// X:100 寫法等於transform: 'translateX(100px)'
gsap.to("#box2", { x: 100, duration: 2});

// gsap.to 反向語法：gsap.from
gsap.from("#box3", { x: 100, duration: 2 });

// fromTo，需傳入兩個物件，第一個物件為當前狀態，第二個物件為目標狀態
gsap.fromTo("#box4", { x: 0 }, { x: 100, duration: 2 });

// repeat-重複
gsap.to("#box5", { x: 100, duration: 2, repeat: -1 });

// 可以使用document.querySelector()的方式來選取，加入旋轉及邊移動邊縮放
const box6 = document.querySelector("#box6");
gsap.to(box6, { x: 100, duration: 2, rotate: 360, scale: 1.5 });

// 選取多個目標
const boxAll = document.querySelectorAll(".box-all");
gsap.to(boxAll, { x: 100, duration: 2 });


gsap.registerPlugin(ScrollTrigger);
// 不同className，用陣列方式傳入，邊移動邊改變顏色
// 加入ScrollTrigger
// trigger：觸發的元素，也就是當滾動到這個元素時，就會觸發動畫。
// start：觸發的開始位置，也就是當滾動到 trigger 元素的 start 時，就會觸發動畫。
// end：觸發的結束位置，也就是當滾動到 trigger 元素的 end 時，就會結束動畫。
// scrub：是否要啟用滾動動畫，如果設定為 true，則會在滾動時，動畫會跟著滾動，如果設定為 false，則會在滾動到 end 時，才會觸發動畫。
gsap.to([".box-blue", ".box-gray"], {
  scrollTrigger: {
    trigger: ".box-gray",
    scrub: false,
  },
  x: 100,
  duration: 2,
  backgroundColor: "red",
});

