import { DataModelBase } from "models/data/DataType";
import { convertDateToISO } from "utils/dateFormatter";
import { applyDateRangeFilter } from "./filterByDates";
import { describe, it, expect } from "vitest";
import json1 from "../../hook/json1.json";

describe("applyDateRangeFilter", () => {
  const mockData: DataModelBase = json1;

  it("should return the same data if startDate or endDate is null", () => {
    const result = applyDateRangeFilter(mockData, null, "2024-02-28");
    expect(result).toEqual(mockData);

    const result2 = applyDateRangeFilter(mockData, "2024-02-27", null);
    expect(result2).toEqual(mockData);
  });

  it("should convert date correctly using convertDateToISO", () => {
    const date = "27-02-2024";
    const isoDate = convertDateToISO(date);
    expect(isoDate).toBe("2024-02-27T00:00:00");
  });
});
