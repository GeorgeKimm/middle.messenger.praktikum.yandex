import { Block, getFormData, validateCheck } from "@app/utils";
import { tmpl } from "./signInPage.tmpl.ts";
import styles from "./signInPage.module.scss";

const { validateEmail, validatePassword } = validateCheck;

export class SignInPage extends Block {
  constructor() {
    super({
      inputs: [
        {
          name: "login",
          label: "Логин",
          type: "text",
          validate: (value: string) => validateEmail(value)
        },
        {
          name: "password",
          label: "Пароль",
          type: "password",
          validate: (value: string) => validatePassword(value)
        }
      ],
      buttons: [
        {
          label: "Вход",
          сlass: styles["button-submit"],
          onClick: (event: MouseEvent) => {
            event.preventDefault();
            const formData = getFormData(this.props.inputs, this.refs);
            console.log("formData", formData);
          }
        }
      ]
    });
  }

  protected render(): string {
    return tmpl;
  }
}
