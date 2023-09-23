/* eslint-disable react/prop-types */
export function FuelsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handleSubmit", params);
    props.onUpdateFuel(props.fuel.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyFuel(props.fuel);
  };

  return (
    <div id="fuels-show">
      <h2>Edit fuel</h2>
      <form onSubmit={handleSubmit}>
        <div className="w-50">
          Fill Date
          <input
            defaultValue={props.fuel.fill_date}
            name="fill_date"
            type="date"
            className="form-control"
            id="InputDate"
            aria-describedby="dateHelp"
          />
        </div>
        <div className="w-50">
          Mileage
          <input
            defaultValue={props.fuel.mileage}
            name="mileage"
            type="integer"
            className="form-control"
            id="InputMileage"
            aria-describedby="mileageHelp"
          />
        </div>
        <div className="w-50">
          Cost per Gal.
          <input
            defaultValue={props.fuel.cost_per_gallon}
            name="cost_per_gallon"
            type="decimal"
            className="form-control"
            id="InputCostPerGallon"
            aria-describedby="costPerGallonHelp"
          />
        </div>
        <div className="w-50">
          Location
          <input
            defaultValue={props.fuel.location}
            name="location"
            type="text"
            className="form-control"
            id="InputLocation"
            aria-describedby="locationHelp"
          />
        </div>
        <div className="w-50">
          Gallons
          <input
            defaultValue={props.fuel.gallons}
            name="gallons"
            type="integer"
            className="form-control"
            id="InputGallons"
            aria-describedby="GallonsHelp"
          />
        </div>
        <br />
        <button type="submit" className="btn btn-outline-success">
          Update fuel
        </button>{" "}
        <button onClick={handleClick} className="btn btn-outline-danger">
          Remove fuel
        </button>
      </form>
    </div>
  );
}
