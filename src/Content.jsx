/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
import { VehiclesNew } from "./VehiclesNew";
import { VehiclesIndex } from "./VehiclesIndex";
// import { FuelsIndex } from "./FuelsIndex";
import { Modal } from "./Modal";
import { VehiclesShow } from "./VehiclesShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Content() {
  const [vehicles, setVehicles] = useState([]);
  const [isVehiclesShowVisible, setIsVehiclesShowVisible] = useState(false);
  const [currentVehicle, setCurrentVehicle] = useState({});
  const [currentFuel, setCurrentFuel] = useState({});

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

  // const handleIndexFuels = () => {
  //   console.log("handleIndexFuels");
  //   axios.get("http://localhost:3000/fuels.json").then((response) => {
  //     console.log(response.data);
  //     setVehicles(response.data);
  //   });
  // };

  // const handleShowFuel = (fuel) => {
  //   console.log("handleShowFuel", fuel);
  //   setIsFuelsShowVisible(true);
  //   setCurrentFuel(fuel);
  // };

  useEffect(handleIndexVehicles, []);

  return (
    <div className="container" id="content-component">
      <p>
        Current User: <Login />
      </p>
      <LogoutLink />
      <hr />
      <Signup />
      <hr />
      <VehiclesNew onCreateVehicle={handleCreateVehicle} />
      <hr />
      <VehiclesIndex vehicles={vehicles} onShowVehicle={handleShowVehicle} />
      <hr />
      {/* <FuelsIndex fuels={fuels} onShowFuel={handleShowFuel} /> */}
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
