import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./web/MainPage";
import HospitalList from "./web/HospitalList";
import Card from "./web/Card";
import Claims from "./web/Claims";
import Comparison from "./web/Comparison";
import Gene from "./web/Gene";
import ShopList from "./web/ShopList";
import Support from "./web/Support";
import AdminLogin from "./web/admin/AdminLogin";
import CustomerList from "./web/admin/CustomerList";
import Registration from "./web/admin/Registration";
import CustomerModify from "./web/admin/CustomerModify";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/:url' element={<MainPage/>}/>
                <Route path='/hospitalList/:url' element={<HospitalList/>}/>
                <Route path='/card/:url' element={<Card/>}/>
                <Route path='/claims/:url' element={<Claims/>}/>
                <Route path='/comparison/:url' element={<Comparison/>}/>
                <Route path='/gene/:url' element={<Gene/>}/>
                <Route path='/shopList/:url' element={<ShopList/>}/>
                <Route path='/support/:url' element={<Support/>}/>

                {/*  관리자 페이지  */}
                <Route path='/admin' element={<AdminLogin/>}/>
                <Route path='/admin/main' element={<CustomerList/>}/>
                <Route path='/admin/customer/register' element={<Registration/>}/>
                <Route path='/admin/customer/modify/:customerIdx' element={<CustomerModify/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;