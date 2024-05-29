import styles from "./errorPage.module.scss";

export const tmpl = `
<div class="wrapper">
  <main class="main-container">
    {{{Navigation}}}
    <div class="main-item ${styles["error-container"]}">
      <div class="error">
        <h1 class=${styles["error__h1"]}>{{error}}</h1>
        <h2 class=${styles["error__h2"]}>{{text}}</h2>
        <a href="/" class=${styles["error__link"]}>на главную</a>
      </div>
    </div>
  </main>
</div>
`;
