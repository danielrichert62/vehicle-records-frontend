/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export function FuelsNew(props) {
  const [Fuels, setFuels] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit", params);
    const params = new FormData(event.target);
    console.log(params);
    props.onCreateFuel(params, () => event.target.reset());
    event.target.reset();
    window.location.href = "/";
  };

  // const handleCreateFuel = (event) => {
  //   event.preventDefault();
  //   let params = new FormData(event.target);
  //   console.log(params);
  // };

  const handleCreateFuel = (params, successCallback) => {
    console.log("handleCreateFuel", params);
    axios
      .post("http://localhost:3000/fuels.json", params)
      .then((response) => {
        setFuels([...fuels, response.data]);
        successCallback();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div id="fuel-new">
      <h2>Add New Fuel</h2>

      <form onSubmit={handleCreateFuel}>
        <div className="w-50">
          <label htmlFor="InputFillDate">Fill Date</label>
          <input
            type="date"
            name="FillDate"
            className="form-control"
            id="InputFillDate"
            aria-describedby="filldateHelp"
          />
        </div>

        <div className="w-50">
          <label htmlFor="InputMileage">Mileage</label>
          <input
            type="number"
            name="mileage"
            className="form-control"
            id="InputMileage"
            aria-describedby="mileageHelp"
          />
        </div>

        <div className="w-50">
          <label htmlFor="InputCostPerGallon">Cost per gallon</label>
          <input
            type="decimal"
            name="cost-per-gallon"
            className="form-control"
            id="InputCostPerGallon"
            aria-describedby="costPerGallonHelp"
          />
        </div>

        <div className="w-50">
          <label htmlFor="InputGallons">Gallons</label>
          <input
            type="decimal"
            name="gallons"
            className="form-control"
            id="InputGallons"
            aria-describedby="gallonsHelp"
          />
        </div>

        <div className="w-50">
          <label htmlFor="InputLocation">Location</label>
          <input
            type="text"
            name="location"
            className="form-control"
            id="InputLocation"
            aria-describedby="locationHelp"
          />
        </div>

        <div className="w-50">
          <label htmlFor="InputVehicleId">Vehicle ID</label>
          <input
            type="text"
            name="location"
            className="form-control"
            id="InputVehicleId"
            aria-describedby="VehicleIdHelp"
          />
        </div>

        <br />
        <button type="submit" className="btn btn-outline-primary">
          Create Fuel Record
        </button>
      </form>
    </div>
  );
}
