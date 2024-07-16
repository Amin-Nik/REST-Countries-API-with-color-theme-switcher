import HomePage from "./pages/HomePage/HomePage"
import { Routes, Route } from 'react-router-dom';
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
      <NavBar />
      <Routes>
        <Route path="/REST-Countries-API-with-color-theme-switcher" element={<HomePage />} />
        <Route path="/REST-Countries-API-with-color-theme-switcher/:id" element={<CountryPage />} />
      </Routes>
    </>
  )
}

export default App
