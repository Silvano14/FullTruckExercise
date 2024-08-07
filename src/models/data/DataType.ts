export interface DataTableEntryBase {
  active_carrier: number;
  active_client: number;
  aggregate_date: string;
  assigned_count: number;
  margin_abs: number;
  margin_abs_per_order: number;
  margin_perc: number;
  new_carriers: number;
  new_clients: number;
  order_count: number;
  order_per_period: number;
  revenue: number;
  revenue_assigned: number;
  revenue_per_order: number;
}

type TimeMarginPercType = {
  data: { date: string; margin_perc: number }[];
};

type TimeOrderCountType = {
  data: { date: string; order_count: number }[];
};

type TimeRevenueType = {
  data: { date: string; revenue: number; margin_abs: number }[];
};

interface HistogramDataEntryBase {
  time_margin_perc: TimeMarginPercType;
  time_order_count: TimeOrderCountType;
  time_revenue: TimeRevenueType;
}

export interface KPIBase {
  label: string;
  margin_abs: number;
  margin_abs_per_order: number;
  margin_abs_perc_on_tot: number;
  margin_perc: number;
  order_count: number;
  order_count_perc_on_tot: number;
  revenue: number;
  revenue_per_order: number;
  revenue_perc_on_tot: number;
}

export interface KPIsBase {
  carrier: Record<string, KPIBase>;
  client: Record<string, KPIBase>;
}

interface ScalarsBase {
  active_carriers: number;
  active_clients: number;
  average_margin_perc: number;
  avg_order_margin_abs: number;
  avg_order_revenue: number;
  new_carriers: number;
  new_clients: number;
  total_assigned_count: number;
  total_margin_abs: number;
  total_order_count: number;
  total_revenue: number;
}

export interface DataModelBase {
  data_table: DataTableEntryBase[];
  histograms: HistogramDataEntryBase;
  kpis: KPIsBase;
  scalars: ScalarsBase;
}
