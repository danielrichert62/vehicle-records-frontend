/* eslint-disable react/prop-types */
export function UsersIndex(props) {
  return (
    <div>
      <h1>All Users</h1>
      {props.users.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Vehicle ID: {user.vehicle_id}</p>
          {/* <button onClick={() => props.onShowUser(user)}>More info</button> */}
        </div>
      ))}
    </div>
  );
}
