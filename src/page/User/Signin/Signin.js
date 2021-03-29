
import AuthSign from '@/components/AuthSign/AuthSign.vue'
import InputWithTest from '@/common/InputWithTest/InputWithTest.vue'
import InputPassword from '@/common/InputPassword/InputPassword.vue'
import BaseButton from '@/common/BaseButton/BaseButton.vue'
import { isEmpty } from '@/utils/fnValidation.js/'
export default {
  name:'signin',
  data() {
    return {
      username:'',
      usernameErrMsg:'',
      password:'',
    }
  },
  methods: {
    selectLogin() {
      console.log('我点击了么')
    },
    /**
     * @description 表单提交
     * @param {*} e 
     */
    onSubmit (e) {
      console.log('表单提交',e)
    },
    /**
     * @description 用户名检测
     */
    checkUsername () {
      const trimedValue = this.username.trim()
      // 如果没有错误  错误提示为空
      this.usernameErrMsg = ''
      if(isEmpty(trimedValue)) {
        this.usernameErrMsg = '用户名不能为空'
        return
      }
    }
  },
  components:{
    AuthSign,
    InputWithTest,
    InputPassword,
    BaseButton
  }
}