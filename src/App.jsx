import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import { Home } from "./routes/Home";
import { About } from "./routes/About";
import { Footer } from "./assets/components/Footer";
import { Images } from "./routes/Images";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/images" element={<Images />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
