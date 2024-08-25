import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup.jsx';
import Cart from './Pages/Cart.jsx';
import Shop from './Pages/Shop.jsx';
import ShopCategory from './Pages/ShopCategory.jsx';
import Product from './Pages/Product.jsx';
import AdminPanel from './Pages/AdminPanel.jsx';
import AddProduct from './components/AdminComponents/AddProduct/AddProduct.jsx';
import ListProduct from './components/AdminComponents/ListProduct/ListProduct.jsx';
import Login from './Pages/Login.jsx';
import PrivateRoute from './components/PrivateRoute'; 
import About from './components/About/About'; 
import Contact from './components/Contact/Contact'; 

import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png';
import kid_banner from './components/Assets/banner_kids.png';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />

          {/* Admin Routes */}
          <Route path='/admin' element={<Login />} />
          <Route
            path='/admin/dashboard'
            element={
              <PrivateRoute>
                <AdminPanel />
              </PrivateRoute>
            }
          />
          <Route
            path='/admin/addproduct'
            element={
              <PrivateRoute>
                <AddProduct />
              </PrivateRoute>
            }
          />
          <Route
            path='/admin/listproduct'
            element={
              <PrivateRoute>
                <ListProduct />
              </PrivateRoute>
            }
          />
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
