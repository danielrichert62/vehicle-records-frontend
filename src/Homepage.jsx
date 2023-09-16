import { Link } from "react-router-dom";

export function Homepage() {
  return (
    <div id="homepage">
      <p>
        <Link to="/signup">Signup</Link> or <Link to="/login">Login</Link> to get started.
      </p>
      <hr />
      <h3 className="display-1">Vehicle Record Keeper</h3>
      <hr />
      <br />
      <p>A simple Vehicle Record Tool to record fuel fill ups and Maintence.</p>
    </div>
  );
}
