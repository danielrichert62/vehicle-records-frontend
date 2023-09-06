/* eslint-disable react/prop-types */
export function VehiclesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateVehicle(params, () => event.target.reset());
  };
  return (
    <div>
      <h1>Add New Vehicle</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Year: <input name="year" type="integer" />
        </div>
        <div>
          Make: <input name="make" type="text" />
        </div>
        <div>
          Model: <input name="model" type="text" />
        </div>
        <button type="submit">Create Vehicle</button>
      </form>
    </div>
  );
}
