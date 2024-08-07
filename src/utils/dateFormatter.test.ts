import { describe, expect, it } from "vitest";
import {
  convertDateToISO,
  formatDate,
  getDayByDate,
  getMonthByDate,
} from "./dateFormatter";

describe("dateFormatter", () => {
  describe("formatDate", () => {
    it("should return '-' for invalid date string", () => {
      expect(formatDate("invalid-date")).toBe("-");
      expect(formatDate("")).toBe("-");
    });

    it("should format the date string correctly", () => {
      expect(formatDate("2024-02-27")).toBe("27 february 2024");
    });

    it("should format the date string with transformed month name", () => {
      const transformMonth = (month: string): string => month.toUpperCase();
      expect(formatDate("2024-02-27", transformMonth)).toBe("27 FEBRUARY 2024");
    });
  });

  describe("getMonthByDate", () => {
    it("should return the correct month name", () => {
      expect(getMonthByDate("2024-02-27")).toBe("february");
      expect(getMonthByDate("2024-03-01")).toBe("march");
    });
  });

  describe("getDayByDate", () => {
    it("should return the correct day number", () => {
      expect(getDayByDate("2024-02-27")).toBe(2); // Tuesday
      expect(getDayByDate("2024-03-01")).toBe(5); // Friday
    });
  });

  describe("convertDateToISO", () => {
    it("should convert date string from DD-MM-YYYY to YYYY-MM-DDTHH:mm:ss format", () => {
      expect(convertDateToISO("27-02-2024")).toBe("2024-02-27T00:00:00");
    });

    it("should handle single digit day and month correctly", () => {
      expect(convertDateToISO("1-3-2024")).toBe("2024-3-1T00:00:00");
    });
  });
});
