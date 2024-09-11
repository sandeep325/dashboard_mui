import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import Settings from "./Components/Pages/Settings/Settings";
import About from "./Components/Pages/About/About";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Analytics from "./Components/Pages/Analytics/Analytics";
import  "./App.css";
import Products from "./Components/Pages/Products/Products";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Dashboard/>}></Route>
          <Route path="/analytics" exact element={<Analytics/>}></Route>
          <Route path="/settings" exact element={<Settings/>}></Route>
          <Route path="/about" exact element={<About/>} ></Route>
          <Route path="/products" exact element={<Products/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
