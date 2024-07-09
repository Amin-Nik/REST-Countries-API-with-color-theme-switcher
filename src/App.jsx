import HomePage from "./pages/HomePage/HomePage"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./component/NavBar/NavBar";
import "./App.css"
import CountryPage from "./pages/CountryPage/CountryPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:id" element={<CountryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
