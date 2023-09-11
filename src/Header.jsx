export function Header() {
  return (
    <header>
      <div id="header">
        {/* <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
          <a className="navbar-brand" href="#">
            <img
              src="https://webstockreview.net/images/document-clipart-recordkeeping-3.png"
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-text-top"
            />{" "}
          </a>
        </nav>

        <nav className="navbar bg-primary" data-bs-theme="dark">
          <a href="#">Home</a>
        </nav>

        <nav className="navbar" style="background-color: #e3f2fd;">
          <a href="https://duckduckgo.com">DuckDuckGo</a>
        </nav> */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                // src="https://webstockreview.net/images/document-clipart-recordkeeping-3.png"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.BV43a2BrIUM8qjDjrvc7qwAAAA%26pid%3DApi&f=1&ipt=4160856102513c9e73f01ee194d7505c59afa428aec424075ca30a19d2b2e770&ipo=images"
                alt="Logo"
                width="70"
                height="70"
                className="d-inline-block align-text-top"
              />{" "}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://duckduckgo.com">
                    DuckDuckGo
                  </a>
                </li>

                {/* <li className="nav-item">
                  <LogoutLink />
                </li> */}
                {/* <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">
                    Disabled
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
