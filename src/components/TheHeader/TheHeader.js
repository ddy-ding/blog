import SVGLogo from '@/common/Svg/SVGLogo.vue'
import BaseAvatar from '@/common/BaseAvatar.vue'
 export default {
   name:'theHeader',
   data() {
     return {
       title:'我时间人'

     }
   },
   methods: {
    loginClick() {
      console.log('我点击了么')
      this.$router.push('/singin')
    }
   },
   components: {
     SVGLogo,
     BaseAvatar,
   }

 }