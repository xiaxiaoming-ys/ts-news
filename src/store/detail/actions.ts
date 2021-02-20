import * as actionTypes from './actionType'
import { Commit } from 'vuex'
import { INewsInfo } from '@/typings'

export default {
  [actionTypes.SET_CURRENT_NEWS] ({ commit }: { commit: Commit }, newsInfo: INewsInfo) {
    commit(actionTypes.SET_CURRENT_NEWS, newsInfo)
  }
}