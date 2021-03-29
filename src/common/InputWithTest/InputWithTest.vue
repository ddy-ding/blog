<template>
  <div class="wrap">
    <BaseInput 
      :value="value"
      :type="type"
      :placeholder="placeholder"
      @input="(val) => { $emit('input',val) }"
      @focus.native="onFocus"
      @blur.native="onBlur"
    /> 
    <span class="errShow">{{ errMsg }}</span>
  </div>
</template>
<script>
  import inputWithTest from './InputWithTest'
  export default inputWithTest
</script>
<style lang="scss" scoped src="./InputWithTest.scss"></style>