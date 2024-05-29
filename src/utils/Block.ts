import { v4 as uuidv4 } from "uuid";
import { EventBus } from "./EventBus";
import Handlebars from "handlebars";

export type BlockPropsType = Record<string, any>;

// Пока не получается нормально типизировать
export class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  } as const;

  private _element: HTMLElement | null = null;
  public _meta: { props: BlockPropsType };
  public id = uuidv4();
  public props: BlockPropsType;
  public refs: Record<string, Block> = {};
  public children: Record<string, Block>;
  private readonly eventBus: () => EventBus;

  constructor(propsWithChildren: BlockPropsType = {}) {
    const eventBus = new EventBus();

    const { props, children } = this._getChildrenAndProps(propsWithChildren);

    this._meta = {
      props,
    };

    this.children = children;
    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus): void {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _addEvents(): void {
    const { events = {} } = this.props as {
      events: Record<string, () => void>;
    };

    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  _removeEvents(): void {
    const { events = {} } = this.props as {
      events: Record<string, () => void>;
    };

    Object.keys(events).forEach((eventName) => {
      this._element?.removeEventListener(eventName, events[eventName]);
    });
  }

  private _init(): void {
    this.init();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  protected init(): void {}

  private _componentDidMount(): void {
    this.componentDidMount();
  }

  componentDidMount(): void {}

  private _componentDidUpdate(
    oldProps: BlockPropsType,
    newProps: BlockPropsType
  ): void {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  protected componentDidUpdate(
    oldProps: BlockPropsType,
    newProps: BlockPropsType
  ): boolean {
    return oldProps !== newProps;
  }

  public dispatchComponentDidMount(): void {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);

    Object.values(this.children).forEach((child) => {
      child.dispatchComponentDidMount();
    });
  }

  _getChildrenAndProps(childrenAndProps: object): {
    props: BlockPropsType;
    children: Record<string, Block>;
  } {
    const props: BlockPropsType = {};
    const children: Record<string, Block> = {};

    Object.entries(childrenAndProps).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { props, children };
  }

  setProps = (nextProps: BlockPropsType): void => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element(): HTMLElement | null {
    return this._element;
  }

  private _render(): void {
    const fragment = this.compile(this.render(), this.props);

    this._removeEvents();

    const newElement = fragment.firstElementChild as HTMLElement;

    if (this._element) {
      this._element.replaceWith(newElement);
    }

    this._element = newElement;

    this._addEvents();
  }

  protected render(): string {
    return "";
  }

  private compile(template: string, context: any): DocumentFragment {
    const contextAndStubs = { ...context, __refs: this.refs };

    const html = Handlebars.compile(template)(contextAndStubs);

    const temp = document.createElement("template");

    temp.innerHTML = html;

    contextAndStubs.__children?.forEach(({ embed }: any) => {
      embed(temp.content);
    });

    return temp.content;
  }

  getContent(): HTMLElement | null {
    return this.element;
  }

  value() {}

  _makePropsProxy(props: BlockPropsType) {
    // Можно и так передать this
    // Такой способ больше не применяется с приходом ES6+
    const self = this;

    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target, prop: string, value) {
        const oldTarget = { ...target };

        target[prop] = value;

        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      },
    });
  }

  show(): void {
    this.getContent()!.style.display = "block";
  }

  hide(): void {
    this.getContent()!.style.display = "none";
  }
}
