import { Block } from "@app/utils";
import styles from "./input.module.scss";

interface InputProps {
  onBlur?: () => void;
}

export class Input extends Block {
  constructor(props: InputProps) {
    console.log("props", props);
    super({
      ...props,
      events: {
        blur: props.onBlur ?? (() => {}),
      },
    });
  }

  protected render() {
    return `
            <input
                name="{{name}}"
                ref="input"
                class=${styles["input"]}
                type={{#if type}}{{type}}{{else}}"text"{{/if}} 
                value={{#if value}}{{value}}{{else}}""{{/if}}
                {{#if disabled}}
                disabled="{{disabled}}"
                {{/if}}
            />
        `;
  }
}
