export const validateCheck = {
  validateName: (value: string) => {
    const regex = /^[A-Za-zА-ЯЁ][a-zA-ZА-ЯЁё-]*$/m;
    if (!regex.test(value)) {
      return "латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)";
    }
    return "";
  },

  validateLogin: (value: string) => {
    const regex = /^(?!-|_)(?!.*(?:-|_){2})[A-Za-z0-9_-]{3,20}$/;
    if (!regex.test(value)) {
      return "от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)";
    }
    return "";
  },

  validateEmail: (value: string) => {
    const regex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if (!regex.test(value)) {
      return "латиница, может включать цифры и спецсимволы вроде дефиса и подчёркивания, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы";
    }
    return "";
  },

  validatePassword: (value: string) => {
    // const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,40}$/;

    if (!regex.test(value)) {
      return "от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра";
    }
    return "";
  },

  validatePhone: (value: string) => {
    const regex = /^\+?\d{10,15}$/;
    if (!regex.test(value)) {
      return "от 10 до 15 символов, состоит из цифр, может начинается с плюса";
    }
    return "";
  },

  validateMessage: (value: string) => {
    const regex = /^.+$/m;
    if (!regex.test(value)) {
      return "не должно быть пустым";
    }
    return "";
  },
};
