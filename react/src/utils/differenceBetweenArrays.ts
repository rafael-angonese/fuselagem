const differenceBetweenArrays = <Left, Right>(
  left: Array<Left>,
  right: Array<Right>,
  compareFunction: (left: Left, right: Right) => boolean
): Array<Left> => {
  return left.filter(
    (leftValue) =>
      !right.some((rightValue) => compareFunction(leftValue, rightValue))
  );
};

export default differenceBetweenArrays;
