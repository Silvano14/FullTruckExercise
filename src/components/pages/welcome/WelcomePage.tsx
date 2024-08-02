import DefaultParagraph from "@atoms/text/DefaultParagraph";
import DefaultTitle from "@atoms/text/DefaultTitle";
import { Routes } from "@shared/routes/routes";

import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Link as NextLink } from "@nextui-org/react";
import { DefaultButton } from "@atoms/buttons/DefaultButton";

const WelcomePage: FC = () => {
  const { t } = useTranslation();

  return (
    // Pay attention about height of Header, if it's change you have to update this calc
    <div className="flex flex-col gap-4 h-[calc(100vh-65px)] justify-center items-center">
      <DefaultTitle className="text-6xl">{t("welcome")}</DefaultTitle>
      <DefaultParagraph className="text-2xl">
        {t("explain_scope")}
      </DefaultParagraph>
      <DefaultParagraph className="text-2xl">
        {t("explain_code")}
      </DefaultParagraph>
      <NextLink
        className="text-2xl"
        target="_blank"
        href="https://github.com/Silvano14/FullTruckExercise"
      >
        {t("here")}
      </NextLink>
      <DefaultParagraph className="text-2xl">
        {t("start_navigation")}
      </DefaultParagraph>
      <DefaultButton size="lg">
        <Link className="text-2xl" to={Routes.data}>
          {t("start")}
        </Link>
      </DefaultButton>
    </div>
  );
};

export default WelcomePage;
