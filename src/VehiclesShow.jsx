export function VehiclesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handleSubmit", params);
    props.onUpdateVehicle(props.vehicle.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyVehicle(props.vehicle);
  };

  return (
    <div id="vehicles-show">
      <h1>Vehicle Info!</h1>
      <p>Make: {props.vehicle.make}</p>
      <p>Model: {props.vehicle.model}</p>
      <p>Year: {props.vehicle.year}</p>
      {/* <p>{props.vehicle.friendly_created_at}</p> */}

      <h1>Edit vehicle</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Make: <input defaultValue={props.vehicle.make} name="make" type="text" />
        </div>
        <div>
          Model: <input defaultValue={props.vehicle.model} name="model" type="text" />
        </div>
        <div>
          Year: <input defaultValue={props.vehicle.year} name="year" type="integer" />
        </div>
        <div>
          image_url: <input defaultValue={props.vehicle.image_url} name="image_url" type="text" />
        </div>
        <button type="submit">Update vehicle</button>
      </form>
      <button onClick={handleClick}>Destroy vehicle</button>
    </div>
  );
}
