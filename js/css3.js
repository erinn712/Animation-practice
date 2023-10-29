const example1 = document.querySelector(".example1Css");
const example2 = document.querySelector(".example2Css");

console.log(window.innerHeight);
window.addEventListener("scroll", animaRun);

function animaRun() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  const boxBottom = example1.getBoundingClientRect().bottom;
  const boxTop = example1.getBoundingClientRect().top;
  console.log(triggerBottom, boxBottom);

  // 加入動畫
  if (boxBottom < triggerBottom) {
    example1.classList.add('example1')
    example2.classList.add('example2');

  // 清除動畫
  } else if (boxTop > window.innerHeight) {
    example1.classList.remove("example1");
    example2.classList.remove("example2");

  // 直接加入動畫效果
  // example1.style.animation = "example1 2s forwards";
  }
}
