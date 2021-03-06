import { computed } from 'vue';
import { Store } from 'vuex';
import { IGlobalState } from '@/store';
import { RouteLocationNormalizedLoaded } from 'vue-router';
import { INewsInfo } from '@/typings';
import { SET_CURRENT_NEWS } from '@/store/detail/actionType';


// 获取当前的新闻信息
function useDetailInfo(store: Store<IGlobalState>, route: RouteLocationNormalizedLoaded): INewsInfo | undefined {

  // 新闻的唯一key
  const uniquekey: string = route.params.uniquekey as string; // as 断言 必须是字符串类型
  // 跳转详情页来源页面名称
  const pageFrom: string = route.params.from as string;

  /**
   * 如果pageFrom 是收藏页：
   *    到localStorage里拿到newsList数据
   * 如果不是收藏页
   *    到state里去拿当前的新闻列表
  */
  const newsData: INewsInfo[] = pageFrom === 'MyNews'
        ? JSON.parse(localStorage.getItem('newsList') || '[]')
        : store.state.home.newsList.news;

  //  newsData遍历 用uniquekey 找出相同用uniquekey数据展示
  const newsInfo: INewsInfo | undefined = newsData.find((item) => uniquekey === item.uniquekey);
  // 设置当前新闻信息
  store.dispatch(`detail/${SET_CURRENT_NEWS}`, newsInfo)
  return newsInfo
}

function useNewsFollow(
  store: Store<IGlobalState>,
  callback: (status: boolean) => void
) {
  // 取出当前新闻详情信息
  const currentNews: INewsInfo = computed(() => store.state.detail.currentNews).value;
  // 从localStorage中取出收藏的新闻列表
  let newsList: INewsInfo[] = JSON.parse(localStorage.getItem('newsList') || '[]')
  // 最终将返回的收藏与否的状态
  let followStatus: boolean = false;

  // 如果当前newsList数组不为空
  if (newsList.length) {
    // 在newsList中寻找 currentNews.uniquekey
    const isExist: INewsInfo | undefined = newsList.find((item: INewsInfo) => item.uniquekey === currentNews.uniquekey)

    // 如果信息存在
    if (isExist) {
      // 从newsList中删除当前的 currentNews.uniquekey
      newsList = newsList.filter((item: INewsInfo) => item.uniquekey !== currentNews.uniquekey);
      // 取消收藏
      followStatus = false
    } else {
      // 不存在当前的新闻详情信息  给newsList 放入当前的新闻
      newsList.push(currentNews)
      // 添加收藏
      followStatus = true
    }
  } else {
    // 如果newsList数据为空 给newsList放入当前新闻
    newsList.push(currentNews)
    followStatus = true
  }

  // 把最后修改的newsList 再次放入到localStorage中
  localStorage.setItem('newsList', JSON.stringify(newsList))
  // 执行回调 并传入收藏状态
  callback(followStatus)
}

function useFollowedCheck(
  route: RouteLocationNormalizedLoaded,
  callback: (status: boolean) => void
) {
  // 获取新闻唯一标识 uniquekey
  const uniquekey: string = route.params.uniquekey as string
  // 来源页面
  const pageFrom: string = route.params.from as string

  // 收藏页面过来的
  if (pageFrom === 'MyNews') {
    callback(true)
    return;
  }

  // newList 获取本地收藏新闻数据
  const newList: INewsInfo[] = JSON.parse(localStorage.getItem('newsList') || '[]')
  // isExist 是否在本地有收藏
  const isExist: INewsInfo | undefined = newList.find((item: INewsInfo) => item.uniquekey === uniquekey)

  callback(isExist ? true : false)
}


export {
  useDetailInfo,
  useNewsFollow,
  useFollowedCheck
}

// var dataStr = [{"uniquekey":"a2d8365aa41f9744ce5f8394e08e291e","title":"东方公安多警联动 成功破获交通肇事逃逸致人死亡案件","date":"2021-02-20 14:28","category":"头条","author_name":"南海网","url":"https://mini.eastday.com/mobile/210220142844483195423.html","thumbnail_pic_s":"https://dfzximg02.dftoutiao.com/news/20210220/20210220142844_66ae42c726dfa9065340f45e1c3b3f8a_1_mwpm_03201609.jpeg","thumbnail_pic_s02":"https://dfzximg02.dftoutiao.com/news/20210220/20210220142844_66ae42c726dfa9065340f45e1c3b3f8a_2_mwpm_03201609.jpeg"},{"uniquekey":"f4f9163417fe7b5279797630060e4d3d","title":"女孩长相太漂亮，父亲为此辞掉工作","date":"2021-02-20 14:14","category":"头条","author_name":"琪琪","url":"https://mini.eastday.com/mobile/210220141448043611169.html","thumbnail_pic_s":"https://dfzximg02.dftoutiao.com/minimodify/20210220/450x287_6030a8d760ac7_mwpm_03201609.png"},{"uniquekey":"92d29f1d43ffaf38a8214cf078a20b5d","title":"漯河一醉驾案检测机构引争议：一审认可，曾有检察机关不认可","date":"2021-02-20 14:13","category":"头条","author_name":"澎湃新闻","url":"https://mini.eastday.com/mobile/210220141317977268147.html","thumbnail_pic_s":"https://dfzximg02.dftoutiao.com/news/20210220/20210220141317_c43cb268182e1d35e6117b182c847fca_0_mwpm_03201609.jpeg","thumbnail_pic_s02":"https://dfzximg02.dftoutiao.com/news/20210220/20210220141317_c43cb268182e1d35e6117b182c847fca_1_mwpm_03201609.jpeg"},{"uniquekey":"f8937c95cfe761ef69117aa87dc27e5d","title":"“折腾”出来的幸福生活！嵊州这对小夫妻只做别人没有的","date":"2021-02-20 14:10","category":"头条","author_name":"浙江在线-嵊州新闻网","url":"https://mini.eastday.com/mobile/210220141047098166713.html","thumbnail_pic_s":"https://dfzximg02.dftoutiao.com/news/20210220/20210220141047_6787f48d2ebb2b94bc940e6cfa8c0454_1_mwpm_03201609.jpeg"},{"uniquekey":"18a0a03c024bdc8d86b1b405cea22de1","title":"刘会民的“惠民”人生 ——记尉氏县政协委员 尉氏县众仁热力设备安装公司经理刘会民","date":"2021-02-20 14:08","category":"头条","author_name":"消费日报网","url":"https://mini.eastday.com/mobile/210220140805482449922.html","thumbnail_pic_s":"https://dfzximg02.dftoutiao.com/news/20210220/20210220140805_d41d8cd98f00b204e9800998ecf8427e_1_mwpm_03201609.jpeg","thumbnail_pic_s02":"https://dfzximg02.dftoutiao.com/news/20210220/20210220140805_d41d8cd98f00b204e9800998ecf8427e_2_mwpm_03201609.jpeg","thumbnail_pic_s03":"https://dfzximg02.dftoutiao.com/news/20210220/20210220140805_d41d8cd98f00b204e9800998ecf8427e_3_mwpm_03201609.jpeg"},{"uniquekey":"4d58960793506f87b12e7c3883588118","title":"11岁男孩春节吃饺子吞下2枚硬币，1年后才取出！","date":"2021-02-20 14:01","category":"头条","author_name":"北京青年报","url":"https://mini.eastday.com/mobile/210220140104688368260.html","thumbnail_pic_s":"https://dfzximg02.dftoutiao.com/news/20210220/20210220140104_e35d213b9842e18b231b7db16f04f3e3_0_mwpm_03201609.jpeg","thumbnail_pic_s02":"https://dfzximg02.dftoutiao.com/news/20210220/20210220140104_e35d213b9842e18b231b7db16f04f3e3_1_mwpm_03201609.jpeg","thumbnail_pic_s03":"https://dfzximg02.dftoutiao.com/news/20210220/20210220140104_e35d213b9842e18b231b7db16f04f3e3_2_mwpm_03201609.jpeg"},{"uniquekey":"7adf7dc73127d2b22d249ab14f799255","title":"威海一男子持刀入室抢劫，警方两小时抓获犯罪嫌疑人","date":"2021-02-20 14:01","category":"头条","author_name":"壹现场","url":"https://mini.eastday.com/mobile/210220140102410813676.html","thumbnail_pic_s":"https://dfzximg02.dftoutiao.com/news/20210220/20210220140102_0e12f65953dd2ca5f0c11a81239ea31f_0_mwpm_03201609.jpeg","thumbnail_pic_s02":"https://dfzximg02.dftoutiao.com/news/20210220/20210220140102_0e12f65953dd2ca5f0c11a81239ea31f_1_mwpm_03201609.jpeg"},{"uniquekey":"f13a7616e258d210aaabcf7f475fdffb","title":"外国人咋看中国年？瑞典同学说，你们中国人真“好吃”，真有趣！","date":"2021-02-20 13:59","category":"头条","author_name":"上观新闻","url":"https://mini.eastday.com/mobile/210220135926955500956.html","thumbnail_pic_s":"https://dfzximg02.dftoutiao.com/news/20210220/20210220135926_4f70ec02ea8a362ed5a25bd132fc8227_0_mwpm_03201609.jpeg","thumbnail_pic_s02":"https://dfzximg02.dftoutiao.com/news/20210220/20210220135926_4f70ec02ea8a362ed5a25bd132fc8227_1_mwpm_03201609.jpeg","thumbnail_pic_s03":"https://dfzximg02.dftoutiao.com/news/20210220/20210220135926_4f70ec02ea8a362ed5a25bd132fc8227_2_mwpm_03201609.jpeg"},{"uniquekey":"d51776e929f0974dcc6ee9e668f2e15e","title":"权威专家史仁杰谈中西医如何结合","date":"2021-02-20 13:45","category":"头条","author_name":"江南时报","url":"https://mini.eastday.com/mobile/210220134500320407387.html","thumbnail_pic_s":"https://dfzximg02.dftoutiao.com/news/20210220/20210220134500_33bc29c79538f3292c62821ba6d406e8_1_mwpm_03201609.jpeg"},{"uniquekey":"7d0f8aae47bdd1d6a4fb3ff3f0fc0261","title":"独居高龄老伯景点遗失盲人证 民警驱车50公里跨区送回","date":"2021-02-20 13:44","category":"头条","author_name":"新民晚报","url":"https://mini.eastday.com/mobile/210220134418914760211.html","thumbnail_pic_s":"https://dfzximg02.dftoutiao.com/news/20210220/20210220134418_b4f484317a8ab59c4368474b3d32e6d4_0_mwpm_03201609.jpeg"}];