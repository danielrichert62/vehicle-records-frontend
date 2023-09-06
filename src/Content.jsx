/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";
import { VehiclesIndex } from "./VehiclesIndex";
import { VehiclesNew } from "./VehiclesNew";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Modal } from "./Modal";

export function Content() {
  const [vehicles, setVehicles] = useState([]);
  const [isVehiclesShowVisible, setIsVehiclesShowVisible] = useState(false);
  const [currentVehicle, setCurrentVehicle] = useState({});

  const handleIndexVehicles = () => {
    console.log("handleIndexVehicles");
    axios.get("http://localhost:3000/vehicles.json").then((response) => {
      console.log(response.data);
      setVehicles(response.data);
    });
  };

  const handleCreateVehicle = (params, successCallback) => {
    console.log("handleCreateVehicle", params);
    axios.post("http://localhost:3000/vehicles.json", params).then((response) => {
      setVehicles([...vehicles, response.data]);
      successCallback();
    });
  };

  const handleShowVehicle = (vehicle) => {
    console.log("handleShowVehicle", vehicle);
    setIsVehiclesShowVisible(true);
    setCurrentVehicle(vehicle);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsVehiclesShowVisible(false);
  };

  useEffect(handleIndexVehicles, []);

  return (
    <div>
      <Login />
      <Signup />
      <VehiclesNew onCreateVehicle={handleCreateVehicle} />
      <VehiclesIndex vehicles={vehicles} onShowVehicle={handleShowVehicle} />
      <Modal show={isVehiclesShowVisible} onClose={handleClose}>
        <h1>Test</h1>
      </Modal>
      <LogoutLink />
    </div>
  );
}
