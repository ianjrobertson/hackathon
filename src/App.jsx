import Home from "./home/home";
import { Route, Routes } from 'react-router-dom'
import Header from "./header/header";
import Map from "./map/map"
import About from "./about/about";
import Login from "./login/login";
import NotFound from "./notFound";

function App() {

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-primary to-secondary">
      <div className="h-18">
        <Header />
      </div>
      <main className="h-full">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/map' element={<Map />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />

        </Routes>
      </main>

    </div>
  )
}

export default App
