import { Link } from "react-router-dom";

import { dataTrending } from "~/services";

function Trending() {
  

  return (
    <div className="max-w-[1300px] m-auto">
      <div className="">
        <div className="flex items-center gap-5 mt-10">
          <h2 className="text-2xl font-semibold px-5 md:px-0">Trending</h2>
          <div className="rounded-full flex items-center space-x-2 border border-solid border-[#032541]">
            <p className="bg-[#032541] py-1 px-3 rounded-full inline-flex items-center text-[#52c4a3] font-semibold">
              Today
            </p>
            <a
              href="#"
              className="pr-3 text-[#032541] font-medium hover:text-blue-500 transition duration-300"
            >
              This week
            </a>
          </div>
        </div>
        <div className="px-5 md:px-0 overflow-x-auto flex gap-5 max-w-[1300px] mx-auto px-10 py-10 bg-cover bg-center bg-no-repeat bg-[url('./images/bg-movie.svg')]">
          {dataTrending.map((dataItem, index) => {
            return (
              <Link
                key={index}
                to={"/detail"}
                className="min-w-[150px] group relative hover:shadow-lg transition-transform transform hover:translate-y-[-4px]"
              >
                <div className="product-item--img relative">
                  <img
                    src={dataItem.image}
                    alt={dataItem.alt}
                    className="rounded-lg"
                  />
                  <div className="percent absolute -bottom-4 left-[11px] flex justify-center items-center w-[38px] h-[38px] bg-black rounded-full group-hover:flex">
                    <span className="percent-title text-white text-sm font-semibold">
                      {dataItem.percent}<sup>%</sup>
                    </span>
                    <div className="border-[3px] absolute inset-0 border-3 border-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="product-content mt-[26px]">
                  <h4 className="product-title text-base font-semibold truncate">
                    {dataItem.name}
                  </h4>
                  <span className="product-time text-sm text-gray-600">
                    {dataItem.time}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Trending;
