import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./web/MainPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/:url' element={<MainPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;