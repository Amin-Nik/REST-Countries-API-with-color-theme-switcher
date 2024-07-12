import HomePage from "./pages/HomePage/HomePage"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./component/NavBar/NavBar";
import CountryPage from "./pages/CountryPage/CountryPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getData } from "./utils/fetcherAPI";
import { addCountry } from "./redux/countrySlice";
import "./App.css"

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    (async function () {
      const data = await getData("https://restcountries.com/v3.1/all");
      dispatch(addCountry(data))
    })()
  }, [])

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<CountryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
