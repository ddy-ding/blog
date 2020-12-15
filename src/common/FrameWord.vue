<!--
 * @Description: 输入框的框
 * @version: 
 * @Author: Fiona
 * @Date: 2020-12-15 09:57:52
 * @LastEditors: Fiona
 * @LastEditTime: 2020-12-15 11:31:26
-->
<template>
    <input
        :class="$style.input"  
        :value="value"
        autocomplete="off"
        autocapitalize="off"
        @input="$emit('input',$event.target.value)"
    >
</template>
<script>
    export default {
        props: {
            value: { type:String, default:'' }
        }
    }
</script>
<style module lang="postcss">
    .input {
        display: block;
        box-sizing: border-box;
        width: 100%;
        padding: 20px 40px;
        border: 2px solid #e5e5e5;
        border-radius: 8px 8px 0 0;
        font-size: 12px;
        line-height: 36px;
        letter-spacing: 1px;
        color: #333;
    }
    &:focus {
        border-bottom:1px solid #666;
        outline: none;
    }
</style>