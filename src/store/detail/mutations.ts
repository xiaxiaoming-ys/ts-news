import * as actionTypes from './actionType'
import { INewsInfo, IDetailState } from '@/typings'


export default {
  [actionTypes.SET_CURRENT_NEWS] (state: IDetailState, newsInfo: INewsInfo) {
    state.currentNews = newsInfo;
  }
}