import React from "react";
import { DataTableItemsProps } from "./dataTableItemsType";
import { DataTable } from "./data-table";
import { columns } from "./columns";

const DataTableItems = (props: DataTableItemsProps) => {
  const { elements } = props;
  return (
    <div className="py-10">
      <DataTable columns={columns} data={elements} />
    </div>
  );
};

export default DataTableItems;
