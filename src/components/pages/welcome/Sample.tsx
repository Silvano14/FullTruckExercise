import useStatistics from "hook/useStatistics";
import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const MyComponent: FC = () => {
  const { t } = useTranslation();
  const { fetchStatistics } = useStatistics();

  useEffect(() => {
    fetchStatistics({
      aggregateBy: "day",
      timeTarget: "pickup_date",
      startDate: "",
      endDate: "",
    }).then((res: unknown) => console.log(res));
  }, [fetchStatistics]);

  return <h1>{t("Welcome to React")}</h1>;
};
