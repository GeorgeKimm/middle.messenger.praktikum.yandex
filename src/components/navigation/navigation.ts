import HandleBars from "handlebars";
import navigationTpl from "./navigationTpl.html?raw";
import "./navigationTpl.scss";

export const navigation = (props = {}) => {
  return HandleBars.compile(navigationTpl)(props);
};
