import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Home from "./home/home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
        <div className="flex flex-row bg-dark-gray text-center font-bold items-center space-x-4 text-white">
            <div>
                <div className="pl-4 text-2xl">Sales App</div>
            </div>
            <div>
              <button type="button" className="text-lg">
                <NavLink to="/">
                Home
                </NavLink>
              </button>
            </div>
        </div>
        </header>
        <div className="flex items-center justify-center h-screen bg-white-gray">
          <Routes>
            <Route path="/" element={<Home/>} exact/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
