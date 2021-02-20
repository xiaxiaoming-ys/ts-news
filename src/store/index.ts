import { createStore } from 'vuex'
import { IHomeState, IDetailState } from '@/typings'

import home from './home'
import detail from './detail'


// 合并所有模块类型
export interface IGlobalState {
  home: IHomeState,
  detail: IDetailState
}

export default createStore<IGlobalState>({
  // 注册模块
  modules: {
    home,
    detail
  }
})
