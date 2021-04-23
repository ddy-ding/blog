<template>
  <article class="box">
    <Back @click="gotoList()">类别列表</Back>
    <BackTitle> HTML知识体系</BackTitle>
    <section class="main">
      <p class="description">{{descript}}</p>
      <dl v-for="(ele, index) in posts" :key="index">
        <dt class="category-name">{{ele.category_name}}</dt>
        <dd>
          <ul>
            <li 
            v-for="(postsItem, index) in ele.posts" 
            :key="index"
            class="posts-item"
            @click="goPost(postsItem.article_id)"
            >{{postsItem.article_title}}</li>
          </ul>
        </dd>
      </dl>
    </section>
  </article>
</template>
<script>
  import category from './Category.js'
  export default category
</script>
<style lang="scss" scoped src="./Category.scss"></style>