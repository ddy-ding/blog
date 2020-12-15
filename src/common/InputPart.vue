<!--
 * @Description: 输入框设置
 * @version: 
 * @Author: Fiona
 * @Date: 2020-12-14 18:14:05
 * @LastEditors: Fiona
 * @LastEditTime: 2020-12-15 11:33:09
-->
<template>
    <div :class="$style.wrap">
        <FrameWork
            :value="value"
            :type= "type"
            :placeholder= placeholder
            @input="(val)=> { $emit('input',val) }"
            @focus.native="onFocus"
            @blur.native="onBlur"
        ></FrameWork>
        <span :class="$style.errShow">{{ errMsg }}</span>
    </div>
</template>
<script>
 import FrameWork from './FrameWord'
    export default {
        components:{
            FrameWork
        },
        props: {
            value: { type:String, default:'' },
            type: { type:String, default:'input'},
            onBlur: { type:Function, required:true },
            onFocus: { type:Function, required:true },
            placeholder: { type:String, default:''},
            errMsg:{ type:String, default: ''}
        }
    }
</script>
<style module>
    .wrap {
        position: relative;
        margin: 12px 0;
        line-height: 40px;
    }
    .errShow {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 10px;
        font-size: 12px;
        color: red;
    }
</style>