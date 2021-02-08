import { IHeaderInfo } from '@/typings';
import { headerInfors } from '@/router'

// 通过路由name 查找出对应router object对象
function useRouteInfo(routeName: string): IHeaderInfo | undefined {
  const routeInfo: IHeaderInfo | undefined = headerInfors.find((item: IHeaderInfo) => item.name === routeName)

  return routeInfo
}

export {
  useRouteInfo
}