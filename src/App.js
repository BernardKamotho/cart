import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Getproducts from "./components/Getproducts";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Addproducts from "./components/Addproducts";
import Makepayment from "./components/Makepayment";
import "./App.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./components/Aboutus";
import Notfound from "./components/Notfound";
import Cart from "./components/Cart"; 
import Chatbox from "./components/Chatbox";

import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {
  return (
      <Router>
        <div className="App backstyling">
          <header className="App-header">
            <h1>Frankizah Shoe Collection</h1>
            <p>Your one-stop shop for quality footwear!</p>
          </header>

          <Navbar />

          <Routes>
            <Route path="/" element={<Getproducts />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/addproducts" element={<Addproducts />} />
            <Route path="/makepayment" element={<Makepayment />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/chatbox" element={<Chatbox />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
