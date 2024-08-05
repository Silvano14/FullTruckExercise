import DefaultTitle from "@atoms/text/DefaultTitle";
import { TimeMarginPercGraph } from "@organisms/graphs/TimeMarginPercGraph";
import { TimeOrderCountGraph } from "@organisms/graphs/TimeOrderCountGraph";
import { TimeRevenueGraph } from "@organisms/graphs/TimeRevenueGraph";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export const GraphsPage: FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex justify-center items-center text-4xl font-bold pb-12">
        <DefaultTitle>{t("graphsTitle")}</DefaultTitle>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-1/2">
          <TimeMarginPercGraph />
        </div>
        <div className="w-1/2">
          <TimeRevenueGraph />
        </div>
      </div>
      <TimeOrderCountGraph />
    </div>
  );
};
