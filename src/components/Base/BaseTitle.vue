<template>
  <h1 class="title-box">
    <slot/>
  </h1>
</template>
<style lang="scss" scoped>
  .title-box {
    align-self: center;
    font-weight: normal;
    font-size: 25px;
    line-height: 30px;
    padding: 15px 0;
    text-align: center;
    cursor: pointer;
  }
</style>