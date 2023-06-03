/* Examples
  maskCpf(11122233344)    => 111.222.333-44
*/
import isPresent from "../isPresent";

const maskCpf = (value: string): string => {
  let masked = value;

  if (isPresent(masked)) {
    masked = masked.toString();
    masked = masked
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1-$2")
      .replace(/(\d{4})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  }

  return masked;
};

export default maskCpf;
