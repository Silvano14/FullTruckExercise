import dayjs from "dayjs";
import { DataModelBase } from "models/data/DataType";
import { useRef } from "react";
import { applyDateRangeFilter } from "utils/filters/filterByDates";
import json1 from "./json1.json";
import json2 from "./json2.json";

export type Filters = {
  aggregateBy: "day" | "week" | "month";
  timeTarget: "pickup_date" | "created_at";
  startDate: string | null;
  endDate: string | null;
};

/**
 * Applies filters and aggregation to the data.
 * @param data - The original data model.
 * @param filters - The filters to apply.
 * @returns The filtered and aggregated data.
 */
const applyFilters = (
  data: DataModelBase,
  filters: Filters | null
): DataModelBase => {
  if (filters) {
    return applyDateRangeFilter(data, filters.startDate, filters.endDate);
  }
  return data;
};

const useStatistics = (): {
  fetchStatistics: (obj: Filters | null) => Promise<DataModelBase>;
} => {
  const toggleRef = useRef(false);

  const fetchStatistics = (filters: Filters | null): Promise<DataModelBase> => {
    toggleRef.current = !toggleRef.current;
    return new Promise((resolve) => {
      const delay = Math.random() * 3000 + 500;
      setTimeout(() => {
        const data = toggleRef.current ? json1 : json2;
        let filteredData = data;
        if (filters !== null) {
          // @ts-expect-error ignore index_by
          filteredData = applyFilters(data, filters);
        }
        resolve(filteredData);
      }, delay);
    });
  };

  return { fetchStatistics };
};

export default useStatistics;
