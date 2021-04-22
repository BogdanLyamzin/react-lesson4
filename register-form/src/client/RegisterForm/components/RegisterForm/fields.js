export const fields = {
  username: {
    label: "Ваш никнейм",
    type: "text",
    placeholder: "Введите текст",
    name: "username",
    required: true,
  },
  email: {
    label: "Ваш email",
    type: "email",
    placeholder: "Введите email",
    name: "email",
    required: true,
  },
  password: {
    label: "Ваш пароль",
    type: "password",
    placeholder: "Введите пароль",
    name: "password",
    required: true,
  },
  repeatPassword: {
    label: "Ваш пароль повторно",
    type: "password",
    placeholder: "Повторите пароль",
    name: "repeatPassword",
    required: true,
  },
  agreeToTerms: {
    label: "Согласен с условиями",
    type: "checkbox",
    name: "agreeToTerms",
    value: false,
    checked: false,
    required: true,
  },
  country: {
    label: "Выберите страну",
    name: "country",
    options: [
      {
        value: "Ukraine",
        text: "Украина",
      },
      {
        value: "Kyrgyzstan",
        text: "Киргизия",
      },
    ],
  },
  submit: {
    type: "submit",
    value: "Регистрация",
  },
};
