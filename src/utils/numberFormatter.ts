export const formatToTwoDecimalPlaces = (value: number): string => {
  return RegExp(/^-?\d+(?:\.\d{0,2})?/).exec(value.toString())?.[0] + "";
};
