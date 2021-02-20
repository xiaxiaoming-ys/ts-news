import axios from '../lib/http';
import { IRetNewsData, INewsInfo, IGetData } from '@/typings/index';

const APPKEY: string = '85ab8fe3d5736cbcd4927006b6939a48';

function getNewsList(options: IGetData) {
  const { type } = options;

  return axios.get('/api/toutiao/index', {
    params: {
      key: APPKEY,
      type: type
    }
  }).then((res: any) => {
    const newsList = res.result.data;

    return _cutNewList(newsList, options)
  }).catch((err: string) => {
    throw new Error('Request failed:' + err)
  })
}


export {
  getNewsList
}

// 分割数据
function _cutNewList(newsList: INewsInfo[], options: IGetData): IRetNewsData {
  const { pageNum, count } = options;
  const start = pageNum * count;
  const data = newsList.slice(start, start + count);

  return {
    data,
    hasMore: (start + count) > 30 ? false : true
  }
}