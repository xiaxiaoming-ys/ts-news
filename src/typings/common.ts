import { INewsInfo } from '.';

interface IHeaderInfo {
  // 所在路由名称
  name: string,
  // title
  title: string,
  // 左图标是否显示
  left: boolean,
  // 右图标是否显示
  right: boolean,
  // 左图标
  leftIcon: string,
  // 右图标
  rightIcon: string,
  // 左图标路由
  leftPath: string,
  rightPath: string,
}

// 枚举类型
enum NAV_TYPES {
  TOP = 'top',
  SHEHUI = 'shehui',
  GUONEI = 'guonei',
  GUOJI = 'guoji',
  YULE = 'yule',
  TIYU = 'tiyu',
  JUNSHI = 'junshi',
  KEJI = 'keji',
  CAIJING = 'caijing',
  SHISHANG = 'shishang'
}

interface IGetData {
  type: NAV_TYPES,
  pageNum: number,
  count: number
}

interface IRetNewsData {
  data: INewsInfo[] | null,
  hasMore: boolean
}

export {
  IHeaderInfo,
  NAV_TYPES,
  IGetData,
  IRetNewsData
}