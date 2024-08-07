import { PageTitle } from "@atoms/text/PageTitle";
import { TableData } from "@organisms/TableData";
import { FC } from "react";

export const ShowDataPage: FC = () => {
  return (
    <>
      <div className="flex flex-col items-center py-4">
        <PageTitle>tableDataTitle</PageTitle>
      </div>
      <TableData />
    </>
  );
};
