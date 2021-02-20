import { NAV_TYPES } from '.';

// 新闻数据
interface INewsInfo {
  uniquekey: string,
  title: string,
  date: string,
  category: string,
  author_name: string,
  url: string,
  thumbnail_pic_s?: string,
  thumbnail_pic_s02?: string,
  thumbnail_pic_s03?: string
}

interface INewsList {
  hasMore: boolean,
  isLoading: boolean,
  pageNum: number,
  count: number,
  news: INewsInfo[]
}

interface IHomeState {
  currentType: NAV_TYPES
  newsList: INewsList
}

interface IDetailState {
  currentNews: INewsInfo
}

export {
  INewsList,
  INewsInfo,
  IHomeState,
  IDetailState
}