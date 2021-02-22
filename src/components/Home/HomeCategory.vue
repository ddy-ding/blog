<!--
 * @Description: 类别推荐
 * @version: 
 * @Author: Fiona
 * @Date: 2021-02-04 09:25:56
 * @LastEditors: Fiona
 * @LastEditTime: 2021-02-04 17:25:07
-->
<template>
    <section :class="$style['category']">
        <header :class="$style['header']">
          <h4>类别推荐</h4>
          <router-link :class="$style['link']" to="mmmm" >更多类别</router-link>
        </header>
        <ul 
            v-lazy:background-image="require('@/assets/imgs/match-bg.jpg')"
            :class="$style['main']"
            >
            <li 
             v-for="item in category"
             :class="$style['mainItem']"
             :key="item.id"
             >
                <p>{{ item.name }}</p>
                <p>{{ item.des }}</p>
             </li>
        </ul>
    </section>
</template>
<script>
    const category = [
        {id:'0',name:'HTML', des:'28篇文章', url:'',imgUrl:'https://static.xiaohuochai.site/client/static/img/match-bg.0f9a8d7.jpg?imageView2/2/format/webp'},
        {id:'1',name:'CSS', des:'99篇文章', url:'',imgUrl:'https://static.xiaohuochai.site/client/static/img/match-bg.0f9a8d7.jpg?imageView2/2/format/webp'},
        {id:'2',name:'Mobile', des:'7篇文章', url:'',imgUrl:'https://static.xiaohuochai.site/client/static/img/match-bg.0f9a8d7.jpg?imageView2/2/format/webp'},
        {id:'3',name:'NodeJs', des:'24篇文章', url:'',imgUrl:'https://static.xiaohuochai.site/client/static/img/match-bg.0f9a8d7.jpg?imageView2/2/format/webp'},
        {id:'4',name:'Utils', des:'64篇文章', url:'',imgUrl:'https://static.xiaohuochai.site/client/static/img/match-bg.0f9a8d7.jpg?imageView2/2/format/webp'},
        {id:'5',name:'Vue', des:'34篇文章', url:'',imgUrl:'https://static.xiaohuochai.site/client/static/img/match-bg.0f9a8d7.jpg?imageView2/2/format/webp'},
        {id:'6',name:'Javascript', des:'219篇文章', url:'',imgUrl:'https://static.xiaohuochai.site/client/static/img/match-bg.0f9a8d7.jpg?imageView2/2/format/webp'},
        {id:'7',name:'React', des:'10篇文章', url:'',imgUrl:'https://static.xiaohuochai.site/client/static/img/match-bg.0f9a8d7.jpg?imageView2/2/format/webp'},
    ]
    export default ({
        data() {
            return {
                category
            }
        }

    })
</script>
<style lang="postcss" module>
    .category {
        box-sizing: border-box;
        padding: 20px;
    }
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 8px;
        line-height: 40px;
        cursor: default;
        font-size: 24px;
    }
    .link {
        font-size: 24px;
    }
    .link::after {
        margin-left: 4px;
        content: '>';
    }
    .main {
        display: flex;
        flex-wrap: wrap;
        justify-self: space-between;
        margin-top: 12px;
        background-position: 50% 50%;
        background-size: cover;
    }
    .mainItem {
        display: inline-block;
        box-sizing: border-box;
        width: calc(100% / 3);
        height: 200px;
        padding: 40px 20px;
        border: 1px solid white;
        font-size: 28px;
        line-height: 60px;
        text-align: center;
        color: white;
        cursor: pointer; 
    }
    .mainItem:nth-child(1),
    .mainItem:nth-child(5),
    .mainItem:nth-child(8) {
      background-color: rgba(220, 129, 55, .8);
    }
    
    .mainItem:nth-child(2),
    .mainItem:nth-child(4),
    .mainItem:nth-child(6) {
      background-color: rgba(38, 191, 142, .8);
    }
    
    .mainItem:nth-child(3),
    .mainItem:nth-child(7) {
      background-color: rgba(72, 137, 199, .8);
    }
    .mainItem:nth-child(7) {
        flex: 1;
    }
</style>