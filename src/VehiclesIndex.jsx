/* eslint-disable react/prop-types */
export function VehiclesIndex(props) {
  return (
    <div id="vehicles-index">
      <h1>All Vehicles</h1>
      {props.vehicles.map((vehicle) => (
        <div key={vehicle.id}>
          <hr />
          <p>
            Make: {vehicle.make}
            <br />
            Model: {vehicle.model}
            <br />
            Year: {vehicle.year}
            <br />
          </p>
          <img src={vehicle.image_url} />
          <br />
          <button onClick={() => props.onShowVehicle(vehicle)}>More info</button>
        </div>
      ))}
    </div>
  );
}
