import { Outlet } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavigationComponents/Navbar";
import Footer from "./components/NavigationComponents/Footer";
import BasketContextProvider from "./context/BasketCount";
import "./tailwind.css";

function App() {
  const [auth, setAuth] = useState({ id: 1, city: "Stockholm" });

  return (
    <div className="font-cbnormal">
      <BasketContextProvider>
        <NavBar />
        <Outlet context={{ auth, setAuth }} />
        <Footer />
      </BasketContextProvider>
    </div>
  );
}

export default App;
