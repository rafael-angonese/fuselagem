import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import Button from "../../../components/Button/Button";
import Checkbox from "../../../components/Checkbox/Checkbox";
import FormControl from "../../../components/Forms/FormControl/FormControl";
import FormErrorMessage from "../../../components/Forms/FormErrorMessage/FormErrorMessage";
import FormLabel from "../../../components/Forms/FormLabel/FormLabel";
import InputText from "../../../components/Forms/InputText/InputeText";
import Radio from "../../../components/Radio/Radio";
import RadioGroup from "../../../components/RadioGroup/RadioGroup";
import Switch from "../../../components/Switch/Switch";
import yup from "../../../lib/yup";

interface IFormInputs {
  name: string;
  email: string;
  starter: string;
  airplane: boolean;
}

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  starter: "bulbasaur",
  airplane: false,
};

const FORM_VALIDATION = yup
  .object({
    // name: yup.string().required(),
    email: yup.string().email().required(),
    starter: yup.string().required(),
    airplane: yup.boolean().required().oneOf([true]),
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
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    mode: "onChange",
    defaultValues: INITIAL_FORM_STATE,
    resolver: yupResolver(FORM_VALIDATION),
  });
  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <>
      <h1>Reack Hook Form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-4">
          <FormLabel>Nome</FormLabel>
          <InputText
            {...register("name")}
            placeholder="fulaninho"
            isClearable
          />
        </div>

        <div className="my-4">
          <FormControl isInvalid={!!errors.email}>
            <FormLabel>E-mail</FormLabel>
            <InputText
              {...register("email")}
              placeholder="fuselagem@example.com"
              leftIcon={<Lala />}
              rightIcon={<Lala />}
              isClearable
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
        </div>

        <div className="my-4">
          Checkbox
          <FormControl isInvalid={!!errors.email}>
            <Checkbox>Aceitas?</Checkbox>
          </FormControl>
        </div>

        <div className="my-4">
          <FormControl
            className="flex items-center"
            isInvalid={!!errors.airplane}
          >
            <FormLabel>Modo viaom</FormLabel>
            <Controller
              control={control}
              name="airplane"
              render={({ field }) => (
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              )}
            />
            <FormErrorMessage>{errors.airplane?.message}</FormErrorMessage>
          </FormControl>
        </div>

        <FormControl className="my-4">
          <FormLabel>Choose your starter</FormLabel>

          <Controller
            control={control}
            name="starter"
            render={({ field }) => (
              <RadioGroup
                value={field.value}
                onValueChange={field.onChange}
                className="space-y-2"
              >
                <Radio value="bulbasaur">Bulbasaur</Radio>
                <Radio value="charmader">Charmader</Radio>
                <Radio value="squirtle">Squirtle</Radio>
              </RadioGroup>
            )}
          />
        </FormControl>

        <Button>Submit</Button>
      </form>
    </>
  );
};

export default ReactHookForm;
