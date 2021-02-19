<template>
  <div class="home">
    <nav-bar />
  </div>
</template>

<script lang="ts">
import { useNewsList } from '../compositions';
import { defineComponent } from 'vue';
import { Store, useStore } from 'vuex';
import NavBar from '../components/NavBar/index.vue'


  export default defineComponent({
    name: 'Home',
    components: {
      NavBar
    },
    setup() {
      const store: Store<any> = useStore();
      // const newsList = useNewsList(store)
      const newsList = 1;

      return {
        newsList
      }

    }
  })
</script>

<style lang="scss">

</style>