import styles from "./signUpPage.module.scss";

export const tmpl = `
<div class="wrapper">
  <main class="main-container">
    {{{Navigation}}}
    <div class="main-item ${styles["signUp-container"]}" >
      <div class=${styles["signUp-block"]}>
        <div class=${styles["title-block"]}>
          <h3 class=${styles["title-block__title_h3"]}>Регистрация</h3>
        </div>
        <form class=${styles["form"]}>
          <div class=${styles["fields"]}>
            {{#each inputs}}
              {{{ FormInput label=this.label ref=this.name name=this.name type=this.type validate=this.validate }}}
            {{/each}}
          </div>
          
          <div class=${styles["buttons"]}>
            {{#each buttons}}
              {{{ Button label=this.label сlass=this.сlass onClick=this.onClick }}}
            {{/each}}
          </div>

          <div class=${styles["links"]}>
            <a href="#">Войти</a>
          </div>
        </form>
      </div>
    </div>
  </main>
</div>
`;
