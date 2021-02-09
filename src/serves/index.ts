import axios from '../lib/http';
import { NAV_TYPES, INewsInfo, IGetData } from '@/typings/index';

const APPKEY: string = '85ab8fe3d5736cbcd4927006b6939a48';

function getNewsList(options: IGetData) {
  const { type } = options

  return axios.get('/api/toutiao/index', {
    params: {
      key: APPKEY,
      type: type
    }
  }).then((res: any) => {
    const data = res.result.data;

    // return data
    return _cutNewList(data, options)
  }).catch(err => {
    throw new Error('Request failed:' + err)
  })
}

export {
  getNewsList
}

// 分割数据
function _cutNewList<INewsInfo>(data: INewsInfo[], options: IGetData): INewsInfo[] {
  const { pageNum, count } = options;

  const start = (pageNum - 1) * count;

  return data.slice(start, start + count)
}