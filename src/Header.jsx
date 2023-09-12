// export function Header() {
//   return (
//     <header>
//       <div id="header">
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//           <div className="container-fluid">
//             <a className="navbar-brand" href="#">
//               <img
//                 src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.BV43a2BrIUM8qjDjrvc7qwAAAA%26pid%3DApi&f=1&ipt=4160856102513c9e73f01ee194d7505c59afa428aec424075ca30a19d2b2e770&ipo=images"
//                 alt="Logo"
//                 width="70"
//                 height="70"
//                 className="d-inline-block align-text-top"
//               />{" "}
//             </a>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <a className="nav-link active" aria-current="page" href="#">
//                     Home
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// }
// import React, { useState } from "react";
// import {
// MDBNavbar,
// MDBNavbarNav,
// MDBNavbarItem,
// MDBNavbarLink,
// MDBNavbarToggler,
// MDBContainer,
// MDBIcon,
// MDBCollapse,
// MDBBtn,
// } from "mdb-react-ui-kit";

export function Header() {
  // const [showBasic, setShowBasic] = useState(false);

  return (
    <header>
      <div
        className="p-4 text-center bg-image"
        // style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: "200px" }}
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
    </header>
  );
}
