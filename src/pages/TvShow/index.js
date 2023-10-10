import Sidebar from "~/layout/DefaultLayout/Sidebar";

function TvShow() {
  return (
    <>
      <div className="max-w-[1320px] mx-auto md:mt-[66px] mt-[61px]">
        <h2 className="pt-7 pb-7 pl-5 pr-5 lg:pl-0 lg:pr-0 text-2xl font-semibold">
          Popular TV Shows
        </h2>

        <div className="grid md:grid-cols-[260px,1fr] grid-cols-[1fr] gap-4 md:gap-8 pl-5 pr-5 lg:pl-0 lg:pr-0">
          <Sidebar />
          <div className="w-full">
            <div className="grid lg:grid-cols-[repeat(5,1fr)] md:lg:grid-cols-[repeat(3,1fr)] grid-cols-[repeat(2,1fr)] md:gap-5 gap-3">
              <a
                href="./detail.html"
                className="item-product relative bg-white border border-gray-200 rounded-lg shadow-md"
              >
                <div className="relative">
                  <img
                    src="https://www.themoviedb.org/t/p/w220_and_h330_face/7dFZJ2ZJJdcmkp05B9NWlqTJ5tq.jpg"
                    alt="https://www.themoviedb.org/t/p/w220_and_h330_face/9McqS8mgMf5NJCAKZIY6J1oOl8y.jpg"
                    className="rounded-t-lg"
                  />
                  <img
                    className="absolute top-0 right-0 w-[26px] h-[26px]rounded-full overflow-hidden brightness-75"
                    src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-947-circle-more-white-4c440dfc1b0e626c70f4853dbbce9c4d1f2c5d8f3e05a7d3df47881cbd816adf.svg"
                    alt=""
                  />
                  <div className="absolute flex justify-center items-center w-[38px] h-[38px] bg-black left-[11px] -bottom-4 text-white rounded-full overflow-hidden text-sm font-semibold">
                    89<sup>%</sup>
                    <div className="border-[3px] absolute inset-0 border-3 border-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="mt-[30px] pt-0 pb-[21px] px-2.5">
                  <h4 className="text-16 font-semibold">Tagesschau</h4>
                  <span className="text-sm text-[#686868]"> Dec 26, 1952 </span>
                </div>
              </a>

              <a
                href="./detail.html"
                className="item-product relative bg-white border border-gray-200 rounded-lg shadow-md"
              >
                <div className="relative">
                  <img
                    src="https://www.themoviedb.org/t/p/w220_and_h330_face/4BHDmYiuSnNL3nqKIOzLJKYX4AN.jpg"
                    alt=""
                    className="rounded-t-lg"
                  />
                  <img
                    className="absolute top-0 right-0 w-[26px] h-[26px]rounded-full overflow-hidden brightness-75"
                    src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-947-circle-more-white-4c440dfc1b0e626c70f4853dbbce9c4d1f2c5d8f3e05a7d3df47881cbd816adf.svg"
                    alt=""
                  />
                  <div className="absolute flex justify-center items-center w-[38px] h-[38px] bg-black left-[11px] -bottom-4 text-white rounded-full overflow-hidden text-sm font-semibold">
                    89<sup>%</sup>
                    <div className="border-[3px] absolute inset-0 border-3 border-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="mt-[30px] pt-0 pb-[21px] px-2.5">
                  <h4 className="text-16 font-semibold">Teri Meri Doriyaann</h4>
                  <span className="text-sm text-[#686868]">Jan 04, 2023</span>
                </div>
              </a>

              <a
                href="./detail.html"
                className="item-product relative bg-white border border-gray-200 rounded-lg shadow-md"
              >
                <div className="relative">
                  <img
                    src="https://www.themoviedb.org/t/p/w220_and_h330_face/6ikbefd7VeopbBuGgioYMNU5bQj.jpg"
                    alt=""
                    className="rounded-t-lg"
                  />
                  <img
                    className="absolute top-0 right-0 w-[26px] h-[26px]rounded-full overflow-hidden brightness-75"
                    src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-947-circle-more-white-4c440dfc1b0e626c70f4853dbbce9c4d1f2c5d8f3e05a7d3df47881cbd816adf.svg"
                    alt=""
                  />
                  <div className="absolute flex justify-center items-center w-[38px] h-[38px] bg-black left-[11px] -bottom-4 text-white rounded-full overflow-hidden text-sm font-semibold">
                    89<sup>%</sup>
                    <div className="border-[3px] absolute inset-0 border-3 border-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="mt-[30px] pt-0 pb-[21px] px-2.5">
                  <h4 className="text-16 font-semibold">Rabb Se Hai Dua</h4>
                  <span className="text-sm text-[#686868]"> Nov 28, 2022</span>
                </div>
              </a>
              <a
                href="./detail.html"
                className="item-product relative bg-white border border-gray-200 rounded-lg shadow-md"
              >
                <div className="relative">
                  <img
                    src="https://www.themoviedb.org/t/p/w220_and_h330_face/uhXU0SMPMlemKGHmwbldM60qqmW.jpg"
                    alt=""
                    className="rounded-t-lg"
                  />
                  <img
                    className="absolute top-0 right-0 w-[26px] h-[26px]rounded-full overflow-hidden brightness-75"
                    src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-947-circle-more-white-4c440dfc1b0e626c70f4853dbbce9c4d1f2c5d8f3e05a7d3df47881cbd816adf.svg"
                    alt=""
                  />
                  <div className="absolute flex justify-center items-center w-[38px] h-[38px] bg-black left-[11px] -bottom-4 text-white rounded-full overflow-hidden text-sm font-semibold">
                    89<sup>%</sup>
                    <div className="border-[3px] absolute inset-0 border-3 border-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="mt-[30px] pt-0 pb-[21px] px-2.5">
                  <h4 className="text-16 font-semibold">Katha Ankahee</h4>
                  <span className="text-sm text-[#686868]"> Dec 05, 2022</span>
                </div>
              </a>
              <a
                href="./detail.html"
                className="item-product relative bg-white border border-gray-200 rounded-lg shadow-md"
              >
                <div className="relative">
                  <img
                    src="https://www.themoviedb.org/t/p/w220_and_h330_face/cGUF4aT3GCmCy3f84KKIpWS3kty.jpg"
                    alt=""
                    className="rounded-t-lg"
                  />
                  <img
                    className="absolute top-0 right-0 w-[26px] h-[26px]rounded-full overflow-hidden brightness-75"
                    src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-947-circle-more-white-4c440dfc1b0e626c70f4853dbbce9c4d1f2c5d8f3e05a7d3df47881cbd816adf.svg"
                    alt=""
                  />
                  <div className="absolute flex justify-center items-center w-[38px] h-[38px] bg-black left-[11px] -bottom-4 text-white rounded-full overflow-hidden text-sm font-semibold">
                    89<sup>%</sup>
                    <div className="border-[3px] absolute inset-0 border-3 border-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="mt-[30px] pt-0 pb-[21px] px-2.5">
                  <h4 className="text-16 font-semibold">
                    Pyar Ka Pehla Naam: Radha Mohan
                  </h4>
                  <span className="text-sm text-[#686868]">Jan 04, 2023</span>
                </div>
              </a>
              <a
                href="./detail.html"
                className="item-product relative bg-white border border-gray-200 rounded-lg shadow-md"
              >
                <div className="relative">
                  <img
                    src="https://www.themoviedb.org/t/p/w220_and_h330_face/3uU5uJzOX7xe7mn7YKpBM9oiEZO.jpg"
                    alt=""
                    className="rounded-t-lg"
                  />
                  <img
                    className="absolute top-0 right-0 w-[26px] h-[26px]rounded-full overflow-hidden brightness-75"
                    src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-947-circle-more-white-4c440dfc1b0e626c70f4853dbbce9c4d1f2c5d8f3e05a7d3df47881cbd816adf.svg"
                    alt=""
                  />
                  <div className="absolute flex justify-center items-center w-[38px] h-[38px] bg-black left-[11px] -bottom-4 text-white rounded-full overflow-hidden text-sm font-semibold">
                    89<sup>%</sup>
                    <div className="border-[3px] absolute inset-0 border-3 border-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="mt-[30px] pt-0 pb-[21px] px-2.5">
                  <h4 className="text-16 font-semibold">Tomorrow is Ours</h4>
                  <span className="text-sm text-[#686868]">Jan 04, 2023</span>
                </div>
              </a>
              <a
                href="./detail.html"
                className="item-product relative bg-white border border-gray-200 rounded-lg shadow-md"
              >
                <div className="relative">
                  <img
                    src="https://www.themoviedb.org/t/p/w220_and_h330_face/bclnfDXvx7UydFSk83B258vRRvI.jpg"
                    alt=""
                    className="rounded-t-lg"
                  />
                  <img
                    className="absolute top-0 right-0 w-[26px] h-[26px]rounded-full overflow-hidden brightness-75"
                    src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-947-circle-more-white-4c440dfc1b0e626c70f4853dbbce9c4d1f2c5d8f3e05a7d3df47881cbd816adf.svg"
                    alt=""
                  />
                  <div className="absolute flex justify-center items-center w-[38px] h-[38px] bg-black left-[11px] -bottom-4 text-white rounded-full overflow-hidden text-sm font-semibold">
                    89<sup>%</sup>
                    <div className="border-[3px] absolute inset-0 border-3 border-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="mt-[30px] pt-0 pb-[21px] px-2.5">
                  <h4 className="text-16 font-semibold"></h4>
                  <span className="text-sm text-[#686868]">Jan 04, 2023</span>
                </div>
              </a>
              <a
                href="./detail.html"
                className="item-product relative bg-white border border-gray-200 rounded-lg shadow-md"
              >
                <div className="relative">
                  <img
                    src="https://www.themoviedb.org/t/p/w220_and_h330_face/m1aGGAPvLpWF5cGhkQeZjbpu2nr.jpg"
                    alt=""
                    className="rounded-t-lg"
                  />
                  <img
                    className="absolute top-0 right-0 w-[26px] h-[26px]rounded-full overflow-hidden brightness-75"
                    src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-947-circle-more-white-4c440dfc1b0e626c70f4853dbbce9c4d1f2c5d8f3e05a7d3df47881cbd816adf.svg"
                    alt=""
                  />
                  <div className="absolute flex justify-center items-center w-[38px] h-[38px] bg-black left-[11px] -bottom-4 text-white rounded-full overflow-hidden text-sm font-semibold">
                    89<sup>%</sup>
                    <div className="border-[3px] absolute inset-0 border-3 border-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="mt-[30px] pt-0 pb-[21px] px-2.5">
                  <h4 className="text-16 font-semibold">Queridos Papás</h4>
                  <span className="text-sm text-[#686868]">Jan 04, 2023</span>
                </div>
              </a>
              <a
                href="./detail.html"
                className="item-product relative bg-white border border-gray-200 rounded-lg shadow-md"
              >
                <div className="relative">
                  <img
                    src="https://www.themoviedb.org/t/p/w220_and_h330_face/ag6PmoBxkF2s1uY3An618NCEt3g.jpg"
                    alt=""
                    className="rounded-t-lg"
                  />
                  <img
                    className="absolute top-0 right-0 w-[26px] h-[26px]rounded-full overflow-hidden brightness-75"
                    src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-947-circle-more-white-4c440dfc1b0e626c70f4853dbbce9c4d1f2c5d8f3e05a7d3df47881cbd816adf.svg"
                    alt=""
                  />
                  <div className="absolute flex justify-center items-center w-[38px] h-[38px] bg-black left-[11px] -bottom-4 text-white rounded-full overflow-hidden text-sm font-semibold">
                    31<sup>%</sup>
                    <div className="border-[3px] absolute inset-0 border-3 border-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="mt-[30px] pt-0 pb-[21px] px-2.5">
                  <h4 className="text-16 font-semibold">Al rojo vivo</h4>
                  <span className="text-sm text-[#686868]">Jan 10, 2011</span>
                </div>
              </a>
            </div>
            <div className="rounded-2xl max-w-full w-full h-[50px] mb-4 flex justify-center items-center bg-[rgb(1,180,228)] text-xl font-semibold text-white mt-[30px] p-0 rounded-lg;">
              Load More
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TvShow;
