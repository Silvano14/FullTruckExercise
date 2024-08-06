import { PageTitle } from "@atoms/text/PageTitle";
import { TableData } from "@organisms/TableData";
import { FC } from "react";

export const ShowDataPage: FC = () => {
  return (
    <div className="flex flex-col gap-8 items-center">
      <PageTitle>tableDataTitle</PageTitle>
      <TableData />
    </div>
  );
};
