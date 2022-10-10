// import { setLocale } from "yup";
import * as yup from "yup";
import { AnyObject, Maybe } from "yup/lib/types";

const translation = {
  mixed: {
    default: "${path} é inválido",
    required: "${path} é um campo obrigatório",
    oneOf: "${path} deve ser um dos seguintes valores: ${values}",
    notOneOf: "${path} não pode ser um dos seguintes valores: ${values}",
    defined: "${path} não deve ser indefinido",
    notType: "${path} deve corresponder ao formato esperado",
    // notType: "${path} deve ser do tipo ${type}",
  },
  string: {
    length: "${path} deve ter exatamente ${length} caracteres",
    min: "${path} deve ter pelo menos ${min} caracteres",
    max: "${path} deve ter no máximo ${max} caracteres",
    matches: "${path} campo deve corresponder ao formato esperado",
    email: "${path} deve ter um formato de e-mail válido",
    url: "${path} deve ter um formato de URL válida",
    trim: "${path} não deve conter espaços no início ou no fim.",
    lowercase: "${path} deve estar em letras maiúsculas",
    uppercase: "${path} deve estar em letras minúsculas",
  },
  number: {
    min: "${path} deve ser maior ou igual a ${min}",
    max: "${path} deve ser menor ou igual a ${max}",
    lessThan: "${path} deve ser menor que ${less}",
    moreThan: "${path} deve ser maior que ${more}",
    notEqual: "${path} não pode ser igual à ${notEqual}",
    positive: "${path} deve ser um número positivo",
    negative: "${path} deve ser um número negativo",
    integer: "${path} deve ser um número inteiro",
  },
  date: {
    min: "${path} deve ser posterior a ${min}",
    max: "${path} deve ser anterior a data ${max}",
  },
  object: {
    noUnknown: "${path} tem chaves desconhecidas: ${unknown}",
  },
  array: {
    min: "${path} deve ter no mínimo ${min} itens",
    max: "${path} deve ter no máximo ${max} itens",
  },
};

yup.setLocale(translation);

yup.addMethod<yup.StringSchema>(yup.string, "emptyAsUndefined", function () {
  return this.transform((value) => (value ? value : undefined));
});

yup.addMethod<yup.NumberSchema>(yup.number, "emptyAsUndefined", function () {
  return this.transform((value, originalValue) =>
    String(originalValue)?.trim() ? value : undefined
  );
});

declare module "yup" {
  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends yup.BaseSchema<TType, TContext, TOut> {
    emptyAsUndefined(): StringSchema<TType, TContext>;
  }

  interface NumberSchema<
    TType extends Maybe<number> = number | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends yup.BaseSchema<TType, TContext, TOut> {
    emptyAsUndefined(): NumberSchema<TType, TContext>;
  }
}

export default yup;
