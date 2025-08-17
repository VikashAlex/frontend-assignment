import { InputField } from "./components/InputField";
import { DataTable } from "./components/DataTable";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const data = [
    { id: 1, name: "Vikash Kumar", email: "vikash@example.com" },
    { id: 2, name: "Rohit Sharma", email: "rohit@example.com" },
    { id: 3, name: "Amit Verma", email: "amit@example.com" },
  ];

  const columns = [
    { key: "name", title: "Name", dataIndex: "name", sortable: true },
    { key: "email", title: "Email", dataIndex: "email", sortable: true },
  ];

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center text-indigo-700">
        Client Side 
      </h1>

      {/* InputField Example */}
      <InputField
        label="Your Name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        helperText="Please type your full name"
      />

      <p className="mt-2 text-gray-600">
        Typed Value: <span className="font-semibold">{name}</span>
      </p>

      {/* DataTable Example */}
      <DataTable data={data} columns={columns} selectable />
    </div>
  );
}

export default App;
