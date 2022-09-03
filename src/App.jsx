import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="about" element={<About />} /> */}
    </Routes>
  </BrowserRouter>;
}

export default App;
