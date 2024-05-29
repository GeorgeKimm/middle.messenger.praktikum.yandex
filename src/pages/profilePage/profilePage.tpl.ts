import styles from "./profilePage.module.scss";

export const tmpl = `
<div class="wrapper">
  <main class="main-container">
    {{{Navigation}}}
    <div class="main-item ${styles["profile-container"]}">
      <div class="step-back-block">
        <a href="/">
          <img src="/static/icons/arrowLeft.svg" alt="arrowLeft" />
        </a>
      </div>

      <div class=${styles["main-block"]}>
        <div class=${styles["profile"]}>

          <div class=${styles["image-block"]}>
            <div class=${styles["image-block__image"]}>
              <img src="/static/icons/profile.svg" alt="profile" />
            </div>
            <h3 class=${styles["image-block__title_h3"]}>{{userName}}</h3>
          </div>


          <form class=${styles["form"]}>
            <div class=${styles["fields"]}>
              {{#each inputs}}
                {{{ FormInput disabled=this.disabled value=this.value label=this.label ref=this.name name=this.name type=this.type validate=this.validate}}}
              {{/each}}
            </div>
            
            <div class=${styles["buttons"]}>
              {{#each buttons}}
                {{{ Button label=this.label сlass=this.сlass onClick=this.onClick }}}
              {{/each}}
            </div>

          </form>
        </div>
      </div>


    </div>
  </main>
</div>
`;
