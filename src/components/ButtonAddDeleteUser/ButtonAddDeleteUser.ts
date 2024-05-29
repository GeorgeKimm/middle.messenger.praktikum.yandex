import { Block } from "@app/utils";
import styles from "./buttonAddDeleteUser.module.scss";

export class ButtonAddDeleteUser extends Block {
  constructor(props: object) {
    super(props);
    this.props.events = {
      click: this.props.onClick || (() => {})
    };
  }

  protected render(): string {
    return `
      <button
        class=${styles["button"]}
      >
      ⋮
      </button>
    `;
  }
}
