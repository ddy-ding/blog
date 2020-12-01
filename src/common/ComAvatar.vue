<!--
 * @Description: 创建头部公共组件
 * @version: 
 * @Author: Fiona
 * @Date: 2020-10-22 15:33:19
 * @LastEditors: Fiona
 * @LastEditTime: 2020-10-22 17:59:37
-->
<template>
  <div :class="$style.avatar"><slot/></div>
</template>
 
<style lang='postcss' module>
    .avatar {
         width: .6rem;
         height: .6rem;
         border-radius: 50%;
         line-height: .6rem;
         text-align: center;
         color: #fff;
         background-color: #00a8e5;
         cursor: pointer;
    }
</style>