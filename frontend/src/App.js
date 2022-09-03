import { useEffect } from "react";
import Header from "./component/Layout/Header/Header.js";
import { BrowserRouter as Router } from "react-router-dom";
import webFont from "webfontloader";
import Footer from "./component/Layout/Footer/Footer.js";

function App() {
  useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <Router>
      <Header />
      <Footer />
    </Router>
  );
}

export default App;
