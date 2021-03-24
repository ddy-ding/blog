
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
      ],
      isTransitioning: false, // 是否处于动画执行期间
      isResetIndex: false, // 是否为瞬间重置定位，在watch中初始化，重定位会取消transition动画
      activeIndex:1, // 默认显示第一张 ===2=== activeIndex对应的操作
      timer:null, //自动播放的定时器
      interval: 5000,
      transitionInterval: 500, // 过渡动画时长
    }
  },
  computed: {
    // 显示小数点的数量
    dotLen() {
      return this.len - 2
    },
    /**
     * @description 无缝滚动，在传进来的img数组首部增加末尾元素，尾部追加首元素
     * @returns
     */
    imgsComputed() {
      const firstImg = this.imgDatas[0];
      const lastImg = this.imgDatas[this.imgDatas.length - 1]
      return [lastImg].concat(this.imgDatas, [firstImg])
    },
    len() {
      return this.imgsComputed.length
    }
  },
  mounted() {
    this.startInterval()
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  watch: {
    activeIndex(newIndex, oldIndex) {
       // ==5== 监听activeIndex的变化，当activeIndex到达边界的时候进行复位
       // if(是轮播图从最后一张切换到第一张 || 是轮播图从第一张切换到最后一张) 是属于瞬间归位，
       // 直接return，不执行以后所有函数
       if((newIndex === 1 && oldIndex === (this.len - 1)) || (oldIndex === 0 && newIndex === (this.len -2))) {
         this.isResetIndex = true;
         return
       }
       this.isResetIndex = false;
       this.isTransitioning = true; 
       setTimeout(() => {
        // 瞬间归位需要取消transition过渡
        // 以下两种情况是瞬间归位时activeIndex变化
        if (this.activeIndex === 0) {
          this.activeIndex = this.len - 2
        } else if (this.activeIndex === (this.len - 1)) {
          this.activeIndex = 1
        }
        this.isTransitioning = false // 为false时表示transition过渡结束，可以进行切换轮播
      }, this.transitionInterval)
    }
  },
  methods:{
    /**
     * @description 鼠标移入暂停移动
     * @param {string} e
     * @returns 是否定时
     */
    hoverFn(e) {
      if(e.type === 'mouseenter') {
         if(this.timer) {
           clearInterval(this.timer)
         } else {
           this.startInterval
         }
      }
    },
    /**
     * @description 启动自动轮播
     * @returns
     */
    startInterval() {
      this.timer = setInterval(() => {
        this.activeIndex++
      },this.interval)
    },
    /**
     *@description 小圆点
     *@param {string} e
     *@returns
     */
     activeDotFn(e) {
       if(e.target.tagName.toLowerCase() === 'li') {
         let index = parseInt(e.target.getAttribute('data-dot-index'))
         this.activeIndex = index
       }
     },
     /**
      * @description 切换
      * @param {object} e
      */
      switchFn(e) {
        if(this.isTransitioning) {
          return 
        }
        // ===4===activeIndex操作
        e.target.className.indexOf('next') !== -1 ? this.activeIndex++ : this.activeIndex --;
      }
  }
}