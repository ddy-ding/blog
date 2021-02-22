<!--
 * @Description: banner页面
 * @version: 
 * @Author: Fiona
 * @Date: 2020-12-18 10:44:20
 * @LastEditors: Fiona
 * @LastEditTime: 2021-02-04 17:50:25
   :style="{width:100/len+'%',backgroundImage: `url(${item.src})`}"
-->
<template>
    <section :class="$style.wrap">
        <!-- 3对应的activeIndex -->
        <ul 
          :class="$style.imgContainer"
          :style="{width: `calc(100% * ${len})`, transform:`translate(-${activeIndex*100/len}%)`,transition:isResetIndex ? '': `transform ${transitionInterval/1000}s}`}"
          @mouseleave="hoverFn"
          @mouseenter="hoverFn"
        >
            <li :class="$style.listStyle"
              :style="{width:`calc(100% / ${len})`}"
              v-for="(item,i) in imgs"
              :key="i"
            >
                <img 
                :class="$style.imgsItem" 
                :src="item.src"
                 />
            </li>
        </ul>
        <!-- onselectstart实现文字双击不可选中 -->
        <!-- 原点 -->
        <ul :class="$style.dotBox" @click="activeDotFn">
            <li 
                v-for="i in (len - 2)" 
                :key="i"
                :data-dot-index="i"
                :class="[{[$style['dot-active']]:(activeIndex === i) || (activeIndex === (len-1)&& i===1) || (activeIndex === 0 && i === 5 )},$style.dot]"
                ></li>
        </ul>
    </section>
</template>
<script>
  export default {
      data() {
          return {
              imgs: [
                  {
                      id:'1',
                      name:'HTML',
                      src: require('@/assets/imgs/html.png'),
                      url:''
                  },
                  {
                      id:'2',
                      name:'CSS',
                      src: require('@/assets/imgs/css.png'),
                      url:''
                  },
                  {
                      id:'3',
                      name:'HTML',
                      src: require('@/assets/imgs/javascript.png'),
                      url:''
                  },
                  {
                      id:'4',
                      name:'HTML',
                      src: require('@/assets/imgs/vue.png'),
                      url:''
                  },
                  {
                      id:'5',
                      name:'HTML',
                      src: require('@/assets/imgs/react.png'),
                      url:''
                  }
              ],
              activeIndex:1, //当前显示第一张2
              timer:null,// 自动播放定时
              isTransitioning: false, // 是否处于过度动画执行期间
              transitionInterval: 500, // 过渡动画时长
              isResetIndex:false, // 是否为瞬间重置定位，在watch中初始化，重定位会取消transition动画
              interval: 5000,
          }
      },
      computed: {
          // 为了无缝滚动 在传进来的imgs数组中增加末尾元素，在尾部追加首元素1
          imgsComputed() {
              const firstImg = this.imgs[0];
              const lastImg = this.imgs[this.imgs.length - 1]
              return [lastImg].concat(this.imgs, [firstImg])
          },
          len() {
              return this.imgsComputed.length
          }
      },
      mounted() {
          this.startInterval()
        //   console.log('img',this.imgsComputed.length)
         
      },
    beforeDestory() {
              clearInterval(this.timer)
          },
      methods: {
          activeDotFn(e){
            //   console.log('e555555',e.target.tagName.toLowerCase() === 'li')
              if(e.target.tagName.toLowerCase() === 'li') {
                  let index = parseInt(e.target.getAttribute('data-dot-index'))
                  this.activeIndex = index
              }
          },
          switcnFn(e) {
             // 过度过程中不可以切换 
             if(this.isTransitioning) {
               return
             }
             // ===4===对activeIndex进行操作
            e.target.className.indexOf('next') != -1 ? this.activeIndex++ : this.activeIndex--
          },
          hoverFn(e) { //鼠标移入暂停轮播，移出恢复轮播
            // console.log('e', e);
            if(e.type === 'mouseenter') {
                if(this.timer) {
                    clearInterval(this.timer)
                }
            } else {
                this.startInterval()
            }
          },
          autoStart(e) { // 鼠标移入暂停轮播，移出恢复轮播
            if(e.type === 'mouseenter') {
                if(this.timer) {
                    clearInterval(this.timer)
                } else {
                    this.startInterval()
                }
            }
          },
          startInterval() { // 自动轮播
            this.timer = setInterval(() => {
                // ===4===对activeIndex进行操作
                this.activeIndex ++ 
            },this.interval)
          }
      },
      watch: {
          activeIndex(newActiveIndex, oldActiveIndex) {
            //   console.log('newActiveIndex',newActiveIndex)
            //   console.log('oldActiveIndex',oldActiveIndex)
              // ===5===监听activeIndex的变化 当activeIndex到达临界值的时候进行复位
              // if(是轮播图从最后一张切换到第一张 || 是轮播图从第一张切换到最后一张) 是属于瞬间归位，直接return，不执行以后所有函数
              if((newActiveIndex === 1 && oldActiveIndex ===(this.len - 1)) || (oldActiveIndex === 0 && newActiveIndex === (this.len - 2))) {
                  this.isResetIndex = true
                  return
              }
              this.isResetIndex = false;
              this.isTransitioning = true; // 为true时表示正在进行transition过度中，不可进行切换轮播
             setTimeout(() => {
                // 瞬间归位需要取消transition过渡
                // 以下两种情况是瞬间归位时activeIndex变化 
                if (this.activeIndex === 0) {
                    this.activeIndex = this.len - 2
                }else if(this.activeIndex === (this.len - 1)) {
                    this.activeIndex = 1     
                }
                this.isTransitioning = false
             },this.transitionInterval)

          }
      }
      
  }
</script>
<style module lang="postcss">
    .wrap {
        position: relative;
        height: 240px;
        overflow: hidden;
    }
    @media all and (min-width: 900px){
        height: 300px;
    }
    .dotBox {
        position: absolute;
        bottom: 10px;
        right: 50%;
        transform: translateX(40px);
        display: flex;
        justify-content: space-between;
        
    } 
    .dot {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: rgba(255, 255, 255, .6);
        cursor: pointer;
        margin-left: 10px;
    }
    @media all and (min-width: 900px) {
        width: 20px;
        height: 20px;
    }
    .imgContainer {
        width: 700%;
        height: 100%;
        transition: transform .2s;
        display: flex;
    }
     .listStyle {
        height: 100%;
    }
    .imgsItem {
        display: inline-block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
     
</style>