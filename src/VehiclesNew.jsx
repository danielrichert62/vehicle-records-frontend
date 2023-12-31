/* eslint-disable react/prop-types */
export function VehiclesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateVehicle(params, () => event.target.reset());
    window.location.href = "/";
  };
  return (
    <div id="vehicle-new">
      <h2>Add New Vehicle</h2>

      <form onSubmit={handleSubmit}>
        <div className="w-25">
          <label htmlFor="InputYear">Year</label>
          <input type="number" name="year" className="form-control" id="InputYear" aria-describedby="yearHelp" />
        </div>

        <div className="w-25">
          <label htmlFor="InputMake">Make</label>
          <input type="text" name="make" className="form-control" id="InputMake" aria-describedby="makeHelp" />
        </div>

        <div className="w-25">
          <label htmlFor="InputModel">Model</label>
          <input type="text" name="model" className="form-control" id="InputModel" aria-describedby="modelHelp" />
        </div>

        <div className="w-25">
          <label htmlFor="InputImageUrl">Image URL</label>
          <input
            type="text"
            name="image_url"
            className="form-control"
            id="InputImageUrl"
            aria-describedby="imageUrlHelp"
          />
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
        <br />
        <button type="submit" className="btn btn-outline-primary">
          Create Vehicle
        </button>
      </form>
    </div>
  );
}
