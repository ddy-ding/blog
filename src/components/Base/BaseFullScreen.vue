<template>
  <section class="wrap" :style="{height:wrapHeight+'px'}">
    <slot />
  </section>
</template>
<script>
  export default {
      computed: {
        wrapHeight() {
          return this.$store.state.size.height;
        }
      }
  }
</script>
<style lang="scss" scoped>
 .wrap {
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   box-sizing: border-box;
   margin: 0 auto;
 }
</style>