import Back from '../../../components/Base/BaseBack.vue'
import BackTitle from '../../../components/Base/BaseTitle.vue'
import {getSecondTitle} from '@/service/api'
export default {
  name:'category',
  data() {
    return {
      secondCate:[],
      secondTitle:[],
      posts:[],
      descript:''
    }
  },
  mounted() {
    this.getDetailTitle()
  },
  methods:{
    gotoList() {
      console.log('跳转到类别列表页面')
    },
    goPost(id) {
      this.$router.push({ name: 'post', params: { id }})
    },
    getDetailTitle() {
      const param = {
        parentId: this.$route.params.num
      }
      getSecondTitle(param).then(res => {
        console.log('res',res)
        if(res) {
          this.posts = res.list;
          this.descript = this.posts[0].category_des
          console.log('this.posts',this.posts)
        }
      })
    }
  },
  components: {
    Back,
    BackTitle
  },
}