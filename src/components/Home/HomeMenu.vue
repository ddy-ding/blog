<!--
 * @Description: 导航条
 * @version: 
 * @Author: Fiona
 * @Date: 2021-02-02 17:00:42
 * @LastEditors: Fiona
 * @LastEditTime: 2021-02-02 18:17:50
-->
<template>
    <ul :class="$style['menu']">
        <li v-for="item in menuDatas"  :key="item.catrgory" :class="$style['item']" @click="$router.push(item.url)">
             <div :class="$style['title']">{{ item.name }}</div>
             <p :class="$style['des']">{{ item.category }}</p>
        </li>
    </ul>
</template>
<script>
const menuDatas =[
    { id: 0, name: '小', category: 'HTML', url: '' },
    { id: 0, name: '云', category: 'CSS', url: '' },
    { id: 0, name: '云', category: 'JavaScript', url: '' },
    { id: 0, name: '的', category: 'HTTP', url: '' },
    { id: 0, name: '小', category: '前端框架', url: '' },
    { id: 0, name: '小', category: '前端工具', url: '' },
    { id: 0, name: '梦', category: '后端相关', url: '' },
    { id: 0, name: '想', category: '移动端', url: '' },
]
export default({
    data() {
        return {
            menuDatas
        }
    }
    
})
</script>
<style module lang="postcss">
    .menu {
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        font-size: 18px;
        text-align: center;
    }
    .item {
        width:25%;
        cursor: pointer;
    }
    .title {
        display: inline-block;
        width: 80px;
        margin: 6px 0;
        border-radius: 50%;
        line-height: 80px;
        color: white;
    }
    .item:nth-child(1) .title {
        background: red;
    }
    .item:nth-child(2) .title {
        background: orange;
    }
    .item:nth-child(3) .title {
        background: pink;
    }
    .item:nth-child(4) .title {
        background: green;
    }
    .item:nth-child(5) .title {
        background:  cyan;
    }
    .item:nth-child(6) .title {
        background:  #528B8B;
    }
    .item:nth-child(7) .title {
        background:  purple;
    }
    .item:nth-child(8) .title {
        background:  #FF3E96;
    }
</style>