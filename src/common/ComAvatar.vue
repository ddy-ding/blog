<!--
 * @Description: 创建头部公共组件
 * @version: 
 * @Author: Fiona
 * @Date: 2020-10-22 15:33:19
 * @LastEditors: Fiona
 * @LastEditTime: 2020-12-15 15:01:20
-->
<template>
  <div :class="$style.avatar"><slot/></div>
</template>
 
<style lang='postcss' module>
    .avatar {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        line-height: 70px;
        color: #fff;
        background-color: #00a8e5;
        cursor: pointer;
        font-size: 12px;
        text-align: center;
    }
</style>