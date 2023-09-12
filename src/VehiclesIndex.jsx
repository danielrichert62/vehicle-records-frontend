/* eslint-disable react/prop-types */
export function VehiclesIndex(props) {
  const handleClick = () => {
    props.onDestroyVehicle(props.vehicle);
  };

  return (
    // <div id="vehicles-index">
    //   <h1>All Vehicles</h1>
    //   {props.vehicles.map((vehicle) => (
    //     <div key={vehicle.id}>
    //       <hr />
    //       <p>
    //         Make: {vehicle.make}
    //         <br />
    //         Model: {vehicle.model}
    //         <br />
    //         Year: {vehicle.year}
    //         <br />
    //       </p>
    //       <img src={vehicle.image_url} />
    //       <br />
    //       {/* <button onClick={() => props.onShowVehicle(vehicle)}>More info</button> */}
    //       <button onClick={() => props.onShowVehicle(vehicle)} type="submit" className="btn btn-outline-info">
    //         More Info
    //       </button>
    //     </div>
    //   ))}
    // </div>

    <div className="vehicles-index">
      <h2 id="vehicle-title">Your Vehicles</h2>
      {props.vehicles.map((vehicle) => (
        <div key={vehicle.id}>
          <div className="card w-75">
            <div className="card-header">
              {vehicle.year} {vehicle.make} {vehicle.model}
            </div>
            <div className="card-body" id="card-body">
              <img src={vehicle.image_url} width="300" />
              <br />
              <br />
              <a href="#" className="btn btn-outline-info" onClick={() => props.onShowVehicle(vehicle)}>
                Vehicle Info
              </a>{" "}
              <button onClick={handleClick} className="btn btn-outline-danger">
                Remove vehicle
              </button>
              {/* <a href="#" className="btn btn-primary" onClick={() => props.onShowVehicle(vehicle)}>
                Vehicle Info2
              </a> */}
            </div>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
}
