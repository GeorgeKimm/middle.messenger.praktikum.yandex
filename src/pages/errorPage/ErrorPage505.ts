import { Block } from "@app/utils";
import { tmpl } from "./errorPage.tmpl";

export class ErrorPage505 extends Block {
  constructor() {
    super({
      error: "505",
      text: "Неизвестная ошибка",
    });
  }

  protected render() {
    return tmpl;
  }
}
