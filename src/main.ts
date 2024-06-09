import "./styles/style.scss";
import {
  SignInPage,
  SignUpPage,
  ProfilePage,
  ErrorPage404,
  ErrorPage505,
  EditProfilePage,
  EditPasswordProfilePage,
  ChatsPage,
} from "./pages/index.ts";

import { register } from "./utils";

register();

const routes: Record<string, any> = {
  "/": SignInPage,
  "/sign-up": SignUpPage,
  "/404": ErrorPage404,
  "/505": ErrorPage505,
  "/profile": ProfilePage,
  "/profile/edit-data": EditProfilePage,
  "/profile/edit-password": EditPasswordProfilePage,
  "/chats": ChatsPage,
};

window.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  const path = window.location.pathname;

  if (app) {
    const Component = routes[path];
    const component = new Component();

    app.innerHTML = "";
    app?.append(component.getContent());
  }
});
