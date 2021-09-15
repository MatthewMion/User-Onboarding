import * as yup from "yup";

const formSchema = yup.object().shape({
  first_name: yup
    .string()
    .required("First Name is required!")
    .min(3, "First Name must be 3 characters long!"),
  last_name: yup
    .string()
    .required("Last Name is required!")
    .min(3, "Last name must be 3 characters long!"),
  email: yup
    .string()
    .email("Must be a valid email address!")
    .required("Email is required!"),
  password: yup.string().trim().min(8, "Password  must be 8 characters long!"),

  termsOfService: yup.boolean(),
});

export default formSchema;
