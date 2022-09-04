import logo from './logo.svg';
import './App.css';
import Regis from './Component/Regis';
import { Route, Router, Routes } from 'react-router-dom';
import Login from './Component/Login';
import Detalis from './Component/Detalis';

function App() {
  return (
    <div className="App">
 
 <Routes>
  <Route path='/' element={<Regis/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/detalis' element={<Detalis/>}></Route>
 </Routes>
    </div>
  );
}

export default App;
