export type ParamsLabelFormatter = {
  componentType: "series";
  seriesType: string;
  seriesIndex: number;
  seriesName: string;
  name: string;
  dataIndex: number;
  data: object;
  value: number | [] | object;
  encode: object;
  dimensionNames: string[];
  dimensionIndex: number;
  color: string;
};
