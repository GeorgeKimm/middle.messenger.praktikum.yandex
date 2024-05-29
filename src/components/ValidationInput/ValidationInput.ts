import { Block } from "@app/utils";
import styles from "./validationInput.module.scss";

export class ValidationInput extends Block {
  protected render() {
    return `
            <div class=${styles["validation"]}>{{error}}</div>
        `;
  }
}
