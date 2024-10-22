import { Element } from "@prisma/client";
import { DataTable } from "./Data-table";
import { columns } from "./columns";


type DataTableProps = {
  elements: Element[]
}

const TableData = (props: DataTableProps) => {
  const {elements} = props;
  return (
    <div className="py-10">
      <DataTable columns={columns}  data={elements}/>
    </div>
  );
};

export default TableData;
