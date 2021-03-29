<template>
  <input 
    class="input"
    :value="value"
    autocomplete="off"
    autocappitalize="off"
    @input="$emit('input', $event.target.value)"
  >
</template>
<script>
  import baseInput from './BaseInput'
  export default baseInput
</script>
<style lang="scss" scoped src="./BaseInput.scss"></style>
