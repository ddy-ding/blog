<template>
  <button class="button"><slot /></button>
</template>
<style lang="scss" scoped>
.button {
    width: 85%;
    margin: 15% auto;
    font-family: inherit;
    cursor: pointer;
    outline: 0;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    text-align: center;
    color: #FFFFFF;
    background-image: -webkit-gradient(linear, left top, right top, from(cadetblue), to(cadetblue)),-webkit-gradient(linear, left top, left bottom, from(#FB8E5E), to(#FB8E5E));
    background-image: linear-gradient(90deg, cadetblue 0%, cadetblue 100%),linear-gradient(cadetblue, cadetblue);
    background-blend-mode: normal, normal;
    border-radius: 45px;
    border: none;
    box-shadow: 0px 0px 0px 3px #5f9ea06b  ;
  &:focus {
    outline: none;
  }
}
</style>