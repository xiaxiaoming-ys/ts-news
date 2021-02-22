<template>
  <div class="container">
    <!-- 展示列表 -->
    <newsList
      :newsData="followedList"
      :top="44"
      v-if="followedList"
    />
    <!-- 没有数据 -->
    <noData v-if="!followedList" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { INewsInfo } from "../typings"
import { useFollowedList } from "../compositions"

import newsList from '../components/NewsList/index.vue'
import noData from '../components/NoData/index.vue'

export default defineComponent({
  name: 'MyNews',
  components: {
    newsList,
    noData
  },
  setup() {
    const followedList: INewsInfo[] | null = useFollowedList()

    return {
      followedList
    }
  }
})
</script>

<style lang="scss" scoped>

</style>