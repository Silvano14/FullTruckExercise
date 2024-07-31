const monthNames: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/**
 * Formatta una data ISO stringa in un formato leggibile.
 * @param dateStr La data in formato ISO stringa.
 * @returns La data formattata come stringa.
 */
export const formatDate = (dateStr: string): string => {
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

  return `${day.toString().padStart(2, "0")} ${month} ${year}`;
};
