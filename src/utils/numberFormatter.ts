/**
 * Formats a number to two decimal places.
 * 
 * @param value - The number to format.
 * @returns A string representation of the number with two decimal places.
 */
export const formatToTwoDecimalPlaces = (value: number): string => {
  return RegExp(/^-?\d+(?:\.\d{0,2})?/).exec(value.toString())?.[0] + "";
};
