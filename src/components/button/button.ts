import Handlebars from "handlebars";
import tpl from "./buttonTpl.html?raw";
import "./buttonTpl.scss";

export const button = (id: string, value: string) => {
  return Handlebars.compile(tpl)({ id, value });
};
