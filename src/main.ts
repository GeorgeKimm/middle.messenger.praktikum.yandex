import "./styles/style.scss";
import { navigation, button } from "./components/index.ts";
import {
  signInPage,
  signUpPage,
  profilePage,
  errorPage,
} from "./pages/index.ts";

const routes: Record<string, any> = {
  "/": signInPage({
    button: button("sign-in", "Вход"),
    navigation: navigation(),
  }),
  "/sign-up": signUpPage({
    button: button("sign-up", "Регистрация"),
    navigation: navigation(),
  }),
  "/profile": profilePage({
    button: button("sign-up", "Создать аккаунт"),
    navigation: navigation(),
  }),
  "/404": errorPage({
    error: "404",
    text: "Не найдена страница",
    navigation: navigation(),
  }),
  "/505": errorPage({
    error: "500",
    text: "Неизвестная ошибка",
    navigation: navigation(),
  }),
};

window.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  const path = window.location.pathname;

  if (app) {
    app.innerHTML = routes[path];
  }
});
