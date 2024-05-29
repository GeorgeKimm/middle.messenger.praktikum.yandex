import { Block } from "@app/utils";
import styles from "./search.module.scss";

export class Search extends Block {
  protected render(): string {
    return `
      <div class=${styles["search-container"]}>
        <input class=${styles["search"]} placeholder="Поиск" />
      </div>
    `;
  }
}
