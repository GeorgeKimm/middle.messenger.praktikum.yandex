import HandleBars from "handlebars";
import signUpPageTpl from "./signUpPageTpl.html?raw";

export const signUpPage = (props = {}) => {
  return HandleBars.compile(signUpPageTpl)(props);
};
