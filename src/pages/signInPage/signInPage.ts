import HandleBars from "handlebars";
import signInPageTpl from "./signInPageTpl.html?raw";
import "./signInPageTpl.scss";

export const signInPage = (props = {}) => {
  return HandleBars.compile(signInPageTpl)(props);
};
