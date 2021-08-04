import eventbus from 'util/eventbus';
import { IToolCallbackParams } from './type';

const EVENT_TOOL_CLICK = 'event-tool-click';

type IEventCallback = (msg: IToolCallbackParams) => void;
type ISubscribeID = number;

class ToolEvent {
  private uuid: ISubscribeID = 0;
  private listeners: IEventCallback[] = [];

  public constructor() {
    eventbus.on(EVENT_TOOL_CLICK, (msg: IToolCallbackParams) => {
      this.trigger(msg);
    });
  }

  public subscribe = (callback: IEventCallback): ISubscribeID => {
    this.listeners[this.uuid] = callback;
    return this.uuid++;
  };

  public unsubscribe = (id: ISubscribeID): void => {
    if (!this.listeners[id]) return;
    this.listeners.splice(id, 1);
  };

  public publish = (msg: IToolCallbackParams): void => {
    eventbus.emit(EVENT_TOOL_CLICK, msg);
  };

  private trigger = (msg: IToolCallbackParams) => {
    this.listeners.forEach((cb) => {
      cb(msg);
    });
  };
}

const toolEvent = new ToolEvent();

export default toolEvent;
