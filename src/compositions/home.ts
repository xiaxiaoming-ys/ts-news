import { IGlobalState } from '@/store';
import { SET_NEWS_LIST, SET_CURRENT_TYPE } from '@/store/home/actionType';
import { IHomeState, INewsInfo, NAV_TYPES } from '@/typings';
import { computed, ComputedRef } from 'vue';
import { Store } from 'vuex';

// 返回值是一个[{}] -> computedRef类型
function useNewsList (store: Store<IGlobalState>): ComputedRef<INewsInfo[]> {
  const state: IHomeState = store.state.home;
  // 取出请求参数
  const type: NAV_TYPES = computed(() => state.currentType).value;
  const pageNum: number = computed(() => state.newsList.pageNum).value;
  const count: number = computed(() => state.newsList.count).value;
  // 最终数据列表
  const newsList: ComputedRef<INewsInfo[]> = computed(() => state.newsList.news);

  // 命名空间 使用指定 home模块下 下的 SET_NEWS_LIST方法
  store.dispatch(`home/${SET_NEWS_LIST}`, {
    type,
    pageNum,
    count
  })

  return newsList;
}

function useNavType(store: Store<IGlobalState>) {
  return (type: NAV_TYPES): ComputedRef<INewsInfo[]> => {
    store.dispatch(`home/${SET_CURRENT_TYPE}`, type)

    // 最终数据列表
    const newsList: ComputedRef<INewsInfo[]> = useNewsList(store);

    return newsList;
  }
}
// TOP
// SHEHUI
// GUONEI
// GUOJI
// YULE
// TIYU
// JUNSHI
// KEJI
// CAIJING
// SHISHANG

export {
  useNewsList,
  useNavType
}