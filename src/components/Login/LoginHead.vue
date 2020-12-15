<!--
 * @Description: 登录头部
 * @version: 
 * @Author: Fiona
 * @Date: 2020-12-14 14:22:19
 * @LastEditors: Fiona
 * @LastEditTime: 2020-12-15 11:32:02
-->
<template>
    <section :class="$style.wrap">
        <header :class="$style.header">
            <router-link :active-class="$style.active" :to="{name:`${urlInfo}`, params: {parentPath}}" >登&nbsp;录</router-link> 
            <router-link :active-class="$style.active" :to="{name:'register', params: {parentPath}}" >注&nbsp;册</router-link>   
        </header>
        <slot />
    </section>
</template>
<script>
  export default {
      props: {
          urlInfo:{ type: String, default:'login' }
      },
      computed: {
         parentPath() {
             console.log('ccc')
             const routerInfo = this.$route.params.parentPath
             if(routerInfo) {
                 return routerInfo
             } else {
                 return ''
             }
         }
      }
  }
</script>
<style module lang="postcss">
    .wrap {
        box-sizing: border-box;
        height: 100%;
        padding: 40px;
        text-align: center;
    }
    .header {
        display: flex;
        justify-content: space-between;
        width: 280px;
        margin: 40px auto;
        font-weight: normal;
        font-size: 48px;
    }
    .active {
      padding-bottom: 6px;
      border-bottom: 1px solid #2196f3;
      color: #2196f3;
    }
</style>