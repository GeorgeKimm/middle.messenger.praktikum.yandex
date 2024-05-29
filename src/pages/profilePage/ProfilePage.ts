import { Block, setUrl } from "@app/utils";
import { tmpl } from "./profilePage.tpl.ts";
import styles from "./profilePage.module.scss";

export class ProfilePage extends Block {
  constructor() {
    super({
      userName: "Пользователь",
      inputs: [
        {
          name: "email",
          label: "Почта",
          type: "email",
          value: "test1",
          disabled: true
        },
        {
          name: "login",
          label: "Логин",
          type: "text",
          value: "test2",
          disabled: true
        },
        {
          name: "first_name",
          label: "Имя",
          type: "text",
          value: "test3",
          disabled: true
        },
        {
          name: "second_name",
          label: "Фамилия",
          type: "text",
          value: "test4",
          disabled: true
        },
        {
          name: "display_name",
          label: "Имя в чате",
          type: "text",
          value: "test5",
          disabled: true
        },
        {
          name: "phone",
          label: "Телефон",
          type: "tel",
          value: "test6",
          disabled: true
        }
      ],
      buttons: [
        {
          label: "Изменить данные",
          сlass: `${styles["button"]} ${styles["text-blue"]}`,
          onClick: (event: MouseEvent) => {
            setUrl(event, "/profile/edit-data");
          }
        },
        {
          label: "Изменить пароль",
          сlass: `${styles["button"]} ${styles["text-blue"]}`,
          onClick: (event: MouseEvent) => {
            setUrl(event, "/profile/edit-password");
          }
        },
        {
          label: "Выйти",
          сlass: `${styles["button"]} ${styles["text-red"]}`,
          onClick: (event: MouseEvent) => {
            setUrl(event, "/");
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
