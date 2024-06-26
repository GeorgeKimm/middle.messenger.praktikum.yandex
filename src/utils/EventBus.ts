import { BlockPropsType } from "./Block";

type Listener = (...args: BlockPropsType[]) => void;
type Listeners = Record<string, Listener[]>;

export class EventBus {
  private listeners: Listeners;

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: Listener): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: Listener): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback
    );
  }

  emit(event: string, ...args: BlockPropsType[]): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
  }
}
