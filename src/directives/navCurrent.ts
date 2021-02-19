// 指令

interface IBinding {
  value: IConfig,
  oldValue: IConfig | undefined,
  [key: string]: any
}

interface IConfig {
  activeClass: string,
  className: string,
  curIndex: number
}

export default {
  mounted (el: HTMLElement, { value }: IBinding) {
    const { activeClass, className, curIndex } = value
    const oNavItems: HTMLCollection = el.getElementsByClassName(className);

    oNavItems[curIndex].className += ` ${activeClass}`
  },
  updated (el: HTMLElement, { value, oldValue }: IBinding) {
    const { activeClass, className, curIndex } = value;
    const oNavItems: HTMLCollection = el.getElementsByClassName(className);
    const oldCurIdx: number = oldValue!.curIndex;  // ! 确保一定有值才获取 curIndex

    oNavItems[oldCurIdx].className = `${className}`
    oNavItems[curIndex].className += ` ${activeClass}`
  }
}