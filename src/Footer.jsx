/* eslint-disable no-unused-vars */
import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

export function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <br />
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Vehicle Record Keeper
              </h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-0">
              <h6 className="fw-bold mb-4">Links</h6>
              <a href="https://google.com" className="text-reset">
                Google
              </a>
              <br />
              <a href="https://facebook.com" className="text-reset">
                Facebook
              </a>
              <br />
              <a href="https://linkedin.com#!" className="text-reset">
                LinkedIn
              </a>
              <br />
              <a href="https://twitter.com" className="text-reset">
                Twitter
              </a>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-1" /> Round Lake Beach, IL 60073, US
                <br />
                <MDBIcon icon="envelope" className="me-1" /> info@example.com
                <br />
                <MDBIcon icon="phone" className="me-1" /> 847-555-2121
                <br />
                <MDBIcon icon="print" className="me-1" /> 847-555-1212
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        {" "}
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          {" "}
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}
