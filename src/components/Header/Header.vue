<!--
 * @Description: 这是头部
 * @version: 
 * @Author: Fiona
 * @Date: 2020-10-22 15:50:08
 * @LastEditors: Fiona
 * @LastEditTime: 2020-12-14 14:14:24
-->
<template>
  <header :class="$style.header">
    <div :class="$style.logoBox" @click="$router.push('/')">
      <SVGLogo height="32" weight="32"></SVGLogo>
      <h1 :class="$style.title">云阁</h1>
    </div>
    <ComAvatar @click.native="loginStatus">云</ComAvatar>
  </header>
</template>

<script>
import ComAvatar from '@/common/ComAvatar'
import SVGLogo from '@/svg/SVGlogo'
export default {
  data () {
    return {
    };
  },

  components: {
      ComAvatar,
      SVGLogo
  },

  computed: {},

  methods: {
    loginStatus() {
     console.log('我走进去了么')
      this.$router.push('/login')
    }
  }
}

</script>
<style  module lang="postcss">
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
  .logoBox {
    display:inline-flex;
    align-items: center;
    cursor: pointer;
  }
  .title {
    display: inline-block;
    margin-left: 4px;
    font-size: 24px;
    background-image: linear-gradient(160deg, #7fdbff, #0074d9);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
</style>