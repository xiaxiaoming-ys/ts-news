<template>
  <div class="loading">
    正在加载中...
  </div>
</template>

<script>
  export default {
    name: 'Loading'
  }
</script>

<style lang="scss" scoped>
  .loading{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: .38rem;
    background: #fff;
    color: #999;
    font-size: .14rem;
    line-height: .38rem;
    text-align: center;
  }
</style>