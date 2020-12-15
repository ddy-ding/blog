<!--
 * @Description: app页面
 * @version: 
 * @Author: Fiona
 * @Date: 2020-10-22 09:43:14
 * @LastEditors: Fiona
 * @LastEditTime: 2020-12-14 17:42:39
-->
<template>
  <div id="app"  :class="$style.wrap">
    <HeaderPart :class="$style.header"/>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <main :class="$style.main">
       <transition :name="transitionName">
           <router-view :class="$style.router"></router-view>
       </transition> 
    </main>
  </div>
</template>

<script>
import HeaderPart from '@/components/Header/Header'

export default {
  name: 'App',
  data() {
      return {
        transitionName: 'left',
      }
  },
  components: {
     HeaderPart
  },
  computed: {
  },
 // watch $router 决定使用哪种过渡
 //  目标导航下标:to.meta.index
 //  离开导航下标：from.meta.index
  watch: {
      '$route'(to, from) {
          this.transitionName = to.meta.index < from.meta.index ? 'right' : 'left'
      }
  }
}
</script>

<style module lang="postcss">
 * {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  
  html {
    height: 100%;
  }
  
  body {
    height: 100%;
    overflow: hidden;
    background-image: linear-gradient(90deg, #f3f3f3 2px, transparent 0), linear-gradient(#f3f3f3 2px, transparent 0), linear-gradient(90deg, #f3f3f3 1px, transparent 0), linear-gradient(#f3f3f3 1px, transparent 0);
    background-size: 100px 100px, 100px 100px, 40px 40px, 40px 40px;
    background-color: #fafafa;
    -webkit-font-smoothing: antialiased;
  }
  
  /* 格式化边距及边框 */
  body,
  p,
  h1,
  h2,
  h3,
  h4,
  dl,
  dd,
  figure {
    margin: 0;
  }
  
  ol,
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  fieldset,
  img {
    border: 0;
  }
  
  /* 要注意表单元素并不继承父级 font 的问题 */
  body,
  button,
  input,
  select,
  textarea {
    font: 12px/1.2 PingFang SC, Lantinghei SC, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
  }
  
  @media all and (min-width: 900px) {
    body,
    button,
    input,
    select,
    textarea {
      font-size: 15px;
    }
  }
  
  /* 去掉各Table cell 的边距并让其边重合 */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  /* 默认不显示下划线，保持页面简洁 */
  a {
    text-decoration: none;
    color: inherit;
  }
  
  /* 表单格式化 */
  input,
  button,
  textarea {
    padding: 0;
    border: none;
    outline: none;
    background: none;
    -webkit-appearance: none;
  }
  
  /* 代码片断 */
  pre,
  code,
  pre tt {
    font-family: Courier, 'Courier New', monospace;
  }
  
  /* 电脑端自定义滚动条 */
  @media all and (min-width: 900px) {
    ::-webkit-scrollbar {
      width: 6px;
    }
  
    ::-webkit-scrollbar-track {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);
    }
  
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: rgba(0, 0, 0, .1);
    }
  }
  
  .wrap {
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    background: #fafafa;
  }
  
  .header {
    height: 80px;
  }
  
  .main {
    position: relative;
    height: calc(100% - 40px);
    overflow: auto;
  }
  
  .router {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
  }
</style>
<style scoped>
   .left-enter,
   .right-leave-to {
     transform: translate3d(100%, 0, 0);  /* 左进右出 */
   }
   
   .left-leave-to,
   .right-enter {
     transform: translate3d(-100%, 0, 0);  /* 左出右进 */
   }
   
   .left-enter-active,
   .left-leave-active,
   .right-enter-active,
   .right-leave-active {  /*离开切换动画*/
     transition: transform .5s;
   }
</style>
