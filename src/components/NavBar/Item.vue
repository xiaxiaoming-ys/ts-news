<template>
  <div class="nav-item">
    <span @click="setCurIndex(item.type)">{{ item.title }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { INavBar } from "../../typings";

  export default defineComponent ({
    name: 'NavItem',
    props: {
      item: Object as PropType<INavBar>,
      index: Number
    },
    setup(props, { emit }) {
      // 设置当前index值
      const setCurIndex = (type: string): void => {
        emit('setCurIndex', props.index, type)
      }

      return {
        setCurIndex
      }
    }
  })
</script>

<style lang="scss" scoped>
  .nav-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: .6rem;
    height: 100%;
    font-size: .16rem;

    &.active {
      color: #cf5f55;
    }
  }
</style>