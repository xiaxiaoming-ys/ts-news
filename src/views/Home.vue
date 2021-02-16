<template>
  <div class="home">
    首页
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
      const newsList = useNewsList(store)

      console.log(newsList)

    }
  })
</script>

<style lang="scss">

</style>