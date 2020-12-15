<!--
 * @Description: 注册页面
 * @version: 
 * @Author: Fiona
 * @Date: 2020-12-15 15:12:24
 * @LastEditors: Fiona
 * @LastEditTime: 2020-12-15 16:55:38
-->
<template>
    <LoginHead userInfo="register">
        <form @submit="submit">
            <InputPart
               v-for="item in inputData"
               :key="item.id"
               type='text'
               :placeholder="item.placeholder"
               :errMsg="item.errMsg"
               :onBlur="()=> {loseBlur(item)}"
               :onFocus="()=> {item.errMsg= ''}"
               @input="val => {item.value = val}"
            ></InputPart>
            <Button  type="submit">注&nbsp;&nbsp;册</Button>
        </form>
    </LoginHead>
</template>
<script>
    import LoginHead from './LoginHead'
    import InputPart from '@/common/InputPart.vue'
    import Button from '@/common/Button'
    export default {
        data() {
            return {
                inputData:[
                    {
                      placeholder:'请输入用户名',
                      value:'',
                      errMsg:''
                    },
                    {
                      placeholder:'请输入密码',
                      value:'',
                      errMsg:''
                    }
                ]
            }
        },
        methods: {
            loseBlur(data) {
                console.log('data',data)
            },
            // 表单提交
            submit(e) {
                e.preventDefault()
            }
        },
        components:{
            LoginHead,
            InputPart,
            Button
        }
    }
</script>