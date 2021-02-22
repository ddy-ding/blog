<!--
 * @Description: 推荐文章
 * @version: 
 * @Author: Fiona
 * @Date: 2021-02-03 15:21:45
 * @LastEditors: Fiona
 * @LastEditTime: 2021-02-04 13:59:50
-->
<template>
    <section :class="$style['article']">
        <header :class="$style['header']">
            <h4>专题推荐</h4>
            <router-link :class="$style['headerLink']" to="mmm">更多专题</router-link>
        </header>
        <ul :class="$style.main">
            <li 
            v-for="(item,index) in recommend"
            :key="index"
            v-lazy:background-image="item.imgUrl"
            :class="$style['mainItem']"
            >
            <p :class="$style['txt']">{{ item.title }}</p>
            <span :class="$style['category']">{{ item.mark }}</span>
                
            </li>
        </ul>
    </section>
</template>
<script>
    const recommend = [
        { title:'CSS Why',mark:'css',imgUrl:"https://static.xiaohuochai.site/5af6d386c5c7a22150ec2cf7_20180521131743.jpg?imageView2/2/format/webp"},
        { title:'使用余弦定理制作磁盘形状H5音乐播放器',mark:'HTML',imgUrl:"https://static.xiaohuochai.site/5ad5e23fd2e94d2f60e2d9c6_20180521132007.jpg?imageView2/2/format/webp"},
        { title:'基于JWT标准的用户认证接口实现',mark:'后端相关',imgUrl:"https://static.xiaohuochai.site/5b02978325115949d4b67eae_20180613185146.jpg?imageView2/2/format/webp"},
        { title:'深入理解javascript中的事件循环event-loop',mark:'css',imgUrl:"https://static.xiaohuochai.site/5ad9d7dc352ca82950939e4f_20180521132239.png?imageView2/2/format/webp"},
    ]
    export default({
        data() {
            return {
               recommend 
            }
        }  
    })
</script>
<style module lang="postcss" >
    .article {
      box-sizing: border-box;
      /* padding: 20px 20px 80px 20px; */
      padding: 20px;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      line-height: 40px;
      cursor: default;

      font-size: 24px;
      
    }
    .headerLink {
        font-size: 24px;
    }
    .headerLink::after {
        content: '>';
        margin-left: 4px;
    }
    .main {
        height: 860px;
    }
    .mainItem {
        position:relative;
        margin: 20px 0;
        border-radius: 8px;
        text-align: center;
        color: white;
        background-position: 50% 50%;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .txt {
        position: relative;
        box-sizing: border-box;
        padding: 0 60px;
        border-radius: 8px;
        overflow: hidden;
        font-size: 30px;
        line-height: 200px;
        text-overflow: ellipsis;
        white-space: nowrap;
        background-color: rgba(0, 0, 0, .3);
        cursor: pointer;
    }
    .category {
        position: absolute;
        bottom: 10px;
        right: 10px;
        font-size: 28px;
        padding: 4px 8px;
        border-radius: 8px;
        line-height: 28px;
        background: rgba(7, 17, 27, .4);
    }


</style>