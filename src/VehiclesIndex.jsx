/* eslint-disable react/prop-types */
export function VehiclesIndex(props) {
  return (
    <div>
      <h1>All Vehicles</h1>
      {props.vehicles.map((vehicle) => (
        <div key={vehicle.id}>
          <p>{vehicle.make}</p>
          <p>Model: {vehicle.model}</p>
          <p>Year: {vehicle.year}</p>
          <button onClick={() => props.onShowVehicle(vehicle)}>More info</button>
        </div>
      ))}
    </div>
  );
}
