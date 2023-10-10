
import nextIcon from '~/images/next.svg'
import circleQuestionIcon from '~/images/circle-question.svg'


function Sidebar() {
  return (
    <div>
      <div className="shadow-[0_2px_8px_rgba(0,0,0,0.1)] flex justify-between flex-wrap items-center p-4 rounded-lg border border-gray-200 bg-white">
        <span className="text-16 font-semibold">Sort</span>
        <img className="w-4 h-4" src={nextIcon} alt="" />
      </div>
      <div className="mt-3">
        <div className="shadow-[0_2px_8px_rgba(0,0,0,0.1)] flex justify-between items-center p-4 rounded-lg border-t border-gray-200 bg-white">
          <span className="text-gray-500">Filters</span>
          <img className="w-4 h-4" src={nextIcon} alt="" />
        </div>
        <div className="p-4">
          <h3 className="flex items-center text-gray-500">
            Show Me
            <img
              className="w-4 h-4 ml-2"
              src={circleQuestionIcon}
              alt=""
            />
          </h3>

          <label className="flex items-center space-x-2 mt-10 text-gray-600">
            <input
              id="show_me_everything"
              type="radio"
              name="show_me"
              value="0"
              defaultChecked="checked"
            />
            <span className="text-sm font-medium">Everything</span>
          </label>

          <label className="flex items-center space-x-2 mt-4 text-gray-600">
            <input
              id="show_me_not_seen"
              type="radio"
              value="1"
              name="show_me"
            />
            <span className="text-sm font-medium">TV Shows I Haven't Seen</span>
          </label>

          <label className="flex items-center space-x-2 mt-4 text-gray-600">
            <input id="show_me_seen" type="radio" value="2" name="show_me" />
            <span className="text-sm font-medium">TV Shows I Have Seen</span>
          </label>
        </div>
        <div className="p-4 border-t border-gray-200">
          <h3 className="flex items-center text-gray-500">Air Dates</h3>

          <label className="flex items-center space-x-2 mt-4 text-gray-600">
            <input
              id="all_releases"
              type="checkbox"
              name="all_releases"
              value="true"
              defaultChecked=""
            />
            <span className="text-sm font-medium">Search all episodes?</span>
          </label>

          <div className="flex items-center mt-8 space-x-2 justify-between">
            <span className="text-xs text-gray-500">from</span>
            <input
              type="date"
              className="border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>

          <div className="flex items-center mt-8 space-x-2 justify-between">
            <span className="text-xs text-gray-500">to</span>
            <input
              type="date"
              className="border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>
        </div>
        <div className="p-4 border-t border-gray-200">
          <h3 className="text-gray-500">Genres</h3>
          <ul id="with_genres" className="mt-4">
            <li className="border border-gray-400 rounded-[14px] inline-block px-[13px] py-[5px] text-sm mt-2 text-left mr-2">
              <a className="no-underline" href="/discover/tv?with_genres=10759">
                Action &amp; Adventure
              </a>
            </li>
            <li className="border border-gray-400 rounded-[14px] inline-block px-[13px] py-[5px] text-sm mt-2 text-left mr-2">
              <a className="no-underline" href="/discover/tv?with_genres=10762">
                Kids
              </a>
            </li>
            <li className="border border-gray-400 rounded-[14px] inline-block px-[13px] py-[5px] text-sm mt-2 text-left mr-2">
              <a className="no-underline" href="/discover/tv?with_genres=10763">
                News
              </a>
            </li>
            <li className="border border-gray-400 rounded-[14px] inline-block px-[13px] py-[5px] text-sm mt-2 text-left mr-2">
              <a className="no-underline" href="/discover/tv?with_genres=9648">
                Phim Bí Ẩn
              </a>
            </li>
            <li className="border border-gray-400 rounded-[14px] inline-block px-[13px] py-[5px] text-sm mt-2 text-left mr-2">
              <a className="no-underline" href="/discover/tv?with_genres=18">
                Phim Chính Kịch
              </a>
            </li>
            <li className="border border-gray-400 rounded-[14px] inline-block px-[13px] py-[5px] text-sm mt-2 text-left mr-2">
              <a className="no-underline" href="/discover/tv?with_genres=10751">
                Phim Gia Đình
              </a>
            </li>
            <li className="border border-gray-400 rounded-[14px] inline-block px-[13px] py-[5px] text-sm mt-2 text-left mr-2">
              <a className="no-underline" href="/discover/tv?with_genres=16">
                Phim Hoạt Hình
              </a>
            </li>
            <li className="border border-gray-400 rounded-[14px] inline-block px-[13px] py-[5px] text-sm mt-2 text-left mr-2">
              <a className="no-underline" href="/discover/tv?with_genres=35">
                Phim Hài
              </a>
            </li>
            <li className="border border-gray-400 rounded-[14px] inline-block px-[13px] py-[5px] text-sm mt-2 text-left mr-2">
              <a className="no-underline" href="/discover/tv?with_genres=80">
                Phim Hình Sự
              </a>
            </li>
            <li className="border border-gray-400 rounded-[14px] inline-block px-[13px] py-[5px] text-sm mt-2 text-left mr-2">
              <a className="no-underline" href="/discover/tv?with_genres=37">
                Phim Miền Tây
              </a>
            </li>
            <li className="border border-gray-400 rounded-[14px] inline-block px-[13px] py-[5px] text-sm mt-2 text-left mr-2">
              <a className="no-underline" href="/discover/tv?with_genres=99">
                Phim Tài Liệu
              </a>
            </li>
            <li className="border border-gray-400 rounded-[14px] inline-block px-[13px] py-[5px] text-sm mt-2 text-left mr-2">
              <a className="no-underline" href="/discover/tv?with_genres=10764">
                Reality
              </a>
            </li>
            <li className="border border-gray-400 rounded-[14px] inline-block px-[13px] py-[5px] text-sm mt-2 text-left mr-2">
              <a className="no-underline" href="/discover/tv?with_genres=10765">
                Sci-Fi &amp; Fantasy
              </a>
            </li>
            <li className="border border-gray-400 rounded-[14px] inline-block px-[13px] py-[5px] text-sm mt-2 text-left mr-2">
              <a className="no-underline" href="/discover/tv?with_genres=10766">
                Soap
              </a>
            </li>
            <li className="border border-gray-400 rounded-[14px] inline-block px-[13px] py-[5px] text-sm mt-2 text-left mr-2">
              <a className="no-underline" href="/discover/tv?with_genres=10767">
                Talk
              </a>
            </li>
            <li className="border border-gray-400 rounded-[14px] inline-block px-[13px] py-[5px] text-sm mt-2 text-left mr-2">
              <a className="no-underline" href="/discover/tv?with_genres=10768">
                War &amp; Politics
              </a>
            </li>
          </ul>
        </div>
        <div className="p-4 border-t border-gray-200">
          <h3 className="text-gray-500">Certification</h3>
        </div>
        <div className="p-4 border-t border-gray-200">
          <h3 className="text-gray-500">Network</h3>
          <input
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
            type="text"
            placeholder="Filters by TV network"
          />
        </div>
      </div>
      <div className="btn-search flex justify-center items-center h-[44px] text-[19px] font-semibold text-gray-500 bg-gray-200 rounded-[20px] my-[20px]">
        Search
      </div>
    </div>
  );
}

export default Sidebar;
