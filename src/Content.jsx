/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
import { VehiclesNew } from "./VehiclesNew";
import { VehiclesIndex } from "./VehiclesIndex";
import { Modal } from "./Modal";
import { VehiclesShow } from "./VehiclesShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

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

  const handleShowVehicle = (vehicle) => {
    console.log("handleShowVehicle", vehicle);
    setIsVehiclesShowVisible(true);
    setCurrentVehicle(vehicle);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsVehiclesShowVisible(false);
  };

  const handleCreateVehicle = (params, successCallback) => {
    console.log("handleCreateVehicle", params);
    axios
      .post("http://localhost:3000/vehicles.json", params)
      .then((response) => {
        setVehicles([...vehicles, response.data]);
        successCallback();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdateVehicle = (id, params) => {
    console.log("handleUpdateVehicle", params);
    axios.patch(`http://localhost:3000/vehicles/${id}.json`, params).then((response) => {
      setVehicles(
        vehicles.map((vehicle) => {
          if (vehicle.id === response.data.id) {
            return response.data;
          } else {
            return vehicle;
          }
        })
      );
      handleClose();
    });
  };

  const handleDestroyVehicle = (vehicle) => {
    console.log("handleDestroyVehicle", vehicle);
    axios.delete(`http://localhost:3000/vehicles/${vehicle.id}.json`).then((response) => {
      setVehicles(vehicles.filter((p) => p.id !== vehicle.id));
      handleClose();
    });
  };

  useEffect(handleIndexVehicles, []);

  return (
    <div className="container" id="content-component">
      <p>Current User: </p>
      <LogoutLink />
      <Login />
      <hr />
      <Signup />
      <hr />
      <VehiclesNew onCreateVehicle={handleCreateVehicle} />
      <hr />
      <VehiclesIndex vehicles={vehicles} onShowVehicle={handleShowVehicle} />
      <hr />
      <Modal show={isVehiclesShowVisible} onClose={handleClose}>
        <VehiclesShow
          vehicle={currentVehicle}
          onUpdateVehicle={handleUpdateVehicle}
          onDestroyVehicle={handleDestroyVehicle}
        />
      </Modal>
    </div>
  );
}
