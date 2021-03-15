<template>
    <div id="app">
        <div>00000</div>
        <Home></Home>
    </div>
</template>

<script>
 import Home from './page/home/index.vue'
export default {
    name: 'app',
    components:{
      Home
    }
}
</script>

<style>
    html,body,#app,#app>*{
        width: 100%;
        height: 100%;
    }
    body{
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        font-size: 16px;
        margin: 0;
        overflow-x: hidden;
    }

    img{
        width: 200px;
    }
</style>
