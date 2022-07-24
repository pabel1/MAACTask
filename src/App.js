import { Route, Routes } from 'react-router-dom';
import './App.css';
import AreaCreate from './Pages/AreaCreate/AreaCreate';
import AreaList from './Pages/AreaList/AreaList';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RegionCreate from './Pages/RegionCreate/RegionCreate';
import RegionList from './Pages/RegionList/RegionList';
import Registration from './Pages/Registration/Registration';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route index element={<RegionList/>}></Route>
          <Route path='regioncreate' element={<RegionCreate/>}></Route>
          <Route path='arealist' element={<AreaList/>}></Route>
          <Route path='areacreate' element={<AreaCreate/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
