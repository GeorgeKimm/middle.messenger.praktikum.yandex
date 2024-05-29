import { Block } from "@app/utils";
import styles from "./messageInput.module.scss";

interface MessageInputProps {
  onChange?: () => void;
}

export class MessageInput extends Block {
  constructor(props: MessageInputProps) {
    super({
      ...props,
      events: {
        input: props.onChange ?? (() => {}),
      },
    });
  }

  protected render(): string {
    return `
            <input
                class=${styles["input"]}
                name='message'
                placeholder='Сообщение'
            />
        `;
  }
}
