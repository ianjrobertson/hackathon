import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Home from "./home/home";
import Survey from "./survey/survey";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
        <div className="flex flex-row bg-dark-gray text-center font-bold items-center space-x-4 text-white">
            <div>
                <div className="pl-4 text-2xl">Sales App</div>
            </div>
            <div className="flex flex-row space-x-2">
              <button type="button" className="text-lg">
                <NavLink to="/">
                Home
                </NavLink>
              </button>
              <button type="button" className="text-lg">
                <NavLink to="/survey">
                  Rep Survey
                </NavLink>
              </button>
            </div>
        </div>
        </header>
        <div className="h-screen bg-white-gray pt-5">
          <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/survey" element={<Survey/>} exact/>
          </Routes>
        </div>
      </div> 
    </BrowserRouter>
  );
}

export default App;
