import { Block, getFormData, validateCheck } from "@app/utils";
import { tmpl } from "./signUpPage.tmpl.ts";
import styles from "./signUpPage.module.scss";

const {
  validateName,
  validateLogin,
  validateEmail,
  validatePassword,
  validatePhone,
} = validateCheck;

export class SignUpPage extends Block {
  constructor() {
    super({
      inputs: [
        {
          name: "email",
          label: "Почта",
          type: "email",
          validate: (value: string) => validateEmail(value),
        },
        {
          name: "login",
          label: "Логин",
          type: "text",
          validate: (value: string) => validateLogin(value),
        },
        {
          name: "first_name",
          label: "Имя",
          type: "text",
          validate: (value: string) => validateName(value),
        },
        {
          name: "second_name",
          label: "Фамилия",
          type: "text",
          validate: (value: string) => validateName(value),
        },
        {
          name: "phone",
          label: "Телефон",
          type: "tel",
          validate: (value: string) => validatePhone(value),
        },
        {
          name: "password",
          label: "Пароль",
          type: "password",
          validate: (value: string) => validatePassword(value),
        },
        {
          name: "repeat_password",
          label: "Повторить пароль",
          type: "password",
          validate: (value: string) => validatePassword(value),
        },
      ],
      buttons: [
        {
          label: "Зарегистрироваться",
          сlass: styles["button-submit"],
          onClick: (event: MouseEvent) => {
            event.preventDefault();
            const formData = getFormData(this.props.inputs, this.refs);
            console.log("formData", formData);
          },
        },
      ],
    });
  }

  protected render() {
    return tmpl;
  }
}
