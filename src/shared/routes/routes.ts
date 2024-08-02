export enum Routes {
  homepage = "/",
  data = "/data",
  graphs = "/graphs",
  kpis = "/kpis",
}

export const getValuesRoutes = (): string[] => {
  return Object.values(Routes);
};
