function LeaderBoard() {
  return (
    <>
      <div className="max-w-[1300px] m-auto mx-auto px-10 py-8">
        <div className="leaderboard-header flex items-center">
          <h2 className="text-[22px] font-semibold mr-6">LeaderBoard</h2>
          <div>
            <p className="leaderboard-header--title">
              <span className="bg-[#64e7b9] inline-block rounded-full w-2 h-2 mr-1"></span>
              All Time Edits
            </p>
            <p className="leaderboard-header--title">
              <span className="bg-[#e56567] inline-block rounded-full w-2 h-2 mr-1"></span>
              Edits This Week
            </p>
          </div>
        </div>
        <ul className="leaderboard-content mt-4 grid md:grid-cols-2 md:gap-4 grid-cols-1 gap-2">
          <li className="leaderboard-content-item flex items-center gap-4">
            <span className="leaderboard-content--avatar flex items-center justify-center w-14 h-14 rounded-full text-white bg-green-500 text-xl font-semibold">
              R
            </span>
            <div className="leaderboard-content--info flex-1">
              <h4 className="text-lg font-semibold">RuiZafon</h4>
              <div className="">
                <div className="flex items-center gap-1">
                  <div className="flex-1 rounded-xl h-2 bg-gradient-to-r from-green-500 to-green-200"></div>
                  <span className="text-sm">1009773</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex-1 rounded-xl h-2 bg-gradient-to-r from-yellow-300 to-red-500"></div>
                  <span className="text-sm">9773</span>
                </div>
              </div>
            </div>
          </li>
          <li className="leaderboard-content-item flex items-center gap-4">
            <span className="leaderboard-content--avatar flex items-center justify-center w-14 h-14 rounded-full text-white bg-green-500 text-xl font-semibold">
              R
            </span>
            <div className="leaderboard-content--info flex-1">
              <h4 className="text-lg font-semibold">RuiZafon</h4>
              <div className="">
                <div className="flex items-center gap-1">
                  <div className="flex-1 rounded-xl h-2 bg-gradient-to-r from-green-500 to-green-200"></div>
                  <span className="text-sm">1009773</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex-1 rounded-xl h-2 bg-gradient-to-r from-yellow-300 to-red-500"></div>
                  <span className="text-sm">9773</span>
                </div>
              </div>
            </div>
          </li>
          <li className="leaderboard-content-item flex items-center gap-4">
            <span className="leaderboard-content--avatar flex items-center justify-center w-14 h-14 rounded-full text-white bg-green-500 text-xl font-semibold">
              R
            </span>
            <div className="leaderboard-content--info flex-1">
              <h4 className="text-lg font-semibold">RuiZafon</h4>
              <div className="">
                <div className="flex items-center gap-1">
                  <div className="flex-1 rounded-xl h-2 bg-gradient-to-r from-green-500 to-green-200"></div>
                  <span className="text-sm">1009773</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex-1 rounded-xl h-2 bg-gradient-to-r from-yellow-300 to-red-500"></div>
                  <span className="text-sm">9773</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default LeaderBoard;
