export function FuelsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateFuel(params, () => event.target.reset());
  };
  return (
    <div>
      <h1>Add New Fuel</h1>
      <form onSubmit={handleSubmit}>
        <div className="w-50">
          <label htmlFor="InputFillDate" className="form-label">
            Fill Date
          </label>
          <input
            type="date"
            name="fill-date"
            className="form-control"
            id="InputFillDate"
            aria-describedby="fillDateHelp"
          />
        </div>

        <div className="w-50">
          <label htmlFor="InputMileage" className="form-label">
            Mileage
          </label>
          <input
            type="number"
            name="mileage"
            className="form-control"
            id="InputMileage"
            aria-describedby="mileageHelp"
          />
        </div>

        <div className="w-50">
          <label htmlFor="InputCostPerGallon" className="form-label">
            Cost per gallon
          </label>
          <input
            type="decimal"
            name="cost-per-gallon"
            className="form-control"
            id="InputCostPerGallon"
            aria-describedby="costPerGallonHelp"
          />
        </div>

        <div className="w-50">
          <label htmlFor="InputGallonsMileage" className="form-label">
            Gallons
          </label>
          <input
            type="decimal"
            name="gallons"
            className="form-control"
            id="InputGallons"
            aria-describedby="gallonsHelp"
          />
        </div>

        <div className="w-50">
          <label htmlFor="InputLocation" className="form-label">
            Location
          </label>
          <input
            type="text"
            name="location"
            className="form-control"
            id="InputLocation"
            aria-describedby="locationHelp"
          />
        </div>

        <br />
        <button type="submit" className="btn btn-outline-primary">
          Add Fuel
        </button>
      </form>
    </div>
  );
}
