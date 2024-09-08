import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import Settings from "./Components/Pages/Settings/Settings";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Dashboard/>}></Route>
          <Route path="/settings" exact element={<Settings/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
