import {getFirstCategory} from '@/service/api'
export default {
  name: 'homeMenu',
  data() {
    return {
      menuData:[]
    }
  },
  mounted() {
    this.getMenum();
  },
  methods:{
    // 获取menum数据
    getMenum() {
      getFirstCategory().then(res => {
        console.log('res',res)
        this.menuData = res.list
      })
    },
    // 跳转到指定的页面
    goCategory(num) {
      console.log('num',num)
      this.$router.push({ name: 'category', params: { num }})
    }
  }
}