/* eslint-disable no-unused-vars */
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import "./bootstrap.min.css"; // Added this :boom:

function App() {
  const [flashMessage, setFlashMessage] = useState("");

  useEffect(() => {
    if (localStorage.flashMessage) {
      setFlashMessage(localStorage.flashMessage);
      localStorage.removeItem("flashMessage");
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <div>
          <h1>{flashMessage}</h1>
        </div>
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
