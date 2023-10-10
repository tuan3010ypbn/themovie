import Sidebar from "~/layout/DefaultLayout/Sidebar";

function Movies() {
  return (
    <>
      <div>
        <div className="overflow-hidden">
          <div className="max-w-[1320px] mx-auto md:mt-[66px] mt-[61px]">
            <h2 className="pt-7 pb-7 pl-5 pr-5 lg:pl-0 lg:pr-0  text-2xl font-semibold ">
              Popular Movies
            </h2>
            <div className="grid md:grid-cols-[260px,1fr] grid-cols-[1fr] gap-4 md:gap-8 pl-5 pr-5 lg:pl-0 lg:pr-0">
              <Sidebar />
              <div className="w-full ">
                <div className="grid lg:grid-cols-[repeat(5,1fr)] md:lg:grid-cols-[repeat(3,1fr)] grid-cols-[repeat(2,1fr)] md:gap-5 gap-3">
                  <a
                    href="#"
                    className="item-product relative bg-white border border-gray-200 rounded-lg shadow-md"
                  >
                    <div className="relative">
                      <img
                        src="https://www.themoviedb.org/t/p/w220_and_h330_face/cswPVyXwQ13dFHU1KFS8dpFxIyY.jpg"
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
                      <h4 className="text-16 font-semibold">Bọ Hung Xanh</h4>
                      <span className="text-sm  text-[#686868]">
                        Jan 04, 2023
                      </span>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="item-product relative bg-white border border-gray-200 rounded-lg shadow-md"
                  >
                    <div className="relative">
                      <img
                        src="https://www.themoviedb.org/t/p/w220_and_h330_face/3aJvYn7PBMBOYkZdD2Rc0gn1Lxd.jpg"
                        alt=""
                        className="rounded-t-lg"
                      />
                      <img
                        className="absolute top-0 right-0 w-[26px] h-[26px]rounded-full overflow-hidden brightness-75"
                        src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-947-circle-more-white-4c440dfc1b0e626c70f4853dbbce9c4d1f2c5d8f3e05a7d3df47881cbd816adf.svg"
                        alt=""
                      />
                      <div className="absolute flex justify-center items-center w-[38px] h-[38px] bg-black left-[11px] -bottom-4 text-white rounded-full overflow-hidden text-sm font-semibold">
                        68<sup>%</sup>
                        <div className="border-[3px] absolute inset-0 border-3 border-green-500 rounded-full"></div>
                      </div>
                    </div>

                    <div className="mt-[30px] pt-0 pb-[21px] px-2.5">
                      <h4 className="text-16 font-semibold">Trừng Phạt</h4>
                      <span className="text-sm  text-[#686868]">
                        Aug 25, 2023
                      </span>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="item-product relative bg-white border border-gray-200 rounded-lg shadow-md"
                  >
                    <div className="relative">
                      <img
                        src="https://www.themoviedb.org/t/p/w220_and_h330_face/6x2CNod5RB3NkXSBJ81Y8KNy4g3.jpg"
                        alt=""
                        className="rounded-t-lg /"
                      />
                      <img
                        className="absolute top-0 right-0 w-[26px] h-[26px]rounded-full overflow-hidden brightness-75"
                        src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-947-circle-more-white-4c440dfc1b0e626c70f4853dbbce9c4d1f2c5d8f3e05a7d3df47881cbd816adf.svg"
                        alt=""
                      />
                      <div className="absolute flex justify-center items-center w-[38px] h-[38px] bg-black left-[11px] -bottom-4 text-white rounded-full overflow-hidden text-sm font-semibold">
                        69<sup>%</sup>
                        <div className="border-[3px] absolute inset-0 border-3 border-green-500 rounded-full"></div>
                      </div>
                    </div>

                    <div className="mt-[30px] pt-0 pb-[21px] px-2.5">
                      <h4 className="text-16 font-semibold">
                        Cá Mập Siêu Bạo Chúa 2: Vực Sâu
                      </h4>
                      <span className="text-sm  text-[#686868]">
                        Aug 04, 2023
                      </span>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="item-product relative bg-white border border-gray-200 rounded-lg shadow-md"
                  >
                    <div className="relative">
                      <img
                        src="https://www.themoviedb.org/t/p/w220_and_h330_face/brZzXXQ8GuzlAdu4TJxjhC8ebBL.jpg"
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
                        Fast & Furious X
                      </h4>
                      <span className="text-sm  text-[#686868]">
                        Jan 04, 2023
                      </span>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="item-product relative bg-white border border-gray-200 rounded-lg shadow-md"
                  >
                    <div className="relative">
                      <img
                        src="https://www.themoviedb.org/t/p/w220_and_h330_face/tFVJwcCvQscxRr4BSndCHfpgSYV.jpg"
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
                      <h4 className="text-16 font-semibold">Gọi Hồn Quỷ Dữ</h4>
                      <span className="text-sm  text-[#686868]">
                        Jan 04, 2023
                      </span>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="item-product relative bg-white border border-gray-200 rounded-lg shadow-md"
                  >
                    <div className="relative">
                      <img
                        src="https://www.themoviedb.org/t/p/w220_and_h330_face/mqNkQhaXxsH8SLNmJnG5oGz4meR.jpg"
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
                      <h4 className="text-16 font-semibold">Barbie</h4>
                      <span className="text-sm  text-[#686868]">
                        Jan 04, 2023
                      </span>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="item-product relative bg-white border border-gray-200 rounded-lg shadow-md"
                  >
                    <div className="relative">
                      <img
                        src="https://www.themoviedb.org/t/p/w220_and_h330_face/kR4tDVZpm9kTJnk0kiVr3OJ47nD.jpg"
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
                      <h4 className="text-16 font-semibold">Ác Quỷ Ma Sơ II</h4>
                      <span className="text-sm  text-[#686868]">
                        Sep 08, 2023
                      </span>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="item-product relative bg-white border border-gray-200 rounded-lg shadow-md"
                  >
                    <div className="relative">
                      <img
                        src="https://www.themoviedb.org/t/p/w220_and_h330_face/zupyCthty7BP01jrVFC9n7WtGCv.jpg"
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
                        Tay Đua Cự Phách
                      </h4>
                      <span className="text-sm  text-[#686868]">
                        Aug 11, 2023
                      </span>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="item-product relative bg-white border border-gray-200 rounded-lg shadow-md"
                  >
                    <div className="relative">
                      <img
                        src="https://www.themoviedb.org/t/p/w220_and_h330_face/7GaeF6xeUbfXFZCtOCWs503CJUl.jpg"
                        alt=""
                        className="rounded-t-lg"
                      />
                      <img
                        className="absolute top-0 right-0 w-[26px] h-[26px]rounded-full overflow-hidden brightness-75"
                        src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-947-circle-more-white-4c440dfc1b0e626c70f4853dbbce9c4d1f2c5d8f3e05a7d3df47881cbd816adf.svg"
                        alt=""
                      />
                      <div className="absolute flex justify-center items-center w-[38px] h-[38px] bg-black left-[11px] -bottom-4 text-white rounded-full overflow-hidden text-sm font-semibold">
                        99<sup>%</sup>
                        <div className="border-[3px] absolute inset-0 border-3 border-green-500 rounded-full"></div>
                      </div>
                    </div>

                    <div className="mt-[30px] pt-0 pb-[21px] px-2.5">
                      <h4 className="text-16 font-semibold">
                        Xứ Sở Các Nguyên Tố
                      </h4>
                      <span className="text-sm  text-[#686868]">
                        Jun 16, 2023
                      </span>
                    </div>
                  </a>
                </div>

                <div className="rounded-2xl max-w-full w-full h-[50px] mb-4 flex justify-center items-center bg-[rgb(1,180,228)] text-xl font-semibold text-white mt-[30px] p-0 rounded-lg;">
                  Load More
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Movies;
