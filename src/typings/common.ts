import { INewsInfo } from '.';

interface IHeaderInfo {
  name: string,
  title: string,
  left: boolean,
  right: boolean,
  leftIcon: string,
  rightIcon: string,
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