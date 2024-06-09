import { Block } from "@app/utils";
import styles from "./buttonSendMessage.module.scss";

export class ButtonSendMessage extends Block {
  constructor(props: object) {
    super(props);
    this.props.events = {
      click: this.props.onClick || (() => {})
    };
  }

  protected render(): string {
    return `
      <button
        class=${styles["button-send"]}
      >
        >
      </button>
    `;
  }
}
