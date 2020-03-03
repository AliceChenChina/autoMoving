let str = `/*你好
  我是陈子君
  下面是我做的一个八卦图
  首先我们要准备个div
 */
 #wrapper {
 border: 1px solid red;
    width: 200px;
    height: 200px;
 }
 /*
 * 先把div变成圆
 */
 #wrapper {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
 }
 /* 八卦是阴阳形成的
 * 一黑一白
 **/
#wrapper{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
#wrapper::before{
content:'';
display:inline-block;
    width: 100px;
    height: 100px;
    position:absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#wrapper::after{
content:'';
display:inline-block;
    width: 100px;
    height: 100px;
    position:absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`
let container = document.querySelector('#container');
let style = document.querySelector('#style');
let wrapper = document.querySelector('#wrapper');
let n=0;
let str1 = '';
let timer = setInterval(()=> {
  if (str[n] === '\n'){
    str1 += "<br>";
  }else if (str[n] === ' '){
    str1 += '&nbsp;';
  }else {
    str1 += str[n];
  }
  container.innerHTML = str1;
  style.innerHTML = str.substring(0,n);
  let windowObj = document.documentElement || document.body;
  // 判断是否触屏设备
  const isTouchDevice = 'ontouchstart' in document.documentElement;
  if (isTouchDevice) {
    scroll(container, () => {
      container.scroll(0,9999);
    });
  } else {
    scroll(windowObj, () => {
      window.scroll(0,9999);
    });
  }
  n = n+1;
  if (n >= str.length) {
    clearInterval(timer);
  }
}, 0);
// obj 为轮动的对象，fn为滚动的函数
function scroll (obj, fn) {
  // 可视高度
  let clientHeight = obj.clientHeight;
  // 文档实际高度
  let scrollHeight = obj.scrollHeight;
  if (clientHeight < scrollHeight) {
    fn()
  }
}
