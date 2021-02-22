<!--
 * @Description: 
 * @version: 
 * @Author: Fiona
 * @Date: 2020-12-14 14:12:07
 * @LastEditors: Fiona
 * @LastEditTime: 2021-02-04 10:24:46
-->
<template>
    <div>
        <HomeBanner/>
        <HomeMenu />
        <HomeTopic />
        <HomePost />
        <HomeCategory />
    </div>
</template>
<script>
    import HomeBanner from './HomeBanner'
    import HomeMenu from './HomeMenu'
    import HomeTopic from './HomeTopic'
    import HomePost from './HomePost'
    import HomeCategory from './HomeCategory'
    export default {
        components: {
            HomeBanner,
            HomeMenu,
            HomeTopic,
            HomePost,
            HomeCategory
        }
    }
</script>
 
