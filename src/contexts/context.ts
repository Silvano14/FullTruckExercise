import { GlobalFiltersType } from "@molecules/globalFilters/GlobalFilters";
import initialData from "components/initialDatas/initialData";
import { DataModelBase } from "models/data/DataType";
import { createContext, Dispatch, SetStateAction } from "react";

type DataContextType = {
  data: DataModelBase;
  setData: Dispatch<SetStateAction<DataModelBase>>;
  isFetched: boolean;
  setIsFetched: Dispatch<SetStateAction<boolean>>;
};

type FiltersContextType = {
  filters: GlobalFiltersType | null;
  setFilters: Dispatch<SetStateAction<GlobalFiltersType | null>>;
};

export const DataContext = createContext<DataContextType>({
  data: initialData,
  setData: () => {},
  isFetched: false,
  setIsFetched: () => {},
});

export const GlobalFiltersContext = createContext<FiltersContextType>({
  filters: null,
  setFilters: () => {},
});
