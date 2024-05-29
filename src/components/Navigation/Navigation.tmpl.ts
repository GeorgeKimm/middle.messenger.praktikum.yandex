import styles from "./navigation.module.scss";

export const tmpl = `
<nav>
  <ul class=${styles["navList"]}>
    <li class=${styles["navItem"]}><a href="/">вход</a></li>
    <li class=${styles["navItem"]}><a href="/sign-up">регистрация</a></li>
    <li class=${styles["navItem"]}><a href="/profile">профиль</a></li>
    <li class=${styles["navItem"]}><a href="/chats">чат</a></li>
    <li class=${styles["navItem"]}><a href="/404">не найдена страница</a></li>
    <li class=${styles["navItem"]}><a href="/505">неизвестная ошибка</a></li>
  </ul>
</nav>
`;
