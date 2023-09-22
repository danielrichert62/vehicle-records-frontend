/* eslint-disable react/prop-types */
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
      <h2>Edit vehicle</h2>
      <form onSubmit={handleSubmit}>
        <div className="w-50">
          Year
          <input
            defaultValue={props.vehicle.year}
            name="year"
            type="integer"
            className="form-control"
            id="InputYear"
            aria-describedby="yearHelp"
          />
        </div>
        <div className="w-50">
          Make
          <input
            defaultValue={props.vehicle.make}
            name="make"
            type="text"
            className="form-control"
            id="InputMake"
            aria-describedby="makeHelp"
          />
        </div>
        <div className="w-50">
          Model
          <input
            defaultValue={props.vehicle.model}
            name="model"
            type="text"
            className="form-control"
            id="InputModel"
            aria-describedby="modelHelp"
          />
        </div>
        <div className="w-50">
          Image URL
          <input
            defaultValue={props.vehicle.image_url}
            name="image_url"
            type="text"
            className="form-control"
            id="InputImageUrl"
            aria-describedby="imageUrlHelp"
          />
        </div>
        <br />
        <button type="submit" className="btn btn-outline-success">
          Update vehicle
        </button>{" "}
        <button onClick={handleClick} className="btn btn-outline-danger">
          Remove vehicle
        </button>
      </form>
    </div>
  );
}
