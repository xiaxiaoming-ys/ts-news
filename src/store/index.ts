import { createStore } from 'vuex'
import { IHomeState } from '@/typings'

import home from './home'


// 合并所有模块类型
export interface IGlobalState {
  home: IHomeState
}

export default createStore<IGlobalState>({
  // 注册模块
  modules: {
    home
  }
})
