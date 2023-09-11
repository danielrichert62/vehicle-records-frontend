/* eslint-disable react/prop-types */
export function VehiclesIndex(props) {
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
      <h2 id="vehicle-title">All Vehicles</h2>
      {props.vehicles.map((vehicle) => (
        <div key={vehicle.id}>
          <div className="card w-75">
            <div className="card-header">
              {vehicle.year} {vehicle.make} {vehicle.model}
            </div>
            <div className="card-body" id="card-body">
              <img src={vehicle.image_url} width="400" />
              {/* <p className="card-text" /> <img src={vehicle.image_url} /> */}
              {/* <p className="card-text">Make: {vehicle.make}</p>
              <p className="card-text">Model: {vehicle.model}</p>
              <p className="card-text">Year: {vehicle.year}</p> */}
              <br />
              <br />
              <a href="#" className="btn btn-primary" onClick={() => props.onShowVehicle(vehicle)}>
                Vehicle Info
              </a>{" "}
              <a href="#" className="btn btn-primary" onClick={() => props.onShowVehicle(vehicle)}>
                Vehicle Info2
              </a>
            </div>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
}
