import { DateTime } from "luxon";
import { useMemo } from "react";
import "./App.css";
import movies from "./MOVIE_DATA.json";
import BasicTable from "./components/BasicTable";
import Table from "./components/TableReoder";
import TextInput from "./components/Inputchange";
import TableBeautifull from "./components/TableBeautifull";

const App = () => {
  const data = useMemo(() => movies, []);

  /** @type import('@tanstack/react-table').ColumnDef<any> */
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
      footer: "ID",
    },
    {
      header: "Name",
      columns: [
        {
          header: "First",
          accessorKey: "first_name",
          footer: "First name",
        },
        {
          header: "Last",
          accessorKey: "last_name",
          footer: "Last name",
        },
      ],
    },
    // {
    //   header: 'Name',
    //   accessorFn: row => `${row.first_name} ${row.last_name}`,
    // },
    // {
    //   header: 'First name',
    //   accessorKey: 'first_name',
    //   footer: 'First name',
    // },
    // {
    //   header: 'Last name',
    //   accessorKey: 'last_name',
    //   footer: 'Last name',
    // },
    {
      header: "Email",
      accessorKey: "email",
      footer: "Email",
    },
    {
      header: "Gender",
      accessorKey: "gender",
      footer: "Gender",
    },
    {
      header: "Date of birth",
      accessorKey: "dob",
      footer: "Date of birth",
      cell: (info) =>
        DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED),
    },
  ];

  const movieColumns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Genre",
      accessorKey: "genre",
    },
    {
      header: "Rating",
      accessorKey: "rating",
    },
  ];
  const column1 = [
    { Header: "ID", accessor: "id" },
    { Header: "Name", accessor: "name" },
    { Header: "Age", accessor: "age" },
  ];

  const data1 = [
    { id: 1, name: "John Doe", age: 28 },
    { id: 2, name: "Jane Smith", age: 35 },
    { id: 3, name: "Bob Johnson", age: 42 },
  ];
  return (
    <>
      <h1>React-table</h1>
      {/* <BasicTable data={data} columns={movieColumns} /> */}
      {/* <GanttChart /> */}
      <Table />
      <TextInput />
      <TableBeautifull />
    </>
  );
};

export default App;
