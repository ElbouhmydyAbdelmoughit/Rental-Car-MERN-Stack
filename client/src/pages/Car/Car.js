import axios from "axios";
import { useState, useEffect } from "react";

const Car = () => {
  const [car, setCar] = useState([]);
  useEffect(() => {
    getAllCars();
  }, [car]);

  const getAllCars = async () => {
    try {
      await axios.get("http://localhost:2000/car").then((data) => {
        setCar(data.data.Car);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <table className="table" style={{ minWidth: "800px" }}>
      <thead className="bg-black text-white">
        <tr>
          <th className="fw-bold">Name</th>
          <th className="fw-bold">Model</th>
          <th className="fw-bold">Price</th>
          <th className="fw-bold">Description</th>
          <th className="fw-bold text-wrap">Image</th>
          <th className="fw-bold">#</th>
        </tr>
      </thead>
      <tbody className="table-body">
        {car.map((c, i) => (
          <tr className="cell-1" key={i}>
            <td className="">{c.name}</td>
            <td className="">{c.model}</td>
            <td className="">{c.price}</td>
            <td className="">{c.description}</td>
            <td className="">{c.image}</td>
            <td className="d-flex justify-content-between text-black">
              <i className="bi bi-trash"></i>
              <i className="bi bi-pen"></i>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Car;
