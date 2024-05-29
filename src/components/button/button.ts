import { Block } from "@app/utils";

interface ButtonProps {
  сlass: string;
  label: string;
  onClick: () => void;
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super(props);
    this.props.events = {
      click: this.props.onClick || (() => {}),
    };
  }

  protected render() {
    const { сlass, label } = this.props;
    console.log("сlass", сlass);

    return `
        <button class="button ${сlass}">
            ${label}
        </button>
    `;
  }
}
