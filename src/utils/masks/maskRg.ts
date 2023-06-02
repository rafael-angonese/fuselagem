/* Examples
  maskRg(999999999)    => 99.999.999-9
*/
import isPresent from "../isPresent";

const maskRg = (value: string): string => {
  let masked = value;

  if (isPresent(masked)) {
    masked = masked.toString();
    masked = masked
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1-$2")
      .replace(/(\d{4})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{1})\d+?$/, "$1");
  }

  return masked;
};

export default maskRg;
