import React, { useState, useEffect } from "react";
import axios from "axios";

const Client = () => {
  const [client, setClient] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      await axios.get("http://localhost:2000/auth/getAll").then((data) => {
        setClient(data.data.Users);
      });
    } catch (error) {
      console.log(error);
    }
  };

  function deleted(id) {
    const result = window.confirm("Are you sure want to deleted this client");
    if (result) {
      axios.delete("http://localhost:2000/auth/delete/" + id).then(() => {});
    }
  }

  return (
    <table className="table" style={{ minWidth: "800px" }}>
      <thead className="bg-black text-white">
        <tr>
          <th className="fw-bold">Name</th>
          <th className="fw-bold">Email</th>
          <th className="fw-bold">Role</th>
          <th className="fw-bold">#</th>
        </tr>
      </thead>
      <tbody>
        {client.map((c, i) => (
          <tr className="cell-1" key={i}>
            <td className="">{c.name}</td>
            <td className="">{c.email}</td>
            <td
              className={c.role === "admin" ? "text-success" : "text-primary "}
            >
              {c.role}
            </td>
            <td className="d-flex justify-content-between text-black">
              <button
                onClick={() => deleted(c._id)}
                className="border-0 bg-white"
              >
                <i className="bi bi-trash"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Client;
