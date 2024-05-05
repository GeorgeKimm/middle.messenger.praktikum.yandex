import HandleBars from "handlebars";
import profilePageTpl from "./profilePageTpl.html?raw";
import "./profilePageTpl.scss";

export const profilePage = (props = {}) => {
  return HandleBars.compile(profilePageTpl)(props);
};
