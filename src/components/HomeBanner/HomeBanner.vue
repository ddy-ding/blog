<template>
  <section class="wrap">
    <!-- ===3===对应的activeIndex -->
    <ul 
      class="imgs-container" 
      :style="{width:len*100+'%', transform:`translate(-${activeIndex*100/len}%)`,transition:isResetIndex ? '': `transform ${transitionInterval/1000}s`}"  
      @mouseenter="hoverFn">
      <li 
       :style="{width:`calc(100% / ${len})`}"
        v-for="(ele, i) in imgsComputed" 
        :key="i"
        class="img-item">
        <img 
          :src="ele.src" 
          :alt="ele.name" 
          class="img-style"/>
      </li>
    </ul>
    <div class="prev">
      <img src="./img/left.png" alt="" width="30" @click="switchFn">
    </div>
    <div class="next">
      <img src="./img/right.png" alt="" width="30" @click="switchFn">
    </div>
    <ul class="dots">
      <li 
      v-for="(n, i) in dotLen"
      :key="i"
      class="dot" 
      :class="{'active-dot': activeIndex === n || ( activeIndex===(len-1) && n === 1 )||( activeIndex===0 && n===(len - 2) )}"
      :data-dot-index="n"
      @click="activeDotFn"></li>
    </ul>
  </section>
</template>
 
<script>
  import homeBanner from './HomeBanner.js'
  export default homeBanner
</script>
<style lang="scss" scoped src="./HomeBanner.scss"></style>