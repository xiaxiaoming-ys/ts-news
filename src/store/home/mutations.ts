import * as actionTypes from './actionType'
import { IHomeState, IRetNewsData, NAV_TYPES, INewsList } from '@/typings'

export default {
  [actionTypes.SET_LOADING] (state: IHomeState, isLoading: boolean) {
    state.newsList.isLoading = isLoading
  },
  [actionTypes.SET_NEWS_LIST] (state: IHomeState, payload: IRetNewsData) {
    // 如果hasMore 返回的是真 就证明还有下一页， 那就一定要合并state -》 news
    // 并且要给pageNum + 1， 因为下一次请求的时候需要下一页pageNum
    if (payload.hasMore) {
      state.newsList.news = [...state.newsList.news, ...payload.data!] // ! 确定payload.data有值
      state.newsList.pageNum += 1
    }

    // 不管hasMore的是真还是假
    // 都要重新赋值state hasMore
    state.newsList.hasMore = payload.hasMore;
    // 都要将isLoading 设置为false
    state.newsList.isLoading = false;
  },

  // 更改新闻类型的方法
  [actionTypes.SET_CURRENT_TYPE] (state: IHomeState, type: NAV_TYPES) {
    state.currentType = type

    // 由于新闻类型改变， 所以newsList内部所有属性都要还原成默认值
    state.newsList = <INewsList> {
      // 是否还有更多数据
      hasMore: true,
      // 是否正在加载中
      isLoading: false,
      // 当前页码
      pageNum: 0,
      // 一页请求多少数据
      count: 10,
      // 当前的新闻列表数据
      news: []
    }
  }
}
