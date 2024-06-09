import { Block, setUrl, getFormData, validateCheck } from "@app/utils";
import { tmpl } from "../profilePage/profilePage.tpl";
import styles from "./EditProfilePage.module.scss";

const { validateName, validateLogin, validateEmail, validatePhone } =
  validateCheck;

export class EditProfilePage extends Block {
  constructor() {
    super({
      userName: "Пользователь",
      inputs: [
        {
          name: "email",
          label: "Почта",
          type: "email",
          validate: (value: string) => validateEmail(value)
        },
        {
          name: "login",
          label: "Логин",
          type: "text",
          validate: (value: string) => validateLogin(value)
        },
        {
          name: "first_name",
          label: "Имя",
          type: "text",
          validate: (value: string) => validateName(value)
        },
        {
          name: "second_name",
          label: "Фамилия",
          type: "text",
          validate: (value: string) => validateName(value)
        },
        {
          name: "display_name",
          label: "Имя в чате",
          type: "text",
          validate: (value: string) => validateName(value)
        },
        {
          name: "phone",
          label: "Телефон",
          type: "tel",
          validate: (value: string) => validatePhone(value)
        }
      ],
      buttons: [
        {
          label: "Сохранить",
          сlass: styles["button-submit"],
          onClick: (event: MouseEvent) => {
            event.preventDefault();
            const formData = getFormData(this.props.inputs, this.refs);
            console.log("formData", formData);
          }
        }
      ],
      backClick: (event: MouseEvent) => {
        setUrl(event, "/");
      }
    });
  }

  protected render(): string {
    return tmpl;
  }
}
