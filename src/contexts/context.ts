import initialData from "components/initialDatas/initialData";
import { DataModelBase } from "models/DataType";
import { createContext, Dispatch, SetStateAction } from "react";

type DataContextType = {
  data: DataModelBase;
  setData: Dispatch<SetStateAction<DataModelBase>>;
  isFetched: boolean;
  setIsFetched: Dispatch<SetStateAction<boolean>>;
};

export const DataContext = createContext<DataContextType>({
  data: initialData,
  setData: () => {},
  isFetched: false,
  setIsFetched: () => {},
});
