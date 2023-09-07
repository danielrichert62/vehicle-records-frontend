/* eslint-disable react/prop-types */
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
        <div>
          Fill Date: <input name="fill_date" type="date" />
        </div>
        <div>
          Mileage: <input name="mileage" type="integer" />
        </div>
        <div>
          Cost per gallon: <input name="cost_per_gallon" type="decimal" />
        </div>
        <div>
          Location: <input name="location" type="text" />
        </div>
        <div>
          Gallons: <input name="gallons" type="decimal" />
        </div>
        {/* <div>
          Cost per gallon: <input name="cost_per_gallon" type="decimal" />
        </div> */}
        <button type="submit">Create Fuel</button>
      </form>
    </div>
  );
}
