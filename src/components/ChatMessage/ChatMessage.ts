import { Block } from "@app/utils";
import styles from "./chatMessage.module.scss";

export class ChatMessage extends Block {
  protected render() {
    return `
    <div
    {{#if userCurrent}}
      class=${styles["message-container-user-current"]}
    {{else}}
      class=${styles["message-container"]}
    {{/if}}
    >
      <div class=${styles["info"]}>
        <div class=${styles["text"]}>{{message}}<div>
        <div class=${styles["time"]}>{{time}}<div>
      </div>
    </div>
    `;
  }
}
