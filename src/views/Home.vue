<template>
  <div class="home">
    首页
  </div>
</template>

<script lang="ts">
// export default {
//   name: 'Home'
// }
import { defineComponent, onMounted } from 'vue';
import { getNewsList } from '../serves'

import { NAV_TYPES } from '../typings'

  export default defineComponent({
    name: 'Home',
    setup() {
      onMounted(async () => {
        const data = await getNewsList({
          type: NAV_TYPES.YULE,
          pageNum: 1,
          count: 5
        })

        console.log(data)
      })
    }
  })
</script>

<style lang="scss">

</style>