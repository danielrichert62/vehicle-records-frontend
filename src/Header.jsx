/* eslint-disable no-unused-vars */
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
import { VehiclesNew } from "./VehiclesNew";

export function Header() {
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  let authenticationLinks;
  if (localStorage.jwt === undefined) {
    authenticationLinks = (
      <>
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page"> */}
          <Link to="/signup">Signup</Link>
          {/* </a> */}
        </li>
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page"> */}
          <Link to="/login">Login</Link>
          {/* </a> */}
        </li>
      </>
    );
  } else {
    authenticationLinks = (
      <>
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page"> */}
          <Link to="/vehicles">Vehicles</Link>
          {/* </a> */}
        </li>
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page"> */}
          <Link to="/vehicle/new">New Vehicle</Link>
          {/* </a> */}
        </li>
        <li>
          {/* <a className="nav-link active" aria-current="page"> */}
          <LogoutLink />
          {/* </a> */}
        </li>
      </>
    );
  }

  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };

  const handleSignupClose = () => {
    setIsSignupVisible(false);
  };

  return (
    <header>
      <div
        className="p-4 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://www.freewebheaders.com/wp-content/gallery/cars/huge-cars-parking-website-header.jpg')",
          height: "150px",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-2">Vehicle Record Keeper</h1>
              <h5 className="mb-2">
                <i>Fuel and Maintence records</i>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/login">
            Login
          </a>
        </li>
        {/* <li className="nav-item">
          <LogoutLink />
        </li> */}
        <li className="nav-item">
          <a className="nav-link" href="/signup">
            Signup
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/vehicle/new">
            Add Vehicle
          </a>
        </li>
      </ul>
    </header>
  );
}
