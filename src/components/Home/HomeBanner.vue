<!--
 * @Description: banner页面
 * @version: 
 * @Author: Fiona
 * @Date: 2020-12-18 10:44:20
 * @LastEditors: Fiona
 * @LastEditTime: 2020-12-18 11:51:16
-->
<template>
    <section :class="$style.wrap">
        <ul 
          @mouseleave="autoStart"
          @mouseenter="autoStop"
        >
            <li 
              v-for="(item,i) in imgData"
              :key="i"
            >
                <img :src="item.src"/>
            </li>
        </ul>
    </section>
</template>
<script>
  export default {
      data() {
          return {
              imgData: [
                  {
                      id:'1',
                      name:'HTML',
                      src: require('@/assets/imgs/html.png'),
                      url:''
                  },
                  {
                      id:'2',
                      name:'CSS',
                      src: require('@/assets/imgs/css.png'),
                      url:''
                  },
                  {
                      id:'3',
                      name:'HTML',
                      src: require('@/assets/imgs/javascript.png'),
                      url:''
                  },
                  {
                      id:'4',
                      name:'HTML',
                      src: require('@/assets/imgs/vue.png'),
                      url:''
                  },
                  {
                      id:'5',
                      name:'HTML',
                      src: require('@/assets/imgs/react.png'),
                      url:''
                  }
              ],
              index:0
          }
      }
      
  }
</script>
<style module lang="postcss">
    .wrap {
        position: relative;
        height: 140px;
        overflow: hidden;
    }
</style>