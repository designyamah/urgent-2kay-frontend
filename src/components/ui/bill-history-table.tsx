import { ColumnDef } from "@tanstack/react-table";

export type BillHistory = {
  id: number;
  request: string;
  sponsor: string;
  status: string;
  priority: string;
  created: string;
  dueDate: string;
};

export const columns: ColumnDef<BillHistory>[] = [
  {
    accessorKey: "id",
    header: "S/N",
  },
  {
    accessorKey: "request",
    header: "Request",
  },
  {
    accessorKey: "sponsor",
    header: "Sponsor",
  },
  {
    accessorKey: "status",
    header: "Request status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            status === "Completed"
              ? "bg-green-100 text-green-800"
              : status === "Pending"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {status}
        </span>
      );
    },
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => {
      const priority = row.getValue("priority") as string;
      return (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            priority === "High"
              ? "bg-red-100 text-red-800"
              : priority === "Medium"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-blue-100 text-blue-800"
          }`}
        >
          {priority}
        </span>
      );
    },
  },
  {
    accessorKey: "created",
    header: "Created",
  },
  {
    accessorKey: "dueDate",
    header: "Due date",
  },
  {
    id: "actions",
    header: "Action",
    cell: () => (
      <button className="text-[#5A3CCA] text-sm">View more info</button>
    ),
  },
];