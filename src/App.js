import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css"
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from "./Pages/home/Home.jsx";
import UserList from "./Pages/userList/UserList";
import User from "./Pages/user/User";
//@ts-ignore
import NewUser from "./Pages/NewUser/NewUser";
import ProductList from "./Pages/productList/ProductList";
import Product from "./Pages/product/product";
import NewProduct from "./Pages/NewProduct/NewProduct";

function App() {

  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/users' element={<UserList/>}/>
          <Route exact path='/user/:userId' element={<User/>}/>
          <Route exact path='/newUser' element={<NewUser/>}/>
          <Route exact path='/product' element={<ProductList/>}/>
          <Route exact path='/product/:productId' element={<Product/>}/>
          <Route exact path='/newproduct' element={<NewProduct/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
