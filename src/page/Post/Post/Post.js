import BaseFullScreen from '../../../components/Base/BaseFullScreen.vue'
import BaseBack from '../../../components/Base/BaseBack'
import BaseTitle from '../../../components/Base/BaseTitle'
import BreadCrumb from '../../../components/Base/BreadCrumb'
export default {
  name:'post',
  data() {
    return {}
  },
  methods: {
    goback() {
      console.log('我点击了返回按钮')
    }
  },
  components: {
    BaseFullScreen,
    BaseBack,
    BaseTitle,
    BreadCrumb
  }
}