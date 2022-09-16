/* Examples
  maskUf(scsdf)    => SC
*/
import isPresent from "../isPresent";

const maskUf = (value: string): string => {
  let masked = value;

  if (isPresent(masked)) {
    masked = masked.toString();
    masked = masked
      .replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "")
      .replace(/(\D{2})\D+?$/, "$1")
      .toUpperCase();
  }

  return masked;
};

export default maskUf;
