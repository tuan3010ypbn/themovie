function Trailers() {
  return (
    <>
      <div className="movie-banner max-w-[1300px] md:p-10 p-5 m-auto relative from-opacity-70 via-opacity-50 to-opacity-0 bg-cover bg-center bg-[url(https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/gBDQXWpj004yodiUkzm3YhRFMQu.jpg)]">
        <div className="flex items-center gap-5 mb-6 text-white">
          <h2 className="text-2xl font-semibold z-[2]">Latest Trailers</h2>
          <div className="z-[2] rounded-full flex items-center space-x-2 border border-solid border-[#2cd8ac]">
            <p className="bg-gradient-to-r from-teal-500 to-blue-500 py-1 px-3 rounded-full inline-flex items-center text-black font-semibold">
              Popular
            </p>
            <a
              href="#"
              className="pr-3 text-white bg-transparent hover:text-blue-500 transition duration-300 hidden md:block"
            >
              In Theaters
            </a>
          </div>
        </div>
        <div className="flex items-center gap-5 overflow-x-auto">
          <div className="z-[2] movie-youtube max-w-xs text-center">
            <iframe
              className="rounded-xl"
              width="300"
              height="170"
              src="https://www.youtube.com/embed/h5JysJw_slw?si=5HEfwwfCf7oIDQJ1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <p className="movie-youtube--title text-white text-lg font-medium mt-3">
              Gia Đình Simpson
            </p>
            <p className="movie-youtube--des text-center text-white">
              Season 35 Official Trailer
            </p>
          </div>
          <div className="z-[2] movie-youtube max-w-xs text-center">
            <iframe
              className="rounded-xl"
              width="300"
              height="170"
              src="https://www.youtube.com/embed/h5JysJw_slw?si=5HEfwwfCf7oIDQJ1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <p className="movie-youtube--title text-white text-lg font-medium mt-3">
              Gia Đình Simpson
            </p>
            <p className="movie-youtube--des text-center text-white">
              Season 35 Official Trailer
            </p>
          </div>
        </div>
        <div className="overlay absolute inset-0 bg-black opacity-50"></div>
      </div>
    </>
  );
}

export default Trailers;
