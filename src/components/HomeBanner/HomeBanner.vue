<template>
  <section class="wrap">
    <ul class="imgs-container"  @mouseenter="hoverFn">
      <li 
        v-for="(ele, i) in imgDatas" 
        :key="i"
        class="img-item"
      >
        <img :src="ele.src" :alt="ele.name"/>
      </li>
    </ul>
    <!-- <ul class="dots">
      <li 
      v-for="(el, i) in dotLen"
      :key="i"
      class="dot" 
      @click="activeDotFn"></li>
    </ul> -->
    
  </section>
</template>
 
<script>
  import homeBanner from './HomeBanner.js'
  export default homeBanner
</script>
<style lang="scss" scoped src="./HomeBanner.scss"></style>