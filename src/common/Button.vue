<!--
 * @Description:按钮
 * @version: 
 * @Author: Fiona
 * @Date: 2020-12-15 11:16:45
 * @LastEditors: Fiona
 * @LastEditTime: 2020-12-15 13:47:05
-->
<template>
    <button :class="$style.button" type="button"><slot /></button>
</template>
<style module lang="postcss">
    .button {
        display: block;
        box-sizing: border-box;
        width: 100%;
        padding: 0 10px;
        border-radius: 8px;
        font-size: 30px;
        line-height: 75px;
        text-align: center;
        color: #fff;
        background: #2196f3;
        cursor: pointer;

        &:focus {
            outline: none;
        }
    }
</style>