import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbars/navbar";
import Section from "./view/Section";
import DetailProject from "./view/DetailProject";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Section />}></Route>
          <Route
            path="/detail"
            element={<DetailProject idproject="" />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
