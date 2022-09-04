import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Footer from './Component/Footer/Footer';

function App() {
  return (
   <div>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
    </Routes>
    <Footer></Footer>
    <ToastContainer />
   </div>
  );
}

export default App;
