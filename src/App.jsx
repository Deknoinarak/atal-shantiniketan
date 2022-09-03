import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./assets/components/Navbar";
import Home from "./routes/Home";
import { MoonIcon, SunIcon, ComputerDesktopIcon } from "@heroicons/react/24/solid"

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
      <div className="flex justify-end bg-lime-500 dark:bg-sky-600">
        <div className="grid grid-cols-3 my-2 mr-3 gap-5">
          <button
            className="bg-slate-300 text-black rounded p-2 text-sm font-medium flex items-center justify-center"
            onClick={() => switchDark(false)}
          >
            <SunIcon className="h-5 w-5 mr-2"/> Light
          </button>
          <button
            className="bg-gray-800 text-white rounded p-2 font-medium flex items-center justify-center text-sm"
            onClick={() => switchDark(true)}
          >
            <MoonIcon className="h-5 w-5 mr-2"/> Dark
          </button>
          <button
            className="bg-yellow-300 text-black rounded p-2 font-medium flex items-center justify-center text-sm"
            onClick={() => switchDark("s")}
          >
            <ComputerDesktopIcon className="h-5 w-5 mr-2"/> System
          </button>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
