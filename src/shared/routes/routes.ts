export enum Routes {
  homepage = "/",
  data = "/data",
  graphs = "/graphs",
  kpis = "/kpis",
  scalars = "/scalars",
}

export const getValuesRoutes = (): string[] => {
  return Object.values(Routes);
};
