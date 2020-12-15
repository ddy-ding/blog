<!--
 * @Description: 
 * @version: 
 * @Author: Fiona
 * @Date: 2020-12-14 11:51:44
 * @LastEditors: Fiona
 * @LastEditTime: 2020-12-15 14:47:07
-->
<template>
    <LoginHead urlInfo="login">
        <form>
            <!-- 用户名 -->
            <InputPart
              v-model="username"
              :errMsg="usernameErrMsg"
              :onBlur="testUsername"
              :onFocus="()=>{ usernameErrMsg = '' }"
              placeholder="请输入用户名"
            ></InputPart>
            <!-- 密码 -->
            <InputPassword
              v-model="password"
              placeholder="请输入密码"
            ></InputPassword>
            <Button type="submit">登&nbsp;&nbsp;陆</Button>
        </form> 
    </LoginHead>

</template>
<script>
  import LoginHead from './LoginHead'
  import InputPart from '@/common/InputPart.vue'
  import InputPassword from '@/common/InputPassword'
  import Button from '@/common/Button.vue'
  export default {
      data() {
          return {
              username: '',
              password:'',
              usernameErrMsg: undefined
          }
      },
      methods:{
         // 检测用户名
          testUsername(){
              return '123'
          }
      },
      components: {
          LoginHead,
          InputPart,
          Button,
          InputPassword
      }
      
  }
</script>