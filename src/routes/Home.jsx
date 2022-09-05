import React from "react";

export const Home = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slideContents = [
    {
      image: "/shantiniketan-logo.png",
      title: "About Us",
      desc: `ATL is a workspace where young minds can give shape to their
    ideas through hands on do-it-yourself mode; and learn
    innovation skills...`,
      btn: "Learn more >",
      link: "/about",
    },
    {
      image: "",
      title: "Information",
      desc: ``,
      btn: "Learn more >",
      link: "#information",
    },
  ];

  const handleNext = () => {
    if (currentSlide + 1 > slideContents.length - 1) {
      setCurrentSlide(0);
      return;
    }

    setCurrentSlide(currentSlide + 1);
  };

  return (
    <div>
      <div>
        {slideContents.map((e, i) => (
          <div key={i}>
            {currentSlide === i && (
              <div
                className="w-full h-screen bg-no-repeat bg-local bg-right flex flex-col sm:flex-row justify-between p-5"
                style={{
                  backgroundImage: `url("${e.image}")`,
                }}
              >
                <div className="flex items-center justify-center max-w-sm min-w-full sm:min-w-min">
                  <div className="bg-gray-700/50 hover:bg-gray-900/90 transition-all py-12 px-12 rounded flex flex-col justify-center">
                    <span className="mb-2 block font-bold text-xl uppercase">
                      {e.title}
                    </span>
                    <hr />
                    <div className="mt-2">
                      <p>{e.desc}</p>
                      <a
                        className="py-2 px-5 bg-sky-600 mt-3 rounded font-semibold block"
                        href={e.link}
                      >
                        {e.btn}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className="px-5 bg-slate-50 text-gray-800 rounded py-3 font-bold hover:underline hover:text-blue-800 transition-all"
                    onClick={handleNext}
                  >
                    Next &gt;
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="container sm:mx-auto py-5 px-5"></div>
    </div>
  );
};
