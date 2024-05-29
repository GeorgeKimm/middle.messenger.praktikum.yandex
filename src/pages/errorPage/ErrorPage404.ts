import { Block } from "@app/utils";
import { tmpl } from "./errorPage.tmpl";

export class ErrorPage404 extends Block {
  constructor() {
    super({
      error: "404",
      text: "Не найдена страница",
    });
  }

  protected render() {
    return tmpl;
  }
}
