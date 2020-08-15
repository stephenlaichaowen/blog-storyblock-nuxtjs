<template>
  <!-- <nuxt-link :to="post.id"> -->
  <nuxt-link :to="`/blog/${post.id}`">
    <article class="post-preview">
      <div class="post-preview-thumbnail" :style="{ backgroundImage: `url(${post.thumbnailUrl})` }"></div>
      <div class="post-preview-content">
        <h1 class="title">{{ post.title }}</h1>
        <p class="preview-text">{{ post.previewText }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #000;
}

.post-preview {
  border-radius: 3px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.5);
  width: 90%;
  margin: 1rem auto;
  height: 20rem;

  .post-preview-thumbnail {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 10rem;
  }

  .post-preview-content {
    .title,
    .preview-text {
      text-align: center;
      margin-bottom: 1rem;
    }
    padding: 1rem;
  }

  @media (min-width: 35rem) {
    .post-preview {
      width: 25rem;
      margin: 1rem;
    }
  }
}
</style>