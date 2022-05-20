import React from "react";
import "./App.css";
import Papa from "papaparse";
import DataFile from "./Data/data.csv";
import CardRow from "./Components/CardRow";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [rows, setRows] = React.useState([]);

  const cardInfo = [
    {
      title: "Make",
      description: "Company of the Vehicle",
    },
    {
      title: "Model",
      description: "Car Model",
    },
    {
      title: "Vehicle Class",
      description:
        "Class of the Vehicle depending on their utility, capacity and weight",
    },
    // {
    //   title: "Engine Size(L)",
    //   description: "Engine Size(L)"
    // },
    // {
    //   title: "Fuel Type",
    //   description: "Fuel Type"
    // },
  ];

  async function getData() {
    // Fetching Data From CSV File
    const response = await fetch(DataFile);
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder("utf-8");
    const csv = decoder.decode(result.value);
    const results = Papa.parse(csv, { header: true });
    const rows = results.data;
    // array of objects of rows
    setRows(rows);
  }

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <CardRow cardInfo={cardInfo} rows={rows} />
    </div>
  );
}

export default App;
