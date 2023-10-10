function JoinToday() {
  return (
    <>
      <div
        className="max-w-[1300px] m-auto bg-cover bg-center bg-no-repeat"
        style={{backgroundImage: `url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces_filter(duotone,190235,ad47dd)/lMnoYqPIAVL0YaLP5YjRy7iwaYv.jpg')`}}
      >
        <div className="md:py-8 md:px-10 p-5">
          <div className="grid md:grid-cols-2 md:gap-8 grid-cols-1 gap-5 items-end">
            <div className="text-white">
              <h2 className="text-3xl font-bold">Join Today</h2>
              <p className="text-lg mt-5">
                Get access to maintain your own <em>custom personal lists</em>,
                <em>track what you've seen</em> and search and filter for
                <em>what to watch next</em>—regardless if it's in theatres, on TV
                or available on popular streaming services like .
              </p>
              <p className="signup-button mt-8">
                <a
                  href="/"
                  className="text-white text-base font-semibold py-2 px-4 rounded-md bg-[#805be7]"
                >
                  Sign Up
                </a>
              </p>
            </div>
            <div className="text-white">
              <ul className="list-disc">
                <li>Enjoy TMDb ad free</li>
                <li>Maintain a personal watchlist</li>
                <li>
                  Filter by your subscribed streaming services and find something
                  to watch
                </li>
                <li>Log the movies and TV shows you've seen</li>
                <li>Build custom lists</li>
                <li>Contribute to and improve our database</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JoinToday;
