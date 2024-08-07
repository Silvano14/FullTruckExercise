const monthNames: string[] = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

/**
 * Formats a date string into a specific date format.
 * @param dateStr - The date string to format.
 * @param t - An optional function to transform the month name.
 * @returns The formatted date string.
 */
export const formatDate = (
  dateStr: string,
  t?: (val: string) => string
): string => {
  if (!dateStr) {
    return "-";
  }

  const date = new Date(dateStr);

  if (isNaN(date.getTime())) {
    return "-";
  }

  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  if (t) {
    return `${day.toString().padStart(2, "0")} ${t(month)} ${year}`;
  }

  return `${day.toString().padStart(2, "0")} ${month} ${year}`;
};

/**
 * Retrieves the month name from a given date string.
 *
 * @param {string} date - The date string to extract the month from.
 * @returns {string} - The name of the month corresponding to the given date.
 */
export const getMonthByDate = (date: string): string => {
  const _date = new Date(date);

  return monthNames[_date.getMonth()];
};

/**
 * Returns the day of the week for a given date string.
 *
 * @param {string} date - The date string to be parsed.
 * @returns {number} - The day of the week as a number (0 for Sunday, 1 for Monday, etc.).
 */
export const getDayByDate = (date: string): number => {
  const _date = new Date(date);

  return _date.getDay();
};

/**
 * Converts a date string in the format "dd-mm-yyyy" to ISO format "yyyy-mm-ddT00:00:00".
 * @param dateString - The date string to convert.
 * @returns The date string converted to ISO format.
 */
export const convertDateToISO = (dateString: string): string => {
  const [day, month, year] = dateString.split("-");

  const isoDate = `${year}-${month}-${day}T00:00:00`;

  return isoDate;
};
