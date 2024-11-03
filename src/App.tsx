import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbars/navbar";
import Section from "./view/Section";
import DetailProject from "./view/DetailProject";

function App() {
  return (
    <>
      <div className="items-center">
        <Router basename="/Landingpage-KedaiProgrammer">
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Section />}></Route>
            <Route path="/detail" element={<DetailProject />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
