// 指令
// binding接口 描述
interface IBinding {
  value: IConfig,
  oldValue: IConfig | undefined,
  [key: string]: any
}

// binding.value的接口 描述
interface IConfig {
  activeClass: string,
  className: string,
  curIndex: number
}

export default {
  // 挂载后
  mounted (el: HTMLElement, { value }: IBinding) {
    const { activeClass, className, curIndex } = value
    const oNavItems: HTMLCollection = el.getElementsByClassName(className);

    // 给当前index 的元素增加active样式
    oNavItems[curIndex].className += ` ${activeClass}`
  },
  // 更新后
  updated (el: HTMLElement, { value, oldValue }: IBinding) {
    // oldValue 更新前的数据
    const { activeClass, className, curIndex } = value;
    const oNavItems: HTMLCollection = el.getElementsByClassName(className);
    const oldCurIdx: number = oldValue!.curIndex;  // ! 叹号 确保一定有值才获取 curIndex

    // 更新前的元素清除active样式
    oNavItems[oldCurIdx].className = `${className}`
    // 更新后元素增加active样式
    oNavItems[curIndex].className += ` ${activeClass}`
  }
}