<template>
    <div id="article">
      <div v-html="article.body" class="markdown-body"></div>
    </div>
</template>
<script>
import { getArticleByNumber } from '@/api';
import { convertBlogArticle } from '@/utils/helper'

export default {
  data() {
    return {
      article:{}
    }
  },
  created(){
    getArticleByNumber('guanpengchn.github.io',3)
      .then(article => {
        this.article = convertBlogArticle(article) 
      })
  }
};
</script>
<style scoped>
@import '../styles/app.css';
@import '../styles/base.css';
@import '../styles/atom-one-dark.css';

.markdown-body  {
  font-size: 14px;
  background-color: #fff;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

</style>


