<template>
  <AuthSign>
    <form  @submit="onSubmit">
      <InputWithTest
        v-model="username"
        :errMsg="usernameErrMsg"
        :onBlur="checkUsername"
        :onFocus="() => { usernameErrMsg='' }"
        placeholder="请输入用户名"
      />
      <InputPassword
      v-model="password"
      placeholder="请输入密码"
      />
      <BaseButton type="submit">登&nbsp;&nbsp;录</BaseButton>
      <div @click="selectLogin">第三方登录</div>
    </form>
  </AuthSign>
</template>
<script>
import signin from './Signin'
export default signin
</script>