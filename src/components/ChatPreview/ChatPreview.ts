import { Block } from "@app/utils";
import styles from "./chatPreview.module.scss";

export class ChatPreview extends Block {
  constructor(props: object) {
    super(props);
    this.props.events = {
      click: this.props.onClick || (() => {}),
    };
  }

  protected render(): string {
    return `
    <div class=${styles["preview-container"]}>
      <div class=${styles["avatar"]}>
        {{{ UserAvatar }}}
      </div>
      <div class=${styles["message-container"]}>
        <div>
          {{chatName}}
        </div>
        <div class=${styles["message-container__message"]}>
          {{lastMessage}}
        </div>
      </div>
      <div class=${styles["info"]}>
        <div class=${styles["info__message-date"]}>
          {{dateLastMessage}}
        </div>
        {{#if unreadMessages}}
        <div class=${styles["info__unread-messages"]}>
          {{unreadMessages}}
        </div>
        {{/if}}
      </div>
    </div>
    `;
  }
}
