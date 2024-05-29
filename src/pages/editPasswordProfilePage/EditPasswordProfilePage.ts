import { Block, setUrl, getFormData, validateCheck } from "@app/utils";
import { tmpl } from "../profilePage/profilePage.tpl";
import styles from "../editProfilePage/EditProfilePage.module.scss";

const { validatePassword } = validateCheck;

export class EditPasswordProfilePage extends Block {
  constructor() {
    super({
      edit: true,
      userName: "Пользователь",
      inputs: [
        {
          name: "oldPassword",
          label: "Старый пароль",
          type: "password",
          validate: (value: string) => validatePassword(value)
        },
        {
          name: "newPassword",
          label: "Новый пароль",
          type: "password",
          validate: (value: string) => validatePassword(value)
        },
        {
          name: "repeat_password",
          label: "Повторить пароль",
          type: "password",
          validate: (value: string) => validatePassword(value)
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
