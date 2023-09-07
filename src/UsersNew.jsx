/* eslint-disable react/prop-types */
export function UsersNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateUser(params, () => event.target.reset());
  };
  return (
    <div>
      <h1>Add New User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Email: <input name="email" type="text" />
        </div>
        <div>
          Vehicle ID: <input name="vehicle_id" type="integer" />
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
}
