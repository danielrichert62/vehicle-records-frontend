import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { VehiclesNew } from "./VehiclesNew";
import { VehiclesIndex } from "./VehiclesIndex";
import { Modal } from "./Modal";
import { FuelsNew } from "./FuelsNew";
import { FuelsIndex } from "./FuelsIndex";
import { VehiclesShow } from "./VehiclesShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Content() {
  const [vehicles, setVehicles] = useState([]);
  const [isVehiclesShowVisible, setIsVehiclesShowVisible] = useState(false);
  const [currentVehicle, setCurrentVehicle] = useState({});
  const [currentFuel, setCurrentFuel] = useState([]);
  const [Fuels, setFuels] = useState([]);

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

  const handleIndexFuels = () => {
    console.log("handleIndexFuels");
    axios.get("http://localhost:3000/fuels.json").then((response) => {
      console.log(response.data);
      setFuels(response.data);
    });
  };

  const handleShowFuel = (fuel) => {
    console.log("handleShowFuel", fuel);
    setIsFuelsShowVisible(true);
    setCurrentFuel(fuel);
  };

  const handleAddFuel = (params, successCallback) => {
    console.log("handleAddFuel", params);
    axios
      .post("http://localhost:3000/fuels.json", params)
      .then((response) => {
        setFuels([...Fuels, response.data]); // is this correct?  Fuels?
        successCallback();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCreateFuel = (params, successCallback) => {
    console.log("handleCreateFuel", params);
    axios
      .post("http://localhost:3000/fuels.json", params)
      .then((response) => {
        setFuels([...Fuels, response.data]);
        successCallback();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdateFuel = (id, params) => {
    console.log("handleUpdateFuel", params);
    axios.patch(`http://localhost:3000/fuels/${id}.json`, params).then((response) => {
      setFuels(
        fuels.map((fuel) => {
          if (fuel.id === response.data.id) {
            return response.data;
          } else {
            return fuel;
          }
        })
      );
      handleClose();
    });
  };

  const handleDestroyFuel = (fuel) => {
    console.log("handleDestroyFuel", fuel);
    axios.delete(`http://localhost:3000/fuels/${fuel.id}.json`).then((response) => {
      setFuels(fuels.filter((p) => p.id !== fuel.id));
      handleClose();
    });
  };

  useEffect(handleIndexVehicles, []);
  useEffect(handleIndexFuels, []);

  return (
    <div className="container" id="content-component">
      <p>
        Current User: <Login /> <LogoutLink />
      </p>
      <hr />
      <Signup />
      <hr />
      <VehiclesNew onCreateVehicle={handleCreateVehicle} />
      <hr />
      <VehiclesIndex vehicles={vehicles} onShowVehicle={handleShowVehicle} />
      <hr />

      <hr />
      {/* <FuelsIndex fuels={Fuels} onShowFuel={handleShowFuel} /> */}
      <hr />
      <Modal show={isVehiclesShowVisible} onClose={handleClose}>
        <VehiclesShow
          vehicle={currentVehicle}
          onUpdateVehicle={handleUpdateVehicle}
          onDestroyVehicle={handleDestroyVehicle}
          onAddFuel={handleAddFuel}
        />
        {/* <FuelsNew onShowFuel={handleCreateFuel} /> */}
      </Modal>
    </div>
  );
}
