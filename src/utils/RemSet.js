/**
 * @description 设置rem
 * @returns 1:100
 */
export default function fnResize () {
   let deviceWith = document.documentElement.clientWidth || window.innerWidth;
   if(deviceWith >= 750) {
     deviceWith = 750;
   }
   if(deviceWith <= 320) {
     deviceWith = 320;
   }
   document.documentElement.style.fontSize = (deviceWith / 7.5) + 'px'
}