import { Block, validateCheck } from "@app/utils";
import styles from "./chatSend.module.scss";

export class ChatSend extends Block {
  constructor() {
    super({
      onChange: () => {
        const value = (this?.refs?.messageInput?.element as HTMLInputElement)
          ?.value;
        this.refs.buttonSendMessage.setProps({
          ...this.refs.buttonSendMessage.props,
          disabled: !value
        });
      },
      onClick: (event: MouseEvent) => {
        event.preventDefault();

        const value = (this?.refs?.messageInput?.element as HTMLInputElement)
          ?.value;

        const validate = validateCheck.validateMessage(value as string);
        const message = { message: value };

        console.log("validate", validate);
        console.log("message", message);
      }
    });
  }

  protected render(): string {
    return `
      <div class=${styles["search-container"]}>
        {{{ Button label='+' onClick=onClick }}}
        {{{ MessageInput ref='messageInput' onChange=onChange }}}
        {{{ ButtonSendMessage ref='buttonSendMessage' onClick=onClick }}}
      </div>
    `;
  }
}
