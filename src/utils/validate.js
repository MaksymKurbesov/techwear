const validateFirstName = (value) => {
  let error;
  if (!value) {
    error = "Обязательное поле";
  } else if (value.length < 3 || value.length > 15) {
    error = "Длина имени 3-15 символов";
  }
  return error;
};

const validateLastName = (value) => {
  let error;
  if (!value) {
    error = "Обязательное поле";
  } else if (value.length < 3 || value.length > 15) {
    error = "Длина фамилии 3-15 символов";
  }
  return error;
};

const validateEmail = (value) => {
  let error;
  if (!value) {
    error = "Обязательное поле";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Неправильный формат почтового ящика";
  }
  return error;
};

const validatePhoneNumber = (value) => {
  let error;
  if (!value) {
    error = "Обязательное поле";
  } else if (!/^\+[0-9]{3}\d{3}\d{2}\d{2}/i.test(value)) {
    error = "Введён неверный номер телефона";
  }
  return error;
};

export {
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePhoneNumber,
};
