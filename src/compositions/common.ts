import { IHeaderInfo } from '@/typings';
import { headerInfors } from '@/router'

function useRouteInfo(routeName: string): IHeaderInfo | undefined {
  const routeInfo: IHeaderInfo | undefined = headerInfors.find((item: IHeaderInfo) => item.name === routeName)

  return routeInfo
}

export {
  useRouteInfo
}