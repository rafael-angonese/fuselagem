import isPresent from '../isPresent';


const maskPlate = (value: string): string => {
  let plate = value;

  if (isPresent(plate)) {
    plate = plate.toString();
    plate = plate.toUpperCase();
    plate = plate.replace(/[^A-Z-0-9]/g, "");

    if (plate.length <= 3) {
      plate = plate.replace(/\d/g, "")
    }

    if (plate.length === 4) {
      plate = plate.replace(/(\D{3})(\D+)/g, "$1")
    }

    if (plate.length === 5) {
      plate = plate.replace(/(\D{3})(\d{1})(\w{1})(\w+)/g, "$1$2$3")
    }

    plate = plate.replace(/(\D{3}\d{1}\w{1})(\D)/g, "$1")
    plate = plate.replace(/(\D{3}\d{1}\w{1}\d{2})(\w)/g, "$1")
  }

  return plate;
};

export default maskPlate;
