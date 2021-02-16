import * as actionTypes from './actionType'
import { IHomeState, IRetNewsData } from '@/typings'

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
  }
}