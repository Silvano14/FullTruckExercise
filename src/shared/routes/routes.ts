export enum Routes {
  homepage = "/",
  data = "/data",
  graphs = "/graphs",
  kpis = "/kpis",
  scalars = "/scalars",
}

/**
 * Retrieves an array of string values from the Routes object.
 * @returns An array of string values from the Routes object.
 */
export const getValuesRoutes = (): string[] => {
  return Object.values(Routes);
};
