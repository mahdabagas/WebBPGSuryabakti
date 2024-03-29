import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;
