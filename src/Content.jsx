/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";
import { VehiclesIndex } from "./VehiclesIndex";
import { VehiclesNew } from "./VehiclesNew";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Content() {
  const [vehicles, setVehicles] = useState([]);

  const handleIndexVehicles = () => {
    console.log("handIndexVehicles");
    axios.get("http://localhost:3000/vehicles.json").then((response) => {
      console.log(response.data);
    });
  };

  const handleCreateVehicle = (params, successCallback) => {
    console.log("handleCreateVehicle", params);
    axios.post("http://localhost:3000/vehicles.json", params).then((response) => {
      setVehicles([...vehicles, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexVehicles, []);

  return (
    <div>
      <Signup />
      <Login />
      <VehiclesNew onCreateVehicle={handleCreateVehicle} />
      <VehiclesIndex vehicles={vehicles} />
      <LogoutLink />
    </div>
  );
}
