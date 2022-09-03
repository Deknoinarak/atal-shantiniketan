import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./assets/components/Navbar";
import Home from "./routes/Home";

function switchDark(theme) {
  if (theme === "s") {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  } else if (theme) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
}

function App() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    switchDark(true);
  } else {
    switchDark(false);
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <div>
        <button
          className="bg-slate-300 mr-3 ml-4 mt-5 text-black rounded p-3 font-medium"
          onClick={() => switchDark(false)}
        >
          Light
        </button>
        <button
          className="bg-gray-800 mr-3 text-white rounded p-3 font-medium"
          onClick={() => switchDark(true)}
        >
          Dark
        </button>
        <button
          className="bg-yellow-300 mr-3 text-black rounded p-3 font-medium"
          onClick={() => switchDark("s")}
        >
          System
        </button>
      </div>
    </BrowserRouter>
  );
}

export default App;
