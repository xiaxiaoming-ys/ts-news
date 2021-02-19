<template>
  <nav
    class="nav-bar"
    v-nav-current="{
      activeClass: 'active',
      className: 'nav-item',
      curIndex
    }"
  >
    <div class="scroll-area">
      <div class="nav-list" :style="{width: navData.length * 0.6 + 'rem'}">
        <nav-item
          v-for="(item, index) of navData"
          :key="item.type"
          :item="item"
          :index="index"
          @setCurIndex="setCurIndex"
        />
      </div>
    </div> 
  </nav>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from "vue";
import NavItem from './Item.vue'
import navData from '../../data/nav'
import { navCurrent } from '../../directives'

  export default defineComponent({
    name: 'NavBar',
    components: {
      NavItem
    },
    // 注册指令
    directives: {
      navCurrent
    },
    setup(props, { emit }) {

      const state = reactive({
        curIndex: 0
      })

      // 设置当前 index 值
      const setCurIndex = (curIndex: number, type: string): void => {
        state.curIndex = curIndex;

        emit('setCurType', type)
      }

      return {
        navData,
        ...toRefs(state),
        setCurIndex
      }
    }
  })
</script>

<style lang="scss" scoped>
.nav-bar {
    position: fixed;
    top: .44rem;
    left: 0;
    z-index: 1;
    width: 100%;
    height: .38rem;
    border-bottom: .01rem solid #ddd;
    background-color: #fff;
    overflow: hidden;

    .scroll-area {
      width: 100%;
      height: .45rem;
      overflow-x: auto;

      .nav-list {
        display: flex;
        flex-direction: row;
        height: .38rem;
      }
    }
  }
</style>