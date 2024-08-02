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
