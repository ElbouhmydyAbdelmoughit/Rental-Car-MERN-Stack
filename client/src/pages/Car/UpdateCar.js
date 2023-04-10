import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toastGenerator from "../../helpers/toastGenerator";
import { ToastContainer } from "react-toastify";

const UpdateCar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [updateCar, setUpdateCar] = useState({
    name: "",
    model: "",
    price: "",
    description: "",
    image: "",
  });

  const getOne = async () => {
    await axios
      .get("http://localhost:2000/car/getOne/" + id)
      .then((e) => {
        setUpdateCar(e.data.Car);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getOne();
  }, []);

  const handleChnage = (e) => {
    setUpdateCar({ ...updateCar, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setUpdateCar({ ...updateCar, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", updateCar.name);
    formData.append("model", updateCar.model);
    formData.append("price", updateCar.price);
    formData.append("description", updateCar.description);
    formData.append("image", updateCar.image);
    try {
      await axios
        .post("http://localhost:2000/car/update/" + id, formData)
        .then((data) => {
          if (data.data.message) {
            toastGenerator("success", data.data.message);
            navigate("/car");
          }
        });
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <>
      <div className="col-8 mx-auto mt-5">
        <form className="mt-2">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              onChange={handleChnage}
              value={updateCar.name || ""}
              placeholder="Name"
              name="name"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="model"
              className="form-control"
              placeholder="Model"
              onChange={handleChnage}
              value={updateCar.model || ""}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              onChange={handleChnage}
              value={updateCar.price || ""}
              placeholder="Price"
              name="price"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              onChange={handleChnage}
              value={updateCar.description || ""}
              placeholder="Description"
              name="description"
            />
          </div>
          <div className="mb-3">
            <input
              type="file"
              className="form-control"
              onChange={handlePhoto}
              accept=".png, .jpg, .jpeg"
              name="image"
            />
          </div>
          <div className="mt-2">
            <button
              type="button"
              className="btn btn-dark"
              onClick={handleSubmit}
            >
              Update Car
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default UpdateCar;
