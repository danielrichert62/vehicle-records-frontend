/* eslint-disable react/prop-types */
export function FuelsIndex(props) {
  return (
    <div>
      <h2>All Fuel Records</h2>
      {props.fuels.map((fuel) => (
        <div key={fuel.id}>
          <p>Fill Date: {fuel.fill_date}</p>
          <p>Mileage: {fuel.mileage}</p>
          <p>Cost per gallon: {fuel.cost_per_gallon}</p>
          <p>Location: {fuel.location}</p>
          <p>Gallon: {fuel.gallon}</p>
          <p>Cost per gallon: {fuel.cost_per_gallon}</p>
          <button onClick={() => props.onShowFuel(fuel)}>More info</button>
        </div>
      ))}
    </div>
  );
}
