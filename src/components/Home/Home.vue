<!--
 * @Description: 
 * @version: 
 * @Author: Fiona
 * @Date: 2020-12-14 14:12:07
 * @LastEditors: Fiona
 * @LastEditTime: 2021-02-03 16:36:24
-->
<template>
    <div>
        <HomeBanner/>
        <HomeMenu />
        <HomeTopic />
        <HomePost />
    </div>
</template>
<script>
    import HomeBanner from './HomeBanner'
    import HomeMenu from './HomeMenu'
    import HomeTopic from './HomeTopic'
    import HomePost from './HomePost'
    export default {
        components: {
            HomeBanner,
            HomeMenu,
            HomeTopic,
            HomePost
        }
        
    }
</script>
