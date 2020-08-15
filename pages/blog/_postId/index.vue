<template>
  <div class="post" v-editable="blok">
    <div class="thumbnail" :style="{ background: `url(${image})` }"></div>
    <div class="content">
      <h1>{{ title }}</h1>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$route.params.postId
    }
  },
  async asyncData(context) {
    const res = await context.app.$storyapi.get(
      `cdn/stories/blog/${context.params.postId}`,
      {
        version: process.env.NODE_ENV == 'production' ? 'published' : 'draft'
      }
    )
    // console.log(res.data)
    return {
      blok: res.data.story.content,
      image: res.data.story.content.thumbnail,
      title: res.data.story.content.title,
      content: res.data.story.content.content
    }
  },

  // mounted() {
  //   this.$storyblok.init()
  //   this.$storyblok.on('change', () => {
  //     location.reload(true)
  //   })
  // }
}
</script>

<style lang="scss" scoped>
.post {
  .thumbnail {
    width: 100%;
    height: 300px;
    background-size: cover;
    background-position: top;
  }

  .content {
    width: 80%;
    max-width: 500px;
    margin: auto;
    padding: 1rem;

    h1 {
      margin: 1.5rem 0 1rem;
      font-size: 1.5rem;
      // font-weight: bold;

    }

    p {
      white-space: pre-line;
    }

  }
}
</style>