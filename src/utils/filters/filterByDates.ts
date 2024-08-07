import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { DataModelBase } from "models/data/DataType";
import { convertDateToISO } from "utils/dateFormatter";

dayjs.extend(isBetween);

/**
 * Filters the data based on the provided date range and time target.
 * @param data - The data model containing data_table.
 * @param startDate - The start date of the filter range.
 * @param endDate - The end date of the filter range.
 * @param timeTarget - The target field for filtering ("pickup_date" or "created_at").
 * @returns Filtered data.
 */
export const applyDateRangeFilter = (
  data: DataModelBase,
  startDate: string | null,
  endDate: string | null
): DataModelBase => {
  if (!startDate || !endDate) return data;

  const start = dayjs(startDate);
  const end = dayjs(endDate);

  const filteredData = {
    ...data,
    data_table: data.data_table.filter((entry) => {
      return dayjs(entry.aggregate_date).isBetween(start, end, null, "[]");
    }),
    histograms: {
      ...data.histograms,
      time_order_count: {
        ...data.histograms.time_order_count,
        data: data.histograms.time_order_count.data.filter((entry) => {
          return dayjs(convertDateToISO(entry.date)).isBetween(
            start,
            end,
            null,
            "[]"
          );
        }),
      },
      time_revenue: {
        ...data.histograms.time_revenue,
        data: data.histograms.time_revenue.data.filter((entry) => {
          return dayjs(convertDateToISO(entry.date)).isBetween(
            start,
            end,
            null,
            "[]"
          );
        }),
      },
      time_margin_perc: {
        ...data.histograms.time_margin_perc,
        data: data.histograms.time_margin_perc.data.filter((entry) => {
          return dayjs(convertDateToISO(entry.date)).isBetween(
            start,
            end,
            null,
            "[]"
          );
        }),
      },
    },
  };

  return filteredData;
};
