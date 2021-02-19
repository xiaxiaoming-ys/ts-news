import * as actionTypes from './actionType'
import { Commit } from 'vuex'
import { IGetData, INewsInfo, IHomeState, NAV_TYPES } from '@/typings'
import { getNewsList } from '@/serves'

export default {
  // 设置news数据的方法
  [actionTypes.SET_NEWS_LIST]({ commit, state }: { commit: Commit, state: IHomeState }, options: IGetData) {

    // 如果isLoading为真 就不能请求数据
    if (state.newsList.isLoading) return;
    // 如果hasMore是假 也不能请求数据  （假 为没有数据了）
    if (!state.newsList.hasMore) return;

    /**
     * pageNum === 0 第一页加载的时候， 我们要用骨架屏， 正在加载中 就不能显示
     * pageNum > 0 不是第一页， 就是触底加载更多 就要显示 正在加载中
    */
    if (state.newsList.pageNum) {
      commit(actionTypes.SET_LOADING, true)
    }

    // 请求数据
    getNewsList(options).then((data: any) => {
      // 去操作数据
      commit(actionTypes.SET_NEWS_LIST, data)
    }).catch((err: any) => {
      throw err
    })
  },
  // 更改新闻类型的action
  [actionTypes.SET_CURRENT_TYPE]( { commit }: { commit: Commit }, type: NAV_TYPES ): void {
    commit(actionTypes.SET_CURRENT_TYPE, type)
  }
}
// <INewsInfo[0]>