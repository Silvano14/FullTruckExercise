export type ParamsLabelFormatter = {
  componentType: "series";
  // Series type
  seriesType: string;
  // Series index in option.series
  seriesIndex: number;
  // Series name
  seriesName: string;
  // Data name, or category name
  name: string;
  // Data index in input data array
  dataIndex: number;
  // Original data as input
  data: object;
  // Value of data. In most series it is the same as data.
  // But in some series it is some part of the data (e.g., in map, radar)
  value: number | [] | object;
  // encoding info of coordinate system
  // Key: coord, like ('x' 'y' 'radius' 'angle')
  // value: Must be an [], not null/undefined. Contain dimension indices, like:
  // {
  //     x: [2] // values on dimension index 2 are mapped to x axis.
  //     y: [0] // values on dimension index 0 are mapped to y axis.
  // }
  encode: object;
  // dimension names list
  dimensionNames: string[];
  // data dimension index, for example 0 or 1 or 2 ...
  // Only work in `radar` series.
  dimensionIndex: number;
  // Color of data
  color: string;
};
