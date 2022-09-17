import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
            required
          />
        </div>

        <input type="submit" />
      </form>
    </>
  );
};

export default ReactHookForm;
