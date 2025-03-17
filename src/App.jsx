import Home from "./home/home";
import { Route, Routes } from 'react-router-dom'
import Header from "./header/header";
import Map from "./map/map"
import About from "./about/about";
import Login from "./login/login";
import NotFound from "./notFound";
import Survey from "./survey/survey";

function App() {

  return (
    <div className="flex flex-col h-screen">
      <div>
        <Header />
      </div>
      <main className="flex-auto bg-gradient-to-r from-primary to-secondary"> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/map' element={<Map />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/survey' element={<Survey />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>

    </div>
  )
}

export default App
