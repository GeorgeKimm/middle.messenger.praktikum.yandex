import { Block, setUrl } from "@app/utils";
import { tmpl } from "./chatsPage.tpl.ts";
import styles from "./chatsPage.module.scss";

export class ChatsPage extends Block {
  constructor() {
    const chats = [
      {
        id: "2",
        chatName: "Федя",
        lastMessage: "ура",
        dateLastMessage: "24.05.2024",
        unreadMessages: 0,
        messages: [
          {
            message: "test",
            time: "09:00",
            userCurrent: true,
          },
          {
            message: "test",
            time: "09:01",
            userCurrent: false,
          },
          {
            message: "test",
            time: "09:02",
            userCurrent: true,
          },
        ],
      },
      {
        id: "3",
        chatName: "Вова",
        lastMessage: "супер",
        dateLastMessage: "24.05.2024",
        unreadMessages: 28,
        messages: [
          {
            message: "hello",
            time: "09:00",
            userCurrent: true,
          },
          {
            message: "hello",
            time: "09:01",
            userCurrent: false,
          },
          {
            message: "hello",
            time: "09:02",
            userCurrent: true,
          },
        ],
      },
    ];

    const chatsWithClick = chats.map((item) => {
      return {
        ...item,
        onClick: () => {
          this.setProps({
            ...this.props,
            id: item.id,
            chatName: item.chatName,
            messages: item.messages,
          });
        },
      };
    });

    super({
      id: "",
      messages: [],
      chats: chatsWithClick,
      chatName: "",
      buttons: [
        {
          label: "Профиль >",
          class: `${styles["button"]}`,
          onClick: (event: MouseEvent) => {
            setUrl(event, "/profile");
          },
        },
      ],
    });
  }

  protected render() {
    return tmpl;
  }
}
