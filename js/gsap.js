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
    start: "top center",
    toggleActions: "play none reverse reverse",
    // toggleActions: "onEnter onLeave onEnterBack onLeaveBack"
  },
  x: 200,
  duration: 2,
  backgroundColor: "red",
});

gsap.to("#scroll-pause", {
  scrollTrigger: {
    trigger: "#scroll-pause",
    start: "top center",
    toggleActions: "play pause reverse reverse",
  },
  x: 200,
  duration: 2,
  backgroundColor: "red",
});

gsap.to("#scroll-scrub", {
  scrollTrigger: {
    trigger: "#scroll-scrub",
    scrub: true,
    start: "top center",
  },
  x: 200,
  duration: 2,
  backgroundColor: "red",
});

// 自訂屬性
gsap.registerPlugin({
  name: "myCustomProperty",
  init(target, value) {
    gsap.to(target, {
      scrollTrigger: {
        trigger: ".box-gray",
        scrub: false,
      },
      x: value.x,
      backgroundColor: value.backgroundColor,
      rotate: value.rotate,
      duration: value.duration,
    });
  }
});

gsap.to("#box9", {
  myCustomProperty: {
    x: 200,
    backgroundColor: 'red',
    rotate: 720,
    duration: 3
  }
});


// Timeline(動畫依序執行)加上X軸、Y軸
// Timeline可加上第三個參數：tl.to('選擇器',{執行動畫},'position')
// start：指定動畫開始時間為時間軸的開始時間
// end：指定動畫開始時間為時間軸的結束時間
// +=1：指定動畫開始時間為時間軸的開始時間 + 1 秒
// -1：指定動畫開始時間為時間軸的開始時間 - 1 秒
// +=0.5：指定動畫開始時間為時間軸的開始時間 + 0.5 秒
// +=0.25：指定動畫開始時間為時間軸的開始時間 + 0.25 秒
// <：指定動畫開始時間為時間軸上前一個動畫的結束時間
// >：指定動畫開始時間為時間軸上前一個動畫的開始時間
let tl = gsap.timeline({repeat: -1, repeatDelay: 1, yoyo: -1})

tl.to("#box10", {
  x: 100,
  y: 250,
  duration: 2,
})

  // 回到原點
  .to("#box10", {
    x: 305,
    y: 120,
    duration: 3,
  })

  .to("#box10", {
    x: 100,
    y: 10,
    duration: 2,
  })

  .to("#box10", {
    x: 305,
    y: 120,
    duration: 3,
  })

  .to("#box10", {
    x: 510,
    y: 250,
    duration: 2,
  })

  .to("#box10", {
    x: 305,
    y: 120,
    duration: 3,
  })

  .to("#box10", {
    x: 510,
    y: 10,
    duration: 2,
  });

// ease改變動畫速度
gsap.to("#box-elastic-out", {
  scrollTrigger: {
    trigger: "#box-elastic-out",
    scrub: false,
  },
  x: 100,
  duration: 3,
  ease: "elastic.out",
});

gsap.to("#box-bounce-out", {
  scrollTrigger: {
    trigger: "#box-elastic-out",
    scrub: false,
  },
  x: 100,
  duration: 2,
  ease: "bounce.out",
});


// 跑馬燈
gsap.to([".marquee-p", ".marquee-box"], {
  x: -800,
  duration: 8,
  repeat: -1,
  ease: 'none',
  yoyo: -1,
})


// 動畫控制

let tween = gsap.to('#control', {
  x: 600,
  duration: 5,
  rotate: 720,
  ease: 'none'
})

document.querySelector("#play").onclick = () => tween.play();
document.querySelector("#pause").onclick = () => tween.pause();
document.querySelector("#resume").onclick = () => tween.resume();
document.querySelector("#reverse").onclick = () => tween.reverse();
document.querySelector("#restart").onclick = () => tween.restart();
document.querySelector("#seek").onclick = () => tween.seek(1);
