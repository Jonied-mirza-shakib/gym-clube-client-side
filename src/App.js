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
import ContactUs from './Component/ContactUs/ContactUs';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';
import Dashboard from './Component/Dashboard/Dashboard';
import MyProfile from './Component/Dashboard/MyProfile';
import AllUser from './Component/Dashboard/AllUser';
import AllProduct from './Component/Dashboard/AllProduct';
import ProgramingPricing from './Component/Dashboard/ProgramingPricing';
import AllBlog from './Component/Dashboard/AllBlog';

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
      <Route path='dashboard' element={<Dashboard></Dashboard>}>
      <Route index element={<MyProfile></MyProfile>}></Route>
      <Route path='allUser' element={<AllUser></AllUser>}></Route>
      <Route path='programingPricing' element={<ProgramingPricing></ProgramingPricing>}></Route>
      <Route path='allPricing' element={<AllProduct></AllProduct>}></Route>
      <Route path='allBlog' element={<AllBlog></AllBlog>}></Route>
      </Route>
      <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signUp' element={<SignUp></SignUp>}></Route>
    </Routes>
    <Footer></Footer>
    <ToastContainer />
   </div>
  );
}

export default App;
