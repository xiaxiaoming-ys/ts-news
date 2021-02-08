<template>
  <div class="container">
    <MyHeader />
    <router-view v-slot="{ Component }">
      <router-link to="/">首页</router-link>
      <router-link to="/detail">详情页</router-link>
      <router-link to="/mynews">收藏</router-link>
      <keep-alive include="Home">
        <component :is="Component"></component>
      </keep-alive>
    </router-view>

  </div>
</template>

<script>
import MyHeader from './components/Header/index.vue'
export default {
  name:'App',
  components: {
    MyHeader
  }
}
</script>
