import { Route, Routes } from "react-router-dom";
import { Header } from "./header/header";
import Home from "./home/home";
import Map from "./map/map"
import Login from "./login/login";
import { NotFound } from "./notFound";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
      <main className="flex-grow">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/Login" element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
