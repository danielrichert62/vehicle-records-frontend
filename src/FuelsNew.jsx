/* eslint-disable react/prop-types */
export function FuelsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateFuel(params, () => event.target.reset());
    window.location.href = "/";
  };
  return (
    <div id="fuel-new">
      <h1>Add New Fuel</h1>

      <form onSubmit={handleSubmit}>
        <div className="w-50">
          <label htmlFor="InputFillDate">Fill Date</label>
          <input
            type="date"
            name="fill-date"
            className="form-control"
            id="InputFillDate"
            aria-describedby="fillDateHelp"
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
            type="number"
            name="cost-per-gallon"
            className="form-control"
            id="InputCostPerGallon"
            aria-describedby="costPerGallonHelp"
          />
        </div>

        <div className="w-50">
          <label htmlFor="InputGallonsMileage">Gallons</label>
          <input
            type="number"
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

        <div className="w-25">
          <label htmlFor="VehicleId">Vehicle ID</label>
          <input type="number" name="vehicle_id" className="form-control" id="InputVehicleId" aria-describedby="vehicleIdHelp" />
        </div>

        <br />
        <button type="submit" className="btn btn-outline-primary">
          Add Fuel
        </button>
      </form>
    </div>
  );
}
