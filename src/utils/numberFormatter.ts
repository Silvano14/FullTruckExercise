/**
 * Arrotonda un numero al centesimo (due cifre decimali).
 * @param value - Il numero da arrotondare.
 * @returns Il numero arrotondato come stringa con due cifre decimali.
 */
export const formatToTwoDecimalPlaces = (value: number): string => {
  return value.toFixed(2);
};
