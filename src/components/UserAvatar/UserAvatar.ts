import { Block } from "@app/utils";
import styles from "./userAvatar.module.scss";

export class UserAvatar extends Block {
  protected render() {
    return `
      <div
      {{#if small}}
      class=${styles["avatar-container-small"]}
      {{else}}
      class=${styles["avatar-container"]}
      {{/if}}
      >
        <div class=${styles["avatar-image"]}></div>
        {{#if userName}}
          <div class=${styles["avatar-name"]}>
            {{userName}}
          </div>
        {{/if}}
      </div>
    `;
  }
}
