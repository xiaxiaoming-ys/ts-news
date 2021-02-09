import * as actionTypes from './actionType'
import { Commit } from 'vuex'
import { IGetData, INewsInfo, IHomeState } from '@/typings'
import { getNewsList } from '@/serves'

export default {
  [actionTypes.SET_NEWS_LIST]({ commit, state }: { commit: Commit, state: IHomeState }, options: IGetData) {

    if (state.newsList.isLoading) return;
    if (!state.newsList.hasMore) return;

    if (state.newsList.pageNum) {
      commit(actionTypes.SET_LOADING, true)
    }

    getNewsList(options).then((data) => {
      commit(actionTypes.SET_NEWS_LIST, data)
    }).catch((err) => {
      throw err
    })
  }
}
// <INewsInfo[0]>