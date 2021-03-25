<template>
  <section class="wrap">
    <header class="title">
      <router-link active-class="active" :to="{name: 'signin',params: { parentPath }}">登&nbsp;录</router-link>
      <router-link active-class="active" :to="{name: 'signup',params: { parentPath }}">注&nbsp;册</router-link>
    </header>
    <slot />
  </section>
</template>
<script>
  import authSign from './AuthSign'
  export default authSign
</script>
<style lang="scss" scoped src="./AuthSign.scss"></style>