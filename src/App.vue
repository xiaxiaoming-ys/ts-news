<template>
  <div class="container">
    <MyHeader />
    <router-view v-slot="{ Component }">
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
