/* eslint-disable no-unused-vars */
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
import { VehiclesNew } from "./VehiclesNew";

export function Header() {
  // const [showBasic, setShowBasic] = useState(false);
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };

  const handleSignupClose = () => {
    setIsSignupVisible(false);
  };

  return (
    <header>
      <Modal show={isSignupVisible} onClose={handleSignupClose}>
        <Signup />
      </Modal>
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
      {/* <ul className="nav">
        <a className="nav-link" aria-current="page" href="/signup">
          <Signup />
        </a>

        <LogoutLink />

        <a className="nav-link" aria-current="page" href="/login">
          Login
        </a>
      </ul> */}
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/login">
            Login
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <LogoutLink />
          </a>
        </li>
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
