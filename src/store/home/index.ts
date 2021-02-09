import { Module } from 'vuex';
import { IHomeState } from '@/typings';
import { IGlobalState } from '..';

import state from './state';
import actions from './actions';
import mutations from './mutations';

// Module 固定写法
const homeModule: Module<IHomeState, IGlobalState> = {
  // 开启命名空间
  namespaced: true,
  state,
  actions,
  mutations
}

export default homeModule