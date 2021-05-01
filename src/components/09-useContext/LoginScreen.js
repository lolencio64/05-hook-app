import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  //1. obtener la referencia al userCOntext
  //2. setUser

  /*
        id:123
        name'Marco'
    */

  const { setUser } = useContext(UserContext);

  const usuario = {
    id: 123,
    name: "Marco",
  };

  const handleClick = (e) => {
    //e.preventDefault();

    setUser(usuario);
  };

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleClick}>
        Login
      </button>
    </div>
  );
};
