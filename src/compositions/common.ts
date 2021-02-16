import { IHeaderInfo, INewsInfo } from '@/typings';
import { headerInfors } from '@/router'

// 通过路由name 查找出对应router object对象
/**
 * // 所在路由名称
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
 * 返回值 IHeaderInfo 如果没找到对应数据 就返回 undefined
*/
function useRouteInfo(routeName: string): IHeaderInfo | undefined {
  const routeInfo: IHeaderInfo | undefined = headerInfors.find((item: IHeaderInfo) => item.name === routeName)

  return routeInfo
}

export {
  useRouteInfo
}