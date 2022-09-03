import React from "react";
import { Navbar as Nav, Dropdown, Avatar } from "flowbite-react";
import NitiAimLogoColor from "../img/niti-aim-logo.png";
import NitiAimLogoWhite from "../img/niti-aim-logo-white.png";
import { MoonIcon } from "@heroicons/react/24/outline";

function switchTheme(theme) {
  if (theme = "s") {
    localStorage.removeItem('theme')
    console.log("System")
  }
  else if (theme) {
    localStorage.theme = 'dark'
    console.log("dark")
  }
  else {
    localStorage.theme = 'light'
    console.log("light")
  }
  
}

export const Navbar = () => {
  return (
    <Nav fluid>
      <Nav.Brand href="/">
        <img
          src={NitiAimLogoColor}
          className="dark:hidden mr-3 my-2 h-16 ml-5"
          alt="NITI AIM Logo"
        />
        <img
          src={NitiAimLogoWhite}
          className="dark:block mr-3 my-2 h-16 ml-5"
          alt="NITI AIM Logo"
        />
      </Nav.Brand>

      <div className="flex md:order-2">
        <div className="mr-5">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <MoonIcon className="w-6 h-6 ml-5 dark:text-white stroke-2 text-gray-800"/>
            }
          >
            <Dropdown.Item><button onClick={() => switchTheme("s")}>System</button></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item><button onClick={() => switchTheme(true)}>Dark</button></Dropdown.Item>
            <Dropdown.Item><button onClick={() => switchTheme(false)}>Light</button></Dropdown.Item>
          </Dropdown>
        </div>

        <Nav.Toggle />
      </div>
      <Nav.Collapse>
        <Nav.Link href="/" active>
          Home
        </Nav.Link>
        <Nav.Link href="/">About</Nav.Link>
      </Nav.Collapse>
    </Nav>
  );
};
