import { Props } from "hook/useStatistics";
import { DataModelBase } from "models/DataType";

const payload = {
  aggregateBy: "day" as const,
  timeTarget: "pickup_date" as const,
  startDate: "",
  endDate: "",
};

export const getData = (
  fetchStatistics: (payload: Props) => Promise<DataModelBase>
): Promise<object> => fetchStatistics(payload);
