import logo from './logo.svg';
import './App.css';
import { Routes,Route,BrowserRouter} from 'react-router-dom';
import Nav from './components/Nav';  
import Footer from './components/Footer';
import H_A from './components/H_A';
import L_aptn from './components/L_aptn';
import L_list from './components/L_list';
import P_aptn from './components/P_aptn';
import P_list from './components/P_list';
import R_aptn from './components/R_aptn';
import R_list from './components/R_list';
import Logout from './components/Logout';
import Report from './components/Report';
import All_r from './components/All_r';
import Pen_r from './components/Pen_r';
import Ap_r from './components/Ap_r';
import Rej_r from './components/Rej_r';




function App() {
  return (
  
      <>
      <Nav/>
      <Routes>
        <Route path='/' element={<H_A/>}/>
        
        <Route path='L_list' element={<L_list/>}/>
        
        <Route path='P_list' element={<P_list/>}/>
        
        <Route path='R_list' element={<R_list/>}/>
        <Route path='R_aptn' element={<R_aptn/>}/>
        <Route path='L_aptn' element={<L_aptn/>}/>
        <Route path='P_aptn' element={<P_aptn/>}/>
        <Route path='Report' element={<Report/>}/>
        <Route path='Logout' element={<Logout/>}/>
        <Route path='All_r' element={<All_r/>}/>
        <Route path='Pen_r' element={<Pen_r/>}/>
        <Route path='Rej_r' element={<Rej_r/>}/>
        <Route path='Ap_r' element={<Ap_r/>}/>
        
      </Routes>
      <Footer/>
      </>
   
  );
}

export default App;
