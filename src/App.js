import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Application from "./components/Application";
import Profile from "./components/Profile";
import Terms from "./components/Terms";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} path='/' exact/>
          <Route element={<Application/>} path='/application' exact/>
          <Route element={<Profile/>} path='/profile' exact/>
          <Route element={<Terms/>} path='/terms' exact/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
