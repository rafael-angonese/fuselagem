// import { setLocale } from "yup";
import * as yup from "yup";

const translation = {
  mixed: {
    default: "é inválido",
    required: "é um campo obrigatório",
    oneOf: "deve ser um dos seguintes valores: ${values}",
    notOneOf: "não pode ser um dos seguintes valores: ${values}",
    defined: "não deve ser indefinido",
    notType: "deve corresponder ao formato esperado",
    // notType: "deve ser do tipo ${type}",
  },
  string: {
    length: "deve ter exatamente ${length} caracteres",
    min: "deve ter pelo menos ${min} caracteres",
    max: "deve ter no máximo ${max} caracteres",
    matches: "campo deve corresponder ao formato esperado",
    email: "deve ter um formato de e-mail válido",
    url: "deve ter um formato de URL válida",
    trim: "não deve conter espaços no início ou no fim.",
    lowercase: "deve estar em letras maiúsculas",
    uppercase: "deve estar em letras minúsculas",
  },
  number: {
    min: "deve ser maior ou igual a ${min}",
    max: "deve ser menor ou igual a ${max}",
    lessThan: "deve ser menor que ${less}",
    moreThan: "deve ser maior que ${more}",
    notEqual: "não pode ser igual à ${notEqual}",
    positive: "deve ser um número positivo",
    negative: "deve ser um número negativo",
    integer: "deve ser um número inteiro",
  },
  date: {
    min: "deve ser posterior a ${min}",
    max: "deve ser anterior a data ${max}",
  },
  object: {
    noUnknown: "tem chaves desconhecidas: ${unknown}",
  },
  array: {
    min: "deve ter no mínimo ${min} itens",
    max: "deve ter no máximo ${max} itens",
  },
};

yup.setLocale(translation);

export default yup;
