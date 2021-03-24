<template>
  <ul class="menu">
    <li v-for="(item,index) in menuData" :key="index">
      <div>{{ item.name}}</div>
      <div>{{ item.category}}</div>
    </li>
  </ul>
</template>
<script>
  import homeMenu from './HomeMenu'
  export default homeMenu
</script>
<style lang="sass" scoped src="./HomeMenu.scss">

</style>