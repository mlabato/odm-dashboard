import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./store/auth-context";

import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import ProductCreate from "./components/pages/ProductCreate";
import ProductEdit from "./components/pages/ProductEdit";
import AdminRegister from "./components/pages/AdminRegister";
import Admin from "./components/pages/Admin";
import AdminEdit from "./components/pages/AdminEdit";

function App() {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <Routes>
      {!isLoggedIn && <Route path="/login" element={<Login />} />}

      {isLoggedIn && <Route path="/" element={<Home />} />}
      {isLoggedIn && <Route path="/create" element={<ProductCreate />} />}

      {isLoggedIn && <Route path="/edit/:id" element={<ProductEdit />} />}

      {isLoggedIn && <Route path="/admin" element={<Admin />} />}

      {isLoggedIn && (
        <Route path="/admin/create" element={<AdminRegister />} />
      )}

      {isLoggedIn && (
        <Route path="/dashboard/editadmin/:id" element={<AdminEdit />} />
      )}

      {isLoggedIn && <Route path="/edit/:id" element={<ProductEdit />} />}
          
    
      {!isLoggedIn && <Route path="*" element={<Navigate to="/login" />} />}
      {isLoggedIn && <Route path="/login" element={<Navigate to="/" />} />}

      {console.log(isLoggedIn)}
    </Routes>
    
  );
}

export default App;
