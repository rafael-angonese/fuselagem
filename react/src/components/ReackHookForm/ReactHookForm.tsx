import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import yup from "../../lib/yup";
import InputText from "../Forms/InputText/InputeText";

interface IFormInputs {
  name: string;
  email: string;
  age: number;
}

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  age: 0,
};

const FORM_VALIDATION = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

const Lala: React.FC = () => {
  return (
    <>
      <svg
        onClick={() => console.log("xorou ne")}
        aria-hidden="true"
        className="w-5 h-5 text-gray-500 dark:text-gray-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
      </svg>
    </>
  );
};

const ReactHookForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    mode: "onChange",
    defaultValues: INITIAL_FORM_STATE,
    resolver: yupResolver(FORM_VALIDATION),
  });
  const onSubmit = (data: IFormInputs) => console.log(data);

  console.log(errors);

  return (
    <>
      <h1>Reack Hook Form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} />
        <p>{errors.name?.message}</p>

        <input {...register("age")} />
        <p>{errors.age?.message}</p>

        <div>
          <InputText
            {...register("email")}
            label="E-mail"
            isInvalid={!!errors.email}
            placeholder="fuselagem@example.com"
            helperText={errors.email?.message}
            leftIcon={Lala}
            rightIcon={Lala}
            isClearable
            required
          />
        </div>

        <input type="submit" />
      </form>
    </>
  );
};

export default ReactHookForm;
