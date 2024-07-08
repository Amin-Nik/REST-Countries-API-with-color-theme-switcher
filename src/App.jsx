import HomePage from "./pages/HomePage"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./component/NavBar/NavBar";
import "./App.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
