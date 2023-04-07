import jwt from "jwt-decode";

const Authorisation = () => {
  const token = localStorage.getItem("token");

  if (token) {
    // const e = JSON.parse(token);
    console.log(jwt(token));
    return jwt(token);
  }

  return false;
};

export default Authorisation;
