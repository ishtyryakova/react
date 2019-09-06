const LOGIN_ERROR_TEXT = 'Имя пользователя или пароль введены неверно';
const USER_DATA = {
  email: 'Admin',
  password: '123456'
};
const LOGIN_FORM_FIELDS_CONFIG = {
  email: {
    type: 'email',
    name: 'email',
    label: 'Email'
  },
  password: {
    type: 'password',
    name: 'password',
    label: 'Пароль'
  }
};

export {LOGIN_ERROR_TEXT, USER_DATA, LOGIN_FORM_FIELDS_CONFIG};