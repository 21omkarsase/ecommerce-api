import { useEffect } from "react";
import Header from "./component/Layout/Header/Header.js";
import { Route, Routes } from "react-router";
import webFont from "webfontloader";
import Footer from "./component/Layout/Footer/Footer.js";
import Home from "./component/Home/Home";

function App() {
  useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
