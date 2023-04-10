import jwt from "jwt-decode";

const Authorisation = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return jwt(token);
  }

  return false;
};

export default Authorisation;
