import { Block } from "@app/utils";
import { tmpl } from "./navigation.tmpl";

export class Navigation extends Block {
  protected render(): string {
    return tmpl;
  }
}
