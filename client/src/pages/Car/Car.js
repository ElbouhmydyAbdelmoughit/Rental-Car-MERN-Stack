import axios from "axios";
import Modal from "react-modal";
import React from "react";
import { MDBInput } from "mdb-react-ui-kit";
import { useState, useEffect } from "react";

const Car = () => {
  const [car, setCar] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [addCar, setAddCar] = useState({
    name: "",
    model: "",
    price: "",
    description: "",
    image: "",
  });
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

  const handleChange = (e) => {
    setAddCar({ ...addCar, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setAddCar({ ...addCar, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(addCar);
  };

  return (
    <>
      <div className="mb-4">
        <button
          className="border-0"
          onClick={() => {
            setModalIsOpen(true);
          }}
        >
          <i class="bi bi-patch-plus-fill fs-2 text-black"></i>
        </button>
      </div>
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
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          shouldCloseOnOverlayClick={false}
          style={{ maxWidth: "600px" }}
        >
          <button
            onClick={() => {
              setModalIsOpen(false);
            }}
            className=" border-0  bg-transparent "
          >
            <i className="bi bi-x text-black fs-1"></i>
          </button>
          <div className="ms-5 me-5 d-flex flex-column justify-content-between align-items-center ">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="mb-4"
              onChange={handleChange}
            />
            <input
              type="text"
              name="model"
              placeholder="Model"
              className="mb-4"
              onChange={handleChange}
            />
            <input
              type="number"
              name="price"
              placeholder="price"
              className="mb-4"
              onChange={handleChange}
            />
            <input
              type="text"
              name="description"
              placeholder="description"
              className="mb-4"
              onChange={handleChange}
            />
            <input
              type="file"
              name="image"
              placeholder="image"
              className="mb-4"
              onChange={handleChange}
            />
            <button
              className="btn text-white"
              style={{ background: "#000", padding: "8px 60px" }}
              onClick={handleSubmit}
            >
              Add Car
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Car;
