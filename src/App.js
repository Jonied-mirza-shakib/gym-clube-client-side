import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Footer from './Component/Footer/Footer';
import About from './Component/About/About';
import Trainer from './Component/Trainer/Trainer';
import Shop from './Component/Shop/Shop';
import Blog from './Component/Blog/Blog';

function App() {
  return (
   <div>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/trainer' element={<Trainer></Trainer>}></Route>
      <Route path='/shop' element={<Shop></Shop>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
    </Routes>
    <Footer></Footer>
    <ToastContainer />
   </div>
  );
}

export default App;
