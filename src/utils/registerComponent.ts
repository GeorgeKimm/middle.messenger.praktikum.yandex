import Handlebars, { type HelperOptions } from "handlebars";
import { Block } from "./Block";

export const registerComponent = (name: string, Component: typeof Block) => {
  if (name in Handlebars.helpers) {
    throw `Компонент "${name}" уже существует!`;
  }

  Handlebars.registerHelper(
    name,
    function (this: unknown, { hash, data, fn }: HelperOptions) {
      const component = new Component(hash);
      const attribute = `data-id="${component.id}"`;

      if ("ref" in hash) {
        (data.root.__refs = data.root.__refs || {})[hash.ref] = component;
      }

      (data.root.__children = data.root.__children || []).push({
        component,
        embed(fragment: DocumentFragment) {
          const stub = fragment.querySelector(`[${attribute}]`);

          if (!stub) {
            return;
          }

          component.getContent()?.append(...Array.from(stub.childNodes));

          stub.replaceWith(component.getContent()!);
        },
      });

      const contents = fn ? fn(this) : "";

      return `<div ${attribute}>${contents}</div>`;
    }
  );
};
