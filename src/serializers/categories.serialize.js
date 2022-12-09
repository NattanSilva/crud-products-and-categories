import * as yup from "yup";

const bodyValidate = yup.object().shape({
  name: yup.string().max(200).required(),
});

const returnedBody = yup.object().shape({
  id: yup.string(),
  name: yup.string().max(200),
});

const categoryIdValidate = yup.object().shape({
  id: yup.number().required(),
});

export { bodyValidate, returnedBody, categoryIdValidate };
