<template>
  <ul class="menu">
    <li class="menuList" v-for="(item,index) in menuData" :key="index">
      <div class="name">{{ item.name}}</div>
      <div class="category">{{ item.category}}</div>
    </li>
  </ul>
</template>
<script>
  import homeMenu from './HomeMenu'
  export default homeMenu
</script>
<style lang="scss" scoped src="./HomeMenu.scss">

</style>