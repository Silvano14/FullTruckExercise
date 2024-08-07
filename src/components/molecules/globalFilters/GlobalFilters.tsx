import { Button, DateRangePicker, DateValue } from "@nextui-org/react";
import { GlobalFiltersContext } from "contexts/context";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

export type GlobalFiltersType = {
  startDate: DateValue | null;
  endDate: DateValue | null;
};

interface FiltersProps {
  onFilterChange: (filters: GlobalFiltersType) => void;
}

const GlobalFilters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const { filters, setFilters } = useContext(GlobalFiltersContext);
  const { t } = useTranslation();
  const handleApplyFilters = (): void => {
    onFilterChange({
      startDate: filters?.startDate ?? null,
      endDate: filters?.endDate ?? null,
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <DateRangePicker
        label={t("selectDuration")}
        className="max-w-xs"
        onChange={(e) => {
          setFilters({ startDate: e.start, endDate: e.end });
        }}
        value={{
          // @ts-expect-error ignore the DateValue required
          start: filters?.startDate,
          // @ts-expect-error ignore the DateValue required
          end: filters?.endDate,
        }}
      />
      <div className="flex gap-3 justify-between">
        <Button onClick={handleApplyFilters}>{t("applyFilters")}</Button>
        <Button
          color="danger"
          onClick={() => {
            setFilters(null);
          }}
        >
          {t("reset")}
        </Button>
      </div>
    </div>
  );
};

export default GlobalFilters;
