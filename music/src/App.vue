<template>
  <div id="app" @touchmove.prevent>
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
export default {
  data: []
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">

</style>

