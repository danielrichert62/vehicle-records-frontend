/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
export function VehiclesIndex(props) {
  // const handleClick = () => {
  //   props.onDestroyVehicle(props.vehicle);
  // };

  return (
    <div className="vehicles-index">
      <h2 id="vehicle-title">Your Vehicles</h2>
      {props.vehicles.map((vehicle) => (
        <div key={vehicle.id} className="vehicles">
          <div className="card w-50">
            <div className="card-header">
              {vehicle.year} {vehicle.make} {vehicle.model}
            </div>
            <div className="card-body" id="card-body">
              <img src={vehicle.image_url} width="300" />
              <br />
              <br />
              <a href="#" className="btn btn-outline-info" onClick={() => props.onShowVehicle(vehicle)}>
                Edit Vehicle
              </a>{" "}
              {/* <button onClick={handleClick} className="btn btn-outline-danger">
                Remove vehicle
              </button> */}
              <a href="/fuel" className="btn btn-outline-info" onClick={() => props.onNewFuel(fuel)}>
                Add Fuel Record
              </a>{" "}
            </div>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
}
