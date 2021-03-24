<template>
  <div class="avatar">
    <slot/>
  </div>
</template>
<style lang="scss" scoped>
  .avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    line-height: 30px;
    text-align: center;
    background-color:cadetblue;
    cursor: pointer;
    color: #fff;
  }
</style>