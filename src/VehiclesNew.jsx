/* eslint-disable react/prop-types */
export function VehiclesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateVehicle(params, () => event.target.reset());
  };
  return (
    <div id="vehicle-new">
      <h2>Add New Vehicle</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="InputYear" className="form-label">
            Year
          </label>
          <input type="year" className="form-control" id="InputYear" aria-describedby="yearHelp" />
        </div>

        <div className="mb-3">
          <label htmlFor="InputMake" className="form-label">
            Make
          </label>
          <input type="make" className="form-control" id="InputMake" aria-describedby="makeHelp" />
        </div>

        <div className="mb-3">
          <label htmlFor="InputModel" className="form-label">
            Model
          </label>
          <input type="model" className="form-control" id="InputModel" aria-describedby="modelHelp" />
        </div>

        <div className="mb-3">
          <label htmlFor="InputImageUrl" className="form-label">
            Image URL
          </label>
          <input type="image_url" className="form-control" id="InputImageUrl" aria-describedby="imageUrlHelp" />
        </div>

        {/* <div>
          Year: <input name="year" type="integer" />
        </div>
        <div>
          Make: <input name="make" type="text" />
        </div>
        <div>
          Model: <input name="model" type="text" />
        </div>
        <div>
          Image: <input name="image_url" type="text" />
        </div> */}
        {/* <button type="submit">Create Vehicle</button> */}
        <button type="submit" className="btn btn-outline-primary">
          Create Vehicle
        </button>
      </form>
    </div>
  );
}
