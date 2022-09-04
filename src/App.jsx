import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./assets/components/Navbar";
import { Home } from "./routes/Home";
import { About } from "./routes/About";
import {
  MoonIcon,
  SunIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";

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
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="flex sm:justify-end bg-lime-500 dark:bg-sky-600">
          <div className="grid sm:grid-cols-3 my-2 mx-3 sm:gap-5 gap-2 w-full sm:w-auto">
            <button
              className="bg-slate-300 text-black rounded p-2 text-sm font-medium flex items-center justify-center"
              onClick={() => switchDark(false)}
            >
              <SunIcon className="h-5 w-5 mr-2" /> Light
            </button>
            <button
              className="bg-gray-800 text-white rounded p-2 font-medium flex items-center justify-center text-sm"
              onClick={() => switchDark(true)}
            >
              <MoonIcon className="h-5 w-5 mr-2" /> Dark
            </button>
            <button
              className="bg-yellow-300 text-black rounded p-2 font-medium flex items-center justify-center text-sm"
              onClick={() => switchDark("s")}
            >
              <ComputerDesktopIcon className="h-5 w-5 mr-2" /> System
            </button>
          </div>
        </div>

        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
