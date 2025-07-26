import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Veg from  "./pages/veg";
import Dessert from "./pages/dessert";
import Nonveg from "./pages/nonveg";
import Beverages from "./pages/beverages";
import "./styles/animations.css";
import PaneerButterMasala from "./components/recipes/PaneerButterMasala";
import DalMaKhani from "./components/recipes/DalMakhani";
import PalakSoup from "./components/recipes/PalakSoup";
import VegetableBiryani from "./components/recipes/VegetableBiryani"; 
import ButterChicken from "./components/recipes/ButterChicken";
import Prawn from "./components/recipes/Prawn";
import Fish from "./components/recipes/Fish";
import Biryani from "./components/recipes/Biryani";
import Thandai from "./components/recipes/Thandai";
import GulabJamun from "./components/recipes/GulabJamun";
import Rasgulla from "./components/recipes/Rasgulla";
import Jalebi from "./components/recipes/Jalebi";
import Falooda from "./components/recipes/Falooda";
import Lassi from "./components/recipes/Lassi";
import Coffee from "./components/recipes/Coffee";
import MasalaChai from "./components/recipes/MasalaChai";
import UserProfile from "./pages/UserProfile";
import AddRecipe from "./pages/AddRecipe";
import About from "./pages/About";
import NotFoundPage from './pages/NotFound';
import ErrorPage from './pages/ErrorPage';
import RecipeHome from "./pages/RecipeHome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";



  function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      const user = localStorage.getItem("username");
      setIsLoggedIn(!!user);
    }, []);

    return (
      <Router>
        <div className="app-container">
          <Header />
          <Routes>
            <Route path="/" element={<RecipeHome />} />
            <Route path="/login" element={<div className="login-bg"><Login setIsLoggedIn={setIsLoggedIn} /></div>} />
            <Route path="/register" element={<div className="register-bg"><Register setIsLoggedIn={setIsLoggedIn} /></div>} />
            <Route path="/home" element={<RecipeHome />} />
            <Route path="/veg" element={<Veg />}/>
            <Route path="/dessert" element={<Dessert />} />
            <Route path="/nonveg" element={<Nonveg />} />
            <Route path="/beverages" element={<Beverages />} />
            <Route path="/recipe/paneer-butter-masala" element={<PaneerButterMasala />} />
            <Route path="/recipe/dal-makhani" element={<DalMaKhani />} />
            <Route path="/recipe/palak-soup" element={<PalakSoup />} />
            <Route path="/recipe/vegetable-biryani" element={<VegetableBiryani />} />
            <Route path="/recipe/butter-chicken" element={<ButterChicken />} />
            <Route path="/recipe/prawn" element={<Prawn />} />
            <Route path="/recipe/fish" element={<Fish />} />
            <Route path="/recipe/biryani" element={<Biryani />} />
            <Route path="/recipe/thandai" element={<Thandai />} />
            <Route path="/recipe/gulub-jamun" element={<GulabJamun />} />
            <Route path="/recipe/rasgulla" element={<Rasgulla />} />
            <Route path="/recipe/jalebi" element={<Jalebi />} />
            <Route path="/recipe/falooda" element={<Falooda />} />
            <Route path="/recipe/lassi" element={<Lassi />} />
            <Route path="/recipe/coffee" element={<Coffee />} />
            <Route path="/recipe/masala-chai" element={<MasalaChai />} />
            <Route path="/profile" element={<UserProfile />} /> 
            <Route path="/add-recipe" element={<AddRecipe />} />
            <Route path="/about" element={<About />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>  );
  }export default App;