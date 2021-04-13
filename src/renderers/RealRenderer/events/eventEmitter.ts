export class EventEmitter<Events> {
  eventHandlers: {
    [Event in keyof Events]?: Map<string, (params: Events[Event]) => void>
  } = {}

  constructor (eventList: (keyof Events)[]) {
    eventList.forEach((event) => {
      this.eventHandlers[event] = new Map();
    })
  }

  on <Event extends keyof Events>(
    eventName: Event,
    handlerName: string,
    handler: (params: Events[Event]) => void
  ) {

    if (!this.eventHandlers[eventName].has(handlerName)) this.eventHandlers[eventName].set(handlerName, handler);
  }

  off <Event extends keyof Events>(
    eventName: Event,
    handlerName: string
  ) {
    this.eventHandlers[eventName].delete(handlerName);
  }

  emit <Event extends keyof Events>(
    eventName: Event,
    parameters: Events[Event]
  ) {
    this.eventHandlers[eventName].forEach((handler) => {
      handler(parameters);
    })
  }
}
