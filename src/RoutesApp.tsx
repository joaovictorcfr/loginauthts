import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importação das paginas
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Menu from "./Pages/Menu/Menu";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Search from "./Pages/Search/Search";
import Car from "./Pages/Car/Car";
import { Protected } from "./Components/ProtectedLayout/Protected";
import { AuthProvider } from "./Context/AuthProvider/Auth";


function RoutersApp() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/car" element={<Car />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Protected><Home /></Protected>} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    );
  }

export default RoutersApp;
