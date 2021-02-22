import { INewsInfo } from "@/typings";

function useFollowedList (): INewsInfo[] | null {
  // 到localStorage中获取新闻数据
  const followedList: INewsInfo[] = JSON.parse(localStorage.getItem('newsList') || '[]');

  // 如果没有数据
  if (followedList.length === 0) return null;

  return followedList
}

export {
  useFollowedList
}