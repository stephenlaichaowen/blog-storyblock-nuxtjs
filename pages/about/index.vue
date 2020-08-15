<template>
  <section class="about-page">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: 'About this Blog'
    }
  },
  async asyncData(context) {
    const res = await context.app.$storyapi.get('cdn/stories/about', {
      version: context.isDev ? 'draft' : 'published'
    })
    return {
      title: res.data.story.content.title,
      content: res.data.story.content.content
    }
  }
}
</script>

<style lang="scss" scoped>
.about-page {
  width: 80%;
  max-width: 500px;
  margin: auto;

  p {
    white-space: pre-line;
  }
}


</style>