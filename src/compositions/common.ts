import { IGlobalState } from '@/store';
import { IHeaderInfo, IHomeState, NAV_TYPES, IGetData } from '@/typings';
import _ from 'lodash';
import { headerInfors } from '@/router'
import { Ref, onMounted, computed } from 'vue';
import { Store } from 'vuex';


// 通过路由name 查找出对应router object对象
/**
 * // 所在路由名称
  name: string,
  // title
  title: string,
  // 左图标是否显示
  left: boolean,
  // 右图标是否显示
  right: boolean,
  // 左图标
  leftIcon: string,
  // 右图标
  rightIcon: string,
  // 左图标路由
  leftPath: string,
  rightPath: string,
 * 返回值 IHeaderInfo 如果没找到对应数据 就返回 undefined
*/
function useRouteInfo (routeName: string): IHeaderInfo | undefined {
  const routeInfo: IHeaderInfo | undefined = headerInfors.find((item: IHeaderInfo) => item.name === routeName)

  return routeInfo
}

// 图片淡入
function useImgShow (imgRefs: Ref<null | HTMLElement>[]): void {
  // 收集item里的所有图片的ref， 遍历refs， 当图片加载完成后让图片透明度为1
  imgRefs.map((imgRef) => {
    const oImg = imgRef.value!; // ! value 必须有值

    oImg!.onload = function () {
      oImg!.style.opacity = '1';
    }
  })
}

function useLoadingMore(
  // 仓库
  store: Store<IGlobalState>,
  // store的模块名： home detail
  module: string,
  // action type module/actionType 
  actionType: string,
  // 元素
  element: Ref<HTMLElement | null>,
) {
  let el: HTMLElement;
  let state: IHomeState;

  // 类型断言操作
  switch (module) {
    case 'home':
      state = store.state.home as IHomeState;
      break;
    default:
      break;
  }

  onMounted(() => {
    // 注意这里需要类型断言， 因为element类型中有null
    el = element.value as HTMLElement;
    // 绑定滚动事件  使用lodash工具库中的防抖函数 debounce
    el.addEventListener('scroll', _.debounce(_loadMore, 300), false)
  })

  function _loadMore(): void {
    // 拿到列表高度， 滚动高度， 滚动的top值
    const listHeight: number = el.clientHeight;
    const scrollHeight: number = el.scrollHeight;
    const scrollTop: number = el.scrollTop;

    const type: NAV_TYPES = computed(() => state.currentType).value;
    const pageNum: number = computed(() => state.newsList.pageNum).value;
    const count: number = computed(() => state.newsList.count).value;

    // 监听触底
    if (listHeight + scrollTop >= scrollHeight - 30) {
      store.dispatch(`${module}/${actionType}`, <IGetData>{
          type,
          pageNum,
          count
        })
    }
  }

  return {
    isLoading: computed(() => state.newsList.isLoading),
    hasMore: computed(() => state.newsList.hasMore)
  }
}

export {
  useRouteInfo,
  useImgShow,
  useLoadingMore
}
