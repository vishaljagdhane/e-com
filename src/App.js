import logo from './logo.svg';
import './App.css';
import StickyHeaderTable from './Custom-table/StickyHeaderTable';
import{BrowserRouter,Routes,Route}from 'react-router-dom';
import NagivationBar from './Nagivation-pages/NagivationBar';
import Home_pages from './Nagivation-pages/Home_pages';
import User_Register from './Nagivation-pages/User_Register';
import SapMM_Moudel from './Custom-table/SAPMM/SapMM_Moudel';
import Create_Vendor from './Custom-table/SAPMM/Create_Vendor';
function App() {
  return (
    <>
<BrowserRouter>
<Routes>
<Route path='/' element={<NagivationBar/>}></Route>
<Route path='/Home-page' element={<Home_pages/>}></Route>
<Route path='/User-Register' element={<User_Register/>}></Route>
<Route path='/User-DataTable' element={<StickyHeaderTable/>}></Route>
<Route path='/Sap-MM' element={<SapMM_Moudel/>}></Route>
<Route path='/Create-Venodor' element={<Create_Vendor/>}></Route>
</Routes>

</BrowserRouter>

    </>
  );
}

export default App;
