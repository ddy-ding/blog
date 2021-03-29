<template>
  <div class="wrap">
    <input
    class="input"
    :placeholder="placeholder"
    :value="value"
     autocomplete="off"
     autocapitalize="off"
     type="password"
     @input="$emit('input',$event.target.value)"
    >
    <div class="show-password"><img src="./img/open.png" alt=""></div>
  </div>
</template>
<script>
  import inputPassword from './InputPassword'
  export default inputPassword
</script>
<style lang="scss" scoped src="./InputPassword.scss"></style>