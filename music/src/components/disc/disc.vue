<template>
  <transition name="slide">
      <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script>
  export default {
    computed: {
      title () {
        return 123
      },
      bgImage () {
        return 222
      }
    },
    data () {
      return {
        songs: []
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>


