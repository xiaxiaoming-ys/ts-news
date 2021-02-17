<template>
  <div class="home" @click="homeClick" style="margin-top: 20px">
    首页
    <div class="box" v-for="item in newsList" :key="item">
      <p>{{ item.author_name }}</p>
      <p>{{ item.date }}</p>
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { useNewsList } from '@/compositions';
import { defineComponent } from 'vue';
import { Store, useStore } from 'vuex';


  export default defineComponent({
    name: 'Home',
    setup() {
      const store: Store<any> = useStore();
      let newsList = useNewsList(store)

      const homeClick = () => {
        newsList = useNewsList(store)

        console.log(newsList)
      }

      console.log(newsList)

      return {
        homeClick,
        newsList
      }

    }
  })
</script>

<style lang="scss">
  .box{
    margin-top: 10px;
    border: 1px solid #000;
    font-size: 12px;
  }
</style>