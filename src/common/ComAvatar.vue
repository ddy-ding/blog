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
        width: 80px;
        height: 80px;
        border-radius: 50%;
        line-height: 80px;
        color: #fff;
        background-color: #00a8e5;
        cursor: pointer;
        font-size: 12px;
        text-align: center;
    }
</style>