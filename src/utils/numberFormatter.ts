/**
 * Arrotonda un numero al centesimo (due cifre decimali).
 * @param value - Il numero da arrotondare.
 * @returns Il numero arrotondato come stringa con due cifre decimali.
 */
export const formatToTwoDecimalPlaces = (value: number): string => {
  const val = value.toFixed(2);
  if (val === "0.00") {
    return value.toFixed(3);
  }

  return value.toFixed(2);
};
