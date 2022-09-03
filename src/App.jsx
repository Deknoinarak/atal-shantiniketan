import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./assets/components/Navbar";
import Home from "./routes/Home";

function App() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <div>
        <button
          onClick={() => {
            localStorage.theme = "light";
          }}
        >
          Light
        </button>
        <button
          onClick={() => {
            localStorage.theme = "dark";
          }}
        >
          Dark
        </button>
        <button onClick={() => localStorage.removeItem("theme")}>System</button>
      </div>
    </BrowserRouter>
  );
}

export default App;
