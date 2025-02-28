import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SupplierLogin from "./pages/SupplierLogin";
import CustomerLogin from "./pages/CustomerLogin";
import SupplierRegister from "./pages/SupplierRegister";
import CustomerRegister from "./pages/CustomerRegister";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="container mx-auto p-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/supplier/login" element={<SupplierLogin />} />
          <Route path="/supplier/register" element={<SupplierRegister />} />
          <Route path="/customer/login" element={<CustomerLogin />} />
          <Route path="/customer/register" element={<CustomerRegister />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// Home.js
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Welcome</h1>
      <Link to="/supplier/login" className="btn btn-primary">Supplier Login</Link>
      <Link to="/customer/login" className="btn btn-secondary">Customer Login</Link>
    </div>
  );
}
export default Home;

// SupplierLogin.js
function SupplierLogin() {
  return <div><h2>Supplier Login</h2></div>;
}
export default SupplierLogin;

// CustomerLogin.js
function CustomerLogin() {
  return <div><h2>Customer Login</h2></div>;
}
export default CustomerLogin;

// SupplierRegister.js
function SupplierRegister() {
  return <div><h2>Supplier Register</h2></div>;
}
export default SupplierRegister;

// CustomerRegister.js
function CustomerRegister() {
  return <div><h2>Customer Register</h2></div>;
}
export default CustomerRegister;
