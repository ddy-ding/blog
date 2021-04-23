<template>
  <BaseFullScreen class="wrap">
    <header class="topBox">
      <BaseBack @click="goback()">返回</BaseBack>
      <div class="content-box">
        <img src="@/assets/imgs/directory.png" alt="">
        &nbsp;目录
      </div>
      <ul class="controlBBox">
        <li class="control">
          <img src="@/assets/imgs/like.png" alt="">
          <p>喜欢222</p>
        </li>
        <li class="control">
          <img src="@/assets/imgs/comment.png" alt="">
          <p>评论222</p>
        </li>
      </ul>
    </header>
    <article class="article">
      <BaseTitle>333</BaseTitle>
      <BreadCrumb></BreadCrumb>
    </article>
  </BaseFullScreen>
</template>
<script>
 import post from './Post'
 export default post
</script>
<style lang="scss" scoped src="./Post.scss"></style>