export default {
  name:'homeBanner',
  data() {
    return {
      test:'我是测试',
      imgDatas: [
        {
          id: '1',
          name: 'HTML',
          src: require('@/assets/imgs/html.png'),
          url: '/categories/1000000000'
        },
        {
          id: '2',
          name: 'CSS',
          src: require('@/assets/imgs/css.png'),
          url: ''
        },
        {
          id: '3',
          name: 'JavaScript',
          src: require('@/assets/imgs/javascript.png'),
          url: ''
        },
        {
          id: '4',
          name: 'Vue',
          src: require('@/assets/imgs/vue.png'),
          url: ''
        },
        {
          id: '5',
          name: 'React',
          src: require('@/assets/imgs/react.png'),
          url: ''
        }
      ]
    }
  },
  computed: {
    // 显示小数点的数量为度之后的图像数量的一半
    // dotLen() {
    //   return this.imgDatas / 2
    // }
  },
  methods:{
    hoverFn() {
      console.log('我是鼠标过度')
    }
  }
}