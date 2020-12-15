<!--
 * @Description: 密码输入框
 * @version: 
 * @Author: Fiona
 * @Date: 2020-12-15 13:47:55
 * @LastEditors: Fiona
 * @LastEditTime: 2020-12-15 14:56:26
-->
<template>
    <div v-if="showPassword" :class="$style.wrap">
        <input
            :class="$style.input"
            :placeholder="placeholder"
            :value="value"
            autocomplete="off"
            autocapitalize="off"
            type="password"
            @input="$emit('input', $event.target.value)"
        >
        <SVGVisibility :class="$style.svg" @click.native="togglePassword"/>
    </div>
    <div v-else :class="$style.wrap">
        <input
            :class="$style.input"
            :placeholder="placeholder"
            :value="value"
            autocomplete="off"
            autocapitalize="off"
            type="text"
            @input="$emit('input',$event.target.value)"
        >
        <SVGVisibilityoff :class="$style.svg" @click.native="togglePassword"/>
    </div>
</template>
<script>
 import SVGVisibility from '@/svg/SVGVisibility.vue'
 import SVGVisibilityoff from '@/svg/SVGVisibility.vue'

 export default {
     data() {
         return {
             showPassword: true
         }
     },
     props: {
         value: { type:String, required:true },
         placeholder: { type:String, default:''}
     },
     methods: {
         togglePassword() {
             this.showPassword = !this.showPassword
         }
     },
     components: {
         SVGVisibility,
         SVGVisibilityoff
     }
 }
</script>
<style module lang="postcss">
    .wrap {
        position: relative;
        margin: 24px 0;
        line-height: 80px;
    }
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
    .svg {
        position:absolute;
        top: 50%;
        right: 4px;
        transform: translateY(-50%);
        fill: #333;
    }
</style>