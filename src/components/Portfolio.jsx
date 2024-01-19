import pokedexImage from "../assets/pokedexImage.webp";
import MovieSearch from "../assets/MovieSearch.jpg";
import ticTacToeIcon from "../assets/ticTacToeIcon.png";
import counterAppIcon from "../assets/counterAppIcon.jpg";
import signupIcon from "../assets/signupIcon.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: pokedexImage,
    },
    {
      id: 2,
      src: MovieSearch,
    },
    {
      id: 3,
      src: ticTacToeIcon,
    },
    {
      id: 4,
      src: counterAppIcon,
    },
    {
      id: 5,
      src: signupIcon,
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full  border-white">
        <div className="pb-5">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-4">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-3 md:grid-cols-5 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105"
            >
              <img src={src} alt="" className="rounded-md  h-32 w-full" />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-4  m-2 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-4  m-3 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
