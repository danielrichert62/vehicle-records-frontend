/* eslint-disable react/prop-types */
export function VehiclesIndex(props) {
  return (
    <div id="vehicles-index">
      <h1>All Vehicles</h1>
      {props.vehicles.map((vehicle) => (
        <div key={vehicle.id}>
          <p>Make: {vehicle.make}</p>
          <img src={vehicle.image_url} />
          <p>Model: {vehicle.model}</p>
          <p>Year: {vehicle.year}</p>
          {/* <p>Image: {vehicle.image_url}</p> */}
          <button onClick={() => props.onShowVehicle(vehicle)}>More info</button>
        </div>
      ))}
    </div>
  );
}
