<template>
   <header class="heade">
     <div class="logo-box">
       <SVGLogo width="32" height="32"/>
       <h1 class="title">小阁老</h1>
     </div>
     <BaseAvatar @click.native="loginClick">D</BaseAvatar>
   </header>
</template>
<script>
  import theHeader from './TheHeader.js'
  export default theHeader
</script>
<style lang="scss" scoped src="./TheHeader.scss"></style>
 