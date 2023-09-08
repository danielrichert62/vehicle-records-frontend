export function Header() {
  //   return (
  //     <header>
  //       <nav>
  //         <a href="https://webstockreview.net/images/document-clipart-recordkeeping-3.png"></a> <a href="#">Home</a> |{" "}
  //         <a href="https://duckduckgo.com">DuckDuckGo</a>
  //       </nav>
  //     </header>
  //   );
  // }
  return (
    <header>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://webstockreview.net/images/document-clipart-recordkeeping-3.png"
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-text-top"
            />{" "}
          </a>
          <a href="#">Home</a> | <a href="https://duckduckgo.com">DuckDuckGo</a>
        </div>
      </nav>
    </header>
  );
}
