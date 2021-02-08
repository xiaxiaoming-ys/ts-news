
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

// 新闻数据
interface INewsData {
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


export {
  IHeaderInfo,
  NAV_TYPES,
  INewsData
}