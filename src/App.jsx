import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Header } from "./header/header";
import Home from "./home/home";
import Map from "./map/map"

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <main>
        <div className="flex items-center justify-center h-screen bg-white-gray">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </div>
      </main>    
    </>
  );
}

export default App;
