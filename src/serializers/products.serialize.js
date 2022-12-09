import * as yup from "yup";

const productBodyValidate = yup.object().shape({
  name: yup.string().max(200).required(),
  price: yup.number().positive().required(),
  category_id: yup.number(),
});

const returnedBodyValidate = yup.object().shape({
  id: yup.string().uuid(),
  name: yup.string().max(200),
  price: yup.number().positive(),
  category_id: yup.number().nullable(),
});

const productIdValidate = yup.object().shape({
  id: yup.string().uuid().required(),
});

const actualizeBodyValidate = yup.object().shape({
  name: yup.string().max(200),
  price: yup.number().positive(),
  category_id: yup.number().nullable(),
});

export {
  productBodyValidate,
  returnedBodyValidate,
  productIdValidate,
  actualizeBodyValidate,
};
