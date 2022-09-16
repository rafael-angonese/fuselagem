/* Examples
  maskCnpj(19.665.604/0001-85)    => 19.665.604/0001-85
*/
import isPresent from "../isPresent";

const maskCnpj = (value: string): string => {
  let cnpj = value;

  if (isPresent(cnpj)) {
    cnpj = cnpj.toString();
    cnpj = cnpj
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  }

  return cnpj;
};

export default maskCnpj;
