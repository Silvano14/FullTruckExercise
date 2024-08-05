import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import { Filter } from "./Filter";

interface TableProps<TData> {
  data?: Array<TData>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<TData, any>[];
}

export const defaultPageSize = 5;

export const DefaultTable = <TData,>({
  data = [],
  columns,
}: TableProps<TData>): React.JSX.Element => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
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
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    state: {
      columnFilters,
      sorting,
    },
  });

  return (
    <div className="h-fit max-h-[800px] border-separate overflow-clip rounded-xl border border-solid flex flex-col">
      <table className=" table-fixed w-full divide-y divide-gray-200 dark:divide-neutral-700">
        <thead className="sticky top-0">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-2 py-2 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                >
                  <div
                    className="cursor-pointer flex pb-2 gap-1 items-center justify-center select-none"
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
                    <div>
                      <Filter column={header.column} />
                    </div>
                  ) : null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
      </table>
      <div className="flex-1 overflow-y-auto">
        <table className=" table-fixed w-full divide-y divide-gray-200">
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="odd:bg-white even:bg-gray-100 text-center"
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
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
  );
};
