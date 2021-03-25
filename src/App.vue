<template>
    <div id="app" class="wrap" :style="{height:wrapHeight + 'px'}">
      <TheHeader class="header"/>
      <main class="main-content">
        <transition>
          <router-view></router-view>
        </transition>
      </main>
    </div>
</template>

<script>
 import { mapActions } from 'vuex'
 import { types } from '@/store/types'
 import TheHeader from '@/components/TheHeader/TheHeader.vue'

export default {
    name: 'app',
    computed:{
      wrapHeight() {
        return this.$store.state.size.height
      }
    },
    mounted() {
      this.initData()
    },
    methods: {
      ...mapActions({
        setWindowHeight:types.SET_HEIGHT,
      }),
      initData() {
        const windowHeight = document.documentElement.clientHeight
        this.setWindowHeight(windowHeight)
      }
    },
    components:{
      TheHeader
    }
}
</script>

<style lang="scss" scoped>
  .wrap {
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    .header {
      height: 40px;
    }
  }  
  .main-content {
    position: relative;
    height: calc(100% - 40px);
    overflow: auto;
  }
</style>>
 
