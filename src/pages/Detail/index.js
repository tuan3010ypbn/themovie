
function Detail() {
  return (
    <>
      <div className="md:mt-[66px] mt-[61px]">
        <div className="shortcut-bar-wrapper flex justify-center items-center h-12 gap-10">
          <div className="shortcut-bar--item">
            <a
              href="#"
              className="shortcut-bar--link flex justify-center items-center gap-1 text-black"
            >
              Overview
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="shortcut-bar--icon w-4 h-4"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <div className="shortcut-bar--item">
            <a
              href="#"
              className="shortcut-bar--link flex justify-center items-center gap-1 text-black"
            >
              Media
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="shortcut-bar--icon w-4 h-4"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <div className="shortcut-bar--item">
            <a
              href="#"
              className="shortcut-bar--link flex justify-center items-center gap-1 text-black"
            >
              Random
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="shortcut-bar--icon w-4 h-4"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <div className="shortcut-bar--item">
            <a
              href="#"
              className="shortcut-bar--link flex justify-center items-center gap-1 text-black"
            >
              Shared
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="shortcut-bar--icon w-4 h-4"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div
        className="movie-detail relative bg-cover bg-no-repeat bg-center h-[510px] items-center lg:flex hidden"
        style={{
          backgroundImage: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/iiXliCeykkzmJ0Eg9RYJ7F2CWSz.jpg")`,
        }}
      >
        <div
          className="absolute top-0 bottom-0 left-0 right-0 bg-[linear-gradient(_to_right,rgb(67,67,67)_150px,rgba(31.5,31.5,31.5,0.54)_100%_)] z-[1] inset-0;
          "
        ></div>
        <div className="movie-header z-10 relative z-2 max-w-[1400px] mx-auto grid grid-cols-[300px,1fr] gap-10 items-center px-10">
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/3aJvYn7PBMBOYkZdD2Rc0gn1Lxd.jpg"
              alt=""
            />
          </div>
          <div className="poster-info">
            <div className="poster-title flex items-center gap-6 mb-[6px]">
              <h2 className="text-white text-3xl font-semibold">Trừng Phạt</h2>
              <span className="text-white text-3xl font-normal opacity-80">
                (2022)
              </span>
            </div>
            <div className="poster-facts flex items-center text-white text-base gap-4 my-[4px]">
              <span className="certification inline-flex whitespace-nowrap items-center content-center py-1 px-2 border border-white rounded-2px mr-[7px] text-opacity-60">
                PG - 13
              </span>
              <span className="date">08/25/2023 (US)</span>
              <span className="category poster-facts--relative relative ml-[6px]">
                Phim Hành Động, Phim Bí Ẩn, Phim Gây Cấn, Phim Hình Sự
              </span>
              <span className="runtime poster-facts--relative relative ml-[6px]">
                1h24m
              </span>
            </div>
            <div className="my-3">
              <ul className="poster-actions flex items-center gap-4 text-white">
                <li className="chart flex items-center">
                  <div className="relative flex justify-center items-center w-[60px] h-[60px] bg-black rounded-[50%]">
                    <span className="chart-content--score text-[20px] font-semibold">
                      89<sup>%</sup>
                    </span>
                    <div className="absolute w-full h-full border-[3px] border-green-500 top-0 left-0 rounded-full"></div>
                  </div>
                  <p className="chart-title text-base font-semibold ml-6">
                    User <br />
                    Score
                  </p>
                </li>
                <li className="poster-item flex items-center">
                  <a
                    href="#"
                    className="poster-item--link bg-opacity-100 bg-[#032541] rounded-full w-12 h-12 flex justify-center items-center text-2xl font-bold"
                  >
                    <img
                      src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-159-thumbnails-list-white-c260ea972eebf812289fd3c41d0d2c1dff33ecbcd62be13fba8eeaf9de173789.svg"
                      alt=""
                      className="w-4 h-4"
                    />
                  </a>
                </li>
                <li className="poster-item flex items-center">
                  <a
                    href="#"
                    className="poster-item--link bg-opacity-100 bg-[#032541] rounded-full w-12 h-12 flex justify-center items-center text-2xl font-bold"
                  >
                    <img
                      src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-13-heart-white-28d2cc2d6418c5047efcfd2438bfc5d109192671263c270993c05f130cc4584e.svg"
                      alt=""
                      className="w-4 h-4"
                    />
                  </a>
                </li>
                <li className="poster-item flex items-center">
                  <a
                    href="#"
                    className="poster-item--link bg-opacity-100 bg-[#032541] rounded-full w-12 h-12 flex justify-center items-center text-2xl font-bold"
                  >
                    <img
                      src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-73-bookmark-white-432e98d550b7e4c80b06272c49475b0db85a60f6fae450420713004b3c9d3ffd.svg"
                      alt=""
                      className="w-4 h-4"
                    />
                  </a>
                </li>
                <li className="poster-item flex items-center">
                  <a
                    href="#"
                    className="poster-item--link bg-opacity-100 bg-[#032541] rounded-full w-12 h-12 flex justify-center items-center text-2xl font-bold"
                  >
                    <img
                      src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-49-star-white-5c85220678b312aea9599d5f12ad858a9e7df226de51ef8b6b699023ffeda5fa.svg"
                      alt=""
                      className="w-4 h-4"
                    />
                  </a>
                </li>
                <li className="poster-item flex items-center">
                  <a href="#" className="font-bold">
                    <img
                      src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-175-play-806cb05551791b8dedd7f8d38fd3bd806e2d397fcfeaa00a5cc9129f0819fd07.svg"
                      alt=""
                    />
                  </a>
                  Play Trailer
                </li>
              </ul>
            </div>
            <div className="header-info text-white">
              <h3 className="tagline text-[#c5c5c5] italic mb-3">
                selectItem tagline
              </h3>
              <div className="overview">
                <p className="overview-lable text-2xl font-semibold mb-2">
                  Overview
                </p>
                <span className="text-gray-200 text-base leading-7">
                  Matt Turner (Liam Neeson) là một doanh nhân người Mỹ thành đạt
                  sống ở Berlin, đang phải cân bằng giữa sự nghiệp tài chính
                  đang bùng nổ và trách nhiệm gia đình.
                </span>
              </div>
              <div className="people-poster mt-3 text-gray-200 grid grid-cols-3 gap-5">
                <div className="people-poster--profile">
                  <a
                    href="/person/41671-nimrod-antal"
                    className="text-base font-medium"
                  >
                    Nimród Antal
                  </a>
                  <p className="character text-sm mt-0">Director</p>
                </div>
                <div className="people-poster--profile">
                  <a
                    href="/person/41671-nimrod-antal"
                    className="text-base font-medium"
                  >
                    Nimród Antal
                  </a>
                  <p className="character text-sm mt-0">Director</p>
                </div>
                <div className="people-poster--profile">
                  <a
                    href="/person/41671-nimrod-antal"
                    className="text-base font-medium"
                  >
                    Nimród Antal
                  </a>
                  <p className="character text-sm mt-0">Director</p>
                </div>
                <div className="people-poster--profile">
                  <a
                    href="/person/41671-nimrod-antal"
                    className="text-base font-medium"
                  >
                    Nimród Antal
                  </a>
                  <p className="character text-sm mt-0">Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="lg:hidden "
        style={{
          backgroundImage:
            "linear-gradient(to right,rgba(31.5, 31.5, 52.5, 1) 0,rgba(31.5, 31.5, 52.5, 0.96) 100%)",
        }}
      >
        <div
          className="w-full flex items-center relative bg-cover bg-no-repeat md:h-[376px] h-[176px]"
          style={{
            backgroundImage: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/iiXliCeykkzmJ0Eg9RYJ7F2CWSz.jpg")`,
          }}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-black z-1"></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[rgba(31.5, 31.5, 52.5, 1)] via-transparent to-transparent z-1"></div>
          <div className="h-4/5 rounded-xl overflow-hidden">
            <img
              className="relative z-[2] h-full pl-5 rounded-xl overflow-hidden"
              src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/3aJvYn7PBMBOYkZdD2Rc0gn1Lxd.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="py-5 text-white">
          <div className="flex items-center md:gap-1.5 md:mb-1.5 justify-center">
            <h2 className="md:text-[34px] md:text-white md:font-bold text-[24px]">
              Trừng Phạt
            </h2>
            <span className="md:text-[33px] md:text-white md:font-normal md:opacity-80 text-xl">
              (2022)
            </span>
          </div>

          <ul className="poster-actions flex justify-center gap-5 text-white">
            <li className="flex items-center gap-2">
              <div className="chart-content flex items-center justify-center w-[60px] h-[60px] bg-black rounded-full border-[3px] border-solid border-[#21d07a]">
                <span className="chart-content--score text-xl font-bold">
                  {" "}
                  89 <sup className="text-sm font-normal">%</sup>{" "}
                </span>
              </div>
              <p className="chart-title text-center ml-[6px]">User Score</p>
            </li>

            <li className="flex items-center gap-2">
              <a href="#" className="w-4 h-4">
                <img
                  className="brightness-0 invert-[1]"
                  src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-175-play-806cb05551791b8dedd7f8d38fd3bd806e2d397fcfeaa00a5cc9129f0819fd07.svg"
                  alt=""
                />
              </a>
              Play Trailer
            </li>
          </ul>

          <div className="poster-facts flex flex-col bg-opacity-10 border-t border-b border-opacity-20 py-2">
            <div className="text-center">
              <span className="certification bg-opacity-50 p-1 rounded border border-opacity-50 text-sm text-gray-600">
                PG - 13
              </span>
              <span className="date text-sm text-gray-600">
                08/25/2023 (US)
              </span>
              <span className="runtime poster-facts--relative text-sm text-gray-600">
                {" "}
                1h24m{" "}
              </span>
            </div>

            <span className="category poster-facts--relative text-center text-sm text-gray-600">
              Phim Hành Động, Phim Bí Ẩn, Phim Gây Cấn, Phim Hình Sự
            </span>
          </div>

          <div className="overview py-4">
            <p className="overview-lable text-gray-600 text-lg font-semibold">
              Overview
            </p>
            <span className="text-gray-300">
              Matt Turner (Liam Neeson) là một doanh nhân người Mỹ thành đạt
              sống ở Berlin, đang phải cân bằng giữa sự nghiệp tài chính đang
              bùng nổ và trách nhiệm gia đình. Một buổi sáng đang lái xe đưa con
              đến trường, Matt nhận được một cuộc điện thoại từ một giọng nói bí
              ẩn: có một quả bom dưới ghế của anh ấy sẽ phát nổ trừ khi anh ấy
              hoàn thành một loạt nhiệm vụ cụ thể, và nhanh chóng. Bị mắc kẹt
              trong một cuộc rượt đuổi tốc độ cao khắp thành phố, Matt phải làm
              theo chỉ dẫn ngày càng nguy hiểm của “kẻ lạ mặt” trong cuộc chạy
              đua với thời gian để bảo vệ gia đình và tìm lời giải đáp cho những
              bí ẩn đang diễn ra. Bộ phim ly kỳ về chiếc đồng hồ tích tắc nhập
              vai này của các nhà sản xuất phim NON-STOP và THE COMMUTER thu hút
              khán giả tham gia vào một hành trình cứu chuộc và trả thù có chỉ
              số octan cao.
            </span>
          </div>

          <div className="people-poster grid grid-cols-2 text-center">
            <div className="people-poster--profile">
              <a
                href="/person/41671-nimrod-antal"
                className="text-base font-medium text-white"
              >
                Nimród Antal
              </a>
              <p className="character text-sm text-gray-600">Director</p>
            </div>
            <div className="people-poster--profile">
              <a
                href="/person/41671-nimrod-antal"
                className="text-base font-medium text-white"
              >
                Nimród Antal
              </a>
              <p className="character text-sm text-gray-600">Director</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
