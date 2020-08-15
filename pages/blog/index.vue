<template>
  <div>
    <Preloader />
    <section class="posts">
      <PostPreview v-for="post in posts" :key="post.id" :post="post" />
    </section>
  </div>
</template>

<script>
import PostPreview from '@/components/Blog/PostPreview'
import Preloader from '@/components/Preloader/Preloader'

export default {
  components: {
    PostPreview
  },

  async asyncData(context) {
    const res = await context.app.$storyapi.get('cdn/stories', {
      version: context.isDev ? 'draft' : 'published',
      starts_with: 'blog/'
    })
    return {
      posts: res.data.stories.map(bp => {
        return {
          id: bp.slug,
          title: bp.content.title,
          previewText: bp.content.summary,
          thumbnailUrl: bp.content.thumbnail
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.posts {
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>