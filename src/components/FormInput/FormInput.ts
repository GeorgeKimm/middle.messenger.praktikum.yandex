import { Block } from "@app/utils";
import styles from "./formInput.module.scss";

interface FormInputProps {
  name: string;
  label: string;
  type: string;
  value?: string;
  disabled?: boolean;
  validate?: () => void;
}

export class FormInput extends Block {
  constructor(props: FormInputProps) {
    super({
      ...props,
      onBlur: () => this.validate(),
    });
  }

  public value() {
    if (!this.validate()) {
      return false;
    }
    return (this?.refs?.input?.element as HTMLInputElement)?.value;
  }

  private validate() {
    const value = (this?.refs?.input?.element as HTMLInputElement)?.value;
    const error = this.props.validate?.(value);

    this.refs.errorLine.setProps({ error: error ?? undefined });
    return !error;
  }

  protected render() {
    return `
            <div>
              <label for=name class=${styles["label"]}>{{label}}</label>
                {{{ Input
                    name=name
                    value=value
                    ref="input"
                    onBlur=onBlur
                    disabled=disabled
                    type=type
                }}}
                {{{ ValidationInput error=error ref="errorLine"}}}
            </div>
        `;
  }
}
