<!--
 * @Description: 专题推荐
 * @version: 
 * @Author: Fiona
 * @Date: 2021-02-02 18:19:26
 * @LastEditors: Fiona
 * @LastEditTime: 2021-02-04 17:45:04
-->
<template>
    <section :class="$style['topic']">
        <header :class="$style['header']">
            <h4>专题推荐</h4>
            <router-link :class="$style['headerLink']" to="mmm">更多专题</router-link>
        </header>
        <ul :class="$style['main']">
            <li 
            v-for="item in topic"
            :class="$style['item']"
            :key="item.id"
            >
            <dl>
                <dt>{{ item.name }}</dt>
                <dd :class="$style['text']">{{ item.descript }}</dd>
            </dl>
            </li>
        </ul>
    </section>
</template>
<script>
 const topic = [
     {id:'1', name:'css效果',descript:'使用css实现的各种效果'},
     {id:'2', name:'继承',descript:'不理解继承，就无法真正理解js'},
     {id:'3',name:'表单',descript:'分享方法和思路，让表单与众不同'},
     {id:'4', name:'作用域',descript:'深入理解js作用域'},


 ]
    export default  ({
        data() {
            return {
               topic 
            }
        }

    })
</script>
<style module lang="postcss">
    .topic {
        box-sizing: border-box;
        padding: 10px;
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
    .headerLink {
        font-size: 24px;
    }
    .headerLink::after {
        content: '>';
        margin-left: 4px;
    }
    .main {
        display: flex;
        flex-wrap: wrap;
        min-height: 147px;
    }
    .item {
        box-sizing: border-box;
        width: calc(50% - 40px);
        padding: 20px;
        margin: 20px;
        border-radius: 12px;
        line-height: 20px;
        color: #fff;
        background: #0074d9;
        box-shadow: 0 8px 32px 0 #0074d9;
        cursor: pointer;
    }
    dl {
        font-size: 24px;
        text-indent: 24px;
    }
    dt {
        margin-bottom: 5px;
    }
    dd {
        line-height: 30px;
    }
    @media all and (min-width:900px) {
        .main {
             min-height: 276px;
         }
        .item {
             font-size: 1.1em;
             line-height: 3;
         }  
    }
    </style>