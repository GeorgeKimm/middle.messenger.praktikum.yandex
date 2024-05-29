import { Block } from "@app/utils";
import { tmpl } from "./Navigation.tmpl";

export class Navigation extends Block {
  protected render(): string {
    return tmpl;
  }
}
