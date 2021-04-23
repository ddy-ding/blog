<template>
  <ul class="menu">
    <li class="menuList" v-for="(item,index) in menuData" :key="index"  @click="goCategory(item.category_id)">
      <div class="name">{{item.category_des }}</div>
      <div class="category">{{ item.category_name }}</div>
    </li>
  </ul>
</template>
<script>
  import homeMenu from './HomeMenu'
  export default homeMenu
</script>
<style lang="scss" scoped src="./HomeMenu.scss">

</style>