<!--
 * @Description: app页面
 * @version: 
 * @Author: Fiona
 * @Date: 2020-10-22 09:43:14
 * @LastEditors: Fiona
 * @LastEditTime: 2020-10-22 17:12:55
-->
<template>
  <div id="app">
    <HeaderPart></HeaderPart>
  </div>
</template>

<script>
import HeaderPart from './components/Header/Header'

export default {
  name: 'App',
  components: {
    HeaderPart
  }
}
</script>

<style>
#app {
}
</style>
