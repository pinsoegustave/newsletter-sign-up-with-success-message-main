import './App.css'
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Success from './Components/Success';

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path='/success' element={<Success />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}