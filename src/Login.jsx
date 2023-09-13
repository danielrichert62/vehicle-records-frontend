import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("name", response.data.name);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <>
      {localStorage.jwt === undefined ? (
        <>
          {/* jwt is undefined */}

          {localStorage.removeItem("email")}
          {localStorage.removeItem("name")}
          <div id="login">
            <h2>Login</h2>
            <ul>
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-2 w-25">
                <label htmlFor="InputEmail">Email:</label>
                <input type="text" name="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" />
              </div>

              <div className="form-floating mb-2 w-25">
                <label htmlFor="InputPassword">Password:</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="InputPassword"
                  aria-describedby="passwordHelp"
                />
              </div>

              {/* <div>
                Email: <input name="email" type="email" />
              </div>
              <div>
                Password: <input name="password" type="password" />
              </div> */}
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
            </form>
          </div>
        </>
      ) : (
        <>
          {/* jwt is defined */}
          {localStorage.email}
          {/* {localStorage.name} */}
        </>
      )}
    </>
  );
}
