import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'
import HomeScreen from "./pages/home";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
