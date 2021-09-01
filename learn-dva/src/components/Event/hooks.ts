/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-08-07 12:37:34
 * @LastEditors: camus
 * @LastEditTime: 2021-08-07 12:41:21
 */

// 信息块类型
export enum BlockType {
  file = 1, // 文件
  meeting = 2, // 日程 会议
  task = 3, // 任务
  table = 4, // 表格
  collect = 5, // 收集
  note = 6, // 笔记
  aircast = 7, // 投屏
  video = 8, // 音视频
  board = 9, // 思维画布
  space = 10, // 协作空间
  connect = 11, // 连接（预留）
}
export type IToolCallback = (p?: IToolCallbackParams) => void;


export interface IToolStrategy {
  blockType: BlockType;
  callback: IToolCallback;
  children?: callbackChildren[];
}
type callbackChildren = {
  callback: IToolCallback;
};
export type IToolStrategyMap = {
  [k in BlockType]?: IToolCallback;
  // [k: string | number]: IToolCallback;
};
const _strategies: IToolStrategyMap = {};

// 注册各业务的点击策略
export const setToolStrategy = (strategies: IToolStrategy[]) => {
  strategies.forEach((s) => {
    const type = s.blockType;
    const children = s.children;
    if (children?.length) {
      children.forEach((c, i) => {
        _strategies[type + `-${i}`] = (arg?: IToolCallbackParams) => {
          const fn = c.callback;
          typeof fn === 'function' && fn(arg);
        };
      });
    } else {
      _strategies[type] = (arg?: IToolCallbackParams) => {
        console.log('[tool] click strategy trigger - code: ' + type);
        const fn = s.callback;
        typeof fn === 'function' && fn(arg);
      };
    }
  });
  return _strategies;
};

// 设置业务的点击策略的触发
export const useToolSubscriber = () => {
  useEffect(() => {
    const id = toolEvent.subscribe((msg) => {
      const { blockType } = msg;
      const strategy = _strategies[blockType];
      typeof strategy === 'function' && strategy(msg);
    });
    return () => {
      toolEvent.unsubscribe(id);
    };
  }, []);
};
