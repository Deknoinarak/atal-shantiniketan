import React from "react";
import { ImageDisplay } from "../assets/components/ImageDisplay";
import images from "../ImagesList.json";
import { createBrowserHistory } from "history";

export const Images = () => {
  const PrimaryRef = React.useRef(null);
  const SecondaryRef = React.useRef(null);
  const SrSecondaryRef = React.useRef(null);
  const AllRef = React.useRef(null);

  let history = createBrowserHistory();

  React.useEffect(() => {
    return history.listen(({ location }) => {
      switch (location.hash) {
        case "#primary":
          PrimaryRef.current.scrollIntoView({
            block: "center",
            behavior: "smooth",
          });
          break;
        case "#secondary":
          SecondaryRef.current.scrollIntoView({
            block: "center",
            behavior: "smooth",
          });
          break;
        case "#srsecondary":
          SrSecondaryRef.current.scrollIntoView({
            block: "center",
            behavior: "smooth",
          });
          break;
        case "#all":
          AllRef.current.scrollIntoView({ block: "center", behavior: "smooth" });
          break;
        default:
      }
    });
  }, [history]);

  React.useEffect(() => {
    switch (window.location.hash) {
      case "#primary":
        PrimaryRef.current.scrollIntoView({
          block: "center",
          behavior: "smooth",
        });
        break;
      case "#secondary":
        SecondaryRef.current.scrollIntoView({
          block: "center",
          behavior: "smooth",
        });
        break;
      case "#srsecondary":
        SrSecondaryRef.current.scrollIntoView({
          block: "center",
          behavior: "smooth",
        });
        break;
      case "#all":
        AllRef.current.scrollIntoView({ block: "center", behavior: "smooth" });
        break;
    }
  }, []);

  return (
    <div className="container mx-auto p-5 my-5 flex flex-col">
      <div className="flex flex-col mb-5" ref={PrimaryRef}>
        <h1 className="text-3xl font-bold mb-5">Primary</h1>
        <ImageDisplay images={images.primary} />
      </div>
      <div className="flex flex-col mb-5" ref={SecondaryRef}>
        <h1 className="text-3xl font-bold mb-5">Secondary</h1>
        <ImageDisplay images={images.secondary} />
      </div>
      <div className="flex flex-col mb-5" ref={SrSecondaryRef}>
        <h1 className="text-3xl font-bold mb-5">Sr. Secondary</h1>
        <ImageDisplay images={images.srsecondary} />
      </div>
      <div className="flex flex-col mb-5" ref={AllRef}>
        <h1 className="text-3xl font-bold mb-5">All images</h1>
        <ImageDisplay images={images.all} />
      </div>
    </div>
  );
};
