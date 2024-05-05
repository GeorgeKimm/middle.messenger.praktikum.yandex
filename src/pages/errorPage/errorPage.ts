import HandleBars from "handlebars";
import errorPageTpl from "./errorPageTpl.html?raw";
import "./errorPageTpl.scss";

export const errorPage = (props = {}) => {
  return HandleBars.compile(errorPageTpl)(props);
};
