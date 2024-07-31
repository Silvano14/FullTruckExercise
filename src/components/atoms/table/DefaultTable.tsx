/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  Row,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { ReactNode } from "react";

interface TableProps<TData> {
  data?: Array<TData>;
  columns: ColumnDef<TData, any>[];
  headerComponent?: ReactNode;
}

export const defaultPageSize = 50;

export const DefaultTable = <TData,>({
  data = [],
  columns,
  headerComponent,
}: TableProps<TData>): React.JSX.Element => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: defaultPageSize,
  });
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const table = useReactTable<TData>({
    autoResetPageIndex: false,
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    state: {
      columnFilters,
      sorting,
      pagination,
    },
  });

  const calculateRowSpan = (
    rows: Row<any>[],
    columnId: string
  ): Record<number, number> => {
    const rowSpanMap: Record<number, number> = {};
    let lastValue: any = null;
    let rowSpan = 0;

    rows.forEach((row, index) => {
      const value = row.getValue(columnId);
      if (value === lastValue) {
        rowSpan++;
        rowSpanMap[index] = 0;
        rowSpanMap[index - rowSpan + 1] = rowSpan;
      } else {
        lastValue = value;
        rowSpan = 1;
        rowSpanMap[index] = 1;
      }
    });
    return rowSpanMap;
  };

  const idNastroRowSpanMap = calculateRowSpan(
    table.getRowModel().rows,
    "id_nastro"
  );

  return (
    <>
      {/* <div className="flex justify-between items-center w-full">
        {headerComponent}
        <PaginationWrapper table={table}></PaginationWrapper>
      </div> */}
      <div className="h-fit max-h-[800px] border-separate overflow-clip rounded-xl border border-solid flex flex-col">
        <table className=" table-fixed w-full divide-y divide-gray-200 dark:divide-neutral-700">
          <thead className="sticky top-0">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    <div
                      className="cursor-pointer flex gap-1 items-center justify-center select-none"
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: <IconChevronUp size={16} />,
                        desc: <IconChevronDown size={16} />,
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                    {header.column.getCanFilter() ? (
                      <div>{/* <Filter column={header.column} /> */}</div>
                    ) : null}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
        </table>
        <div className="flex-1 overflow-y-auto">
          <table className=" table-fixed w-full divide-y divide-gray-200 dark:divide-neutral-700">
            <tbody>
              {table.getRowModel().rows.map((row, rowIndex) => (
                <tr
                  key={row.id}
                  className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800 text-center"
                >
                  {row.getVisibleCells().map((cell) => {
                    const columnId = cell.column.id;
                    const rowSpan =
                      columnId === "id_nastro" || columnId === "detail"
                        ? idNastroRowSpanMap[rowIndex]
                        : 1;

                    if (rowSpan === 0) return null;

                    return (
                      <td
                        key={cell.id}
                        className={
                          rowSpan > 1 ? "border-b-1 border-gray-200" : ""
                        }
                        rowSpan={rowSpan}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
