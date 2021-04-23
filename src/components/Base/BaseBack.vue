 
<template>
   <div class="back-box">
     <img src="@/assets/imgs/return.png" alt="">
     <slot />
   </div>
</template>
<style lang="scss" scoped>
.back-box {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 15px;
  font-weight:bold;
  img {
    width: 20px;
    height: 20px;
    margin-left: 10px;
    margin-right: 5px;
  }
}

</style>