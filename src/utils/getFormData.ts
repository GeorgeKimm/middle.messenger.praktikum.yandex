import { Block } from "./Block";

export const getFormData = (data: [], refs: Record<string, Block>) => {
  const formData = data.reduce((acc: object, i: { name: string }) => {
    const name = i.name;
    const value = name && refs[name]?.value();
    return { ...acc, [name]: value };
  }, {});

  return formData;
};
