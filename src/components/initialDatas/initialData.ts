export default {
  data_table: [
    {
      active_carrier: 8,
      active_client: 8,
      aggregate_date: "2024-03-07T00:00:00",
      assigned_count: 10,
      margin_abs: 870,
      margin_abs_per_order: 87,
      margin_perc: 0.08223062381852551,
      new_carriers: 0,
      new_clients: 0,
      order_count: 13,
      order_per_period: 13,
      revenue: 13170,
      revenue_assigned: 10580,
      revenue_per_order: 1013.0769230769231,
    },
  ],
  histograms: {
    time_margin_perc: {
      data: [
        {
          date: "26-02-2024",
          margin_perc: 0.07988725730863647,
        },
      ],
      index_by: "date",
    },
    time_order_count: {
      data: [
        {
          date: "26-02-2024",
          order_count: 26,
        },
      ],
      index_by: "date",
    },
    time_revenue: {
      data: [
        {
          date: "26-02-2024",
          margin_abs: 1790,
          revenue: 22405,
        },
      ],
      index_by: "date",
    },
  },
  kpis: {
    carrier: {
      "02eec527-9ae2-4436-8f2f-41dab80e3dd5": {
        label: "ph5jOCdDK3",
        margin_abs: 240,
        margin_abs_per_order: 80,
        margin_abs_perc_on_tot: 0.016421484775915155,
        margin_perc: 0.14906832298136646,
        order_count: 3,
        order_count_perc_on_tot: 0.01327433628318584,
        revenue: 1610,
        revenue_per_order: 536.6666666666666,
        revenue_perc_on_tot: 0.009069145190818195,
      },
    },
    client: {
      "1596db18-3c2b-4a21-b4c4-318b0202a39f": {
        label: "feIuDzg17x",
        margin_abs: 190,
        margin_abs_per_order: 47.5,
        margin_abs_perc_on_tot: 0.013000342114266164,
        margin_perc: 0.09004739336492891,
        order_count: 4,
        order_count_perc_on_tot: 0.017699115044247787,
        revenue: 2110,
        revenue_per_order: 527.5,
        revenue_perc_on_tot: 0.011885649908463596,
      },
    },
  },
  scalars: {
    active_carriers: 96,
    active_clients: 36,
    average_margin_perc: 0.08805277744306543,
    avg_order_margin_abs: 68.93867924528301,
    avg_order_revenue: 785.5088495575221,
    new_carriers: 21,
    new_clients: 5,
    total_assigned_count: 210,
    total_margin_abs: 14615,
    total_order_count: 226,
    total_revenue: 177525,
  },
};
