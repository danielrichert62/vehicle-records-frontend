import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h2>Signup</h2>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="mb-1">
          <label htmlFor="InputEmail" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" />
        </div>

        <div className="mb-3">
          <label htmlFor="InputName" className="form-label">
            Name
          </label>
          <input type="name" className="form-control" id="InputName" aria-describedby="emailHelp" />
        </div>

        <div className="mb-3">
          <label htmlFor="InputPassword1" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="InputPassword1" />
        </div>

        <div className="mb-3">
          <label htmlFor="InputPassword2" className="form-label">
            Password Confirmation
          </label>
          <input type="password" className="form-control" id="InputPassword2" />
        </div>

        {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="Check1" />
          <label className="form-check-label" htmlFor="Check1">
            Check me out
          </label>
        </div> */}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {/* <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <div>
          Password confirmation: <input name="password_confirmation" type="password" />
        </div> */}
      {/* <button type="submit">Signup</button> */}
      {/* <button type="submit" className="btn btn-outline-primary">
          Signup
        </button> */}
      {/* </form> */}
    </div>
  );
}

{
  /* <button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button> */
}
