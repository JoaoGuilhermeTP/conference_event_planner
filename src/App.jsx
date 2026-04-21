import React, { useState } from "react";
import "./App.css";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import MainPage from "./pages/MainPage/MainPage";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {

  const [showVenue, setShowVenue] = useState(false);
  
  return (
    <>
      <WelcomePage showVenue={showVenue} setShowVenue={setShowVenue} />
      <div className={`event-list-container ${showVenue ? 'visible' : ''}`}>
        <MainPage />
      </div>
    </>
  );
}

export default App;
