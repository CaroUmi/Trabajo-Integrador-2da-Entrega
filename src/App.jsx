import './App.css'
import Header from './layout/heder/Header';
import Home from './pages/home/Home';
import Footer from './layout/footer/Footer';
import Login from './pages/login/Login';
import Contacto from './pages/contacto/Contacto';
import AboutUs from './pages/about-us/AboutUs';
import Register from './pages/register/Register';
import AdminProduct from './pages/admin-product/AdminProduct';
import AdminUsers from './pages/admin-users/AdminUsers';
import ProductDetail from './pages/product-detail/ProductDetail';
import { Route, Routes } from 'react-router-dom';
import AdminGuard from './services/guard/AdminGuard';
import NotFound from './pages/not-found/NotFound';


// Clase 44 - 0:13 min visto


function App() {
  // const isAdmin = false;

  return (
    <>
      <Header />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contacto />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />

          {/* ruta con parametro (id) */}
          <Route path="/product-detail/:id" element={<ProductDetail />} />

          <Route path="/admin-product" element={
            <AdminGuard>
              <AdminProduct />
            </AdminGuard>
          } />
          <Route path="/admin-users" element={
            <AdminGuard>
              <AdminUsers />
            </AdminGuard>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
