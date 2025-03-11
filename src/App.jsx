import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Header } from "./header/header";
import Home from "./home/home";
import Map from "./map/map"
import Login from "./login/login";
import { NotFound } from "./notFound";


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
            <Route path="/Login" element={<Login />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </main>    
    </>
  );
}

export default App;
