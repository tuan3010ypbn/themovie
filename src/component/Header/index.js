
import {Link, Navigate, useNavigate} from 'react-router-dom';
import logo from '~/images/logo.svg';
import avatar from '~/images/avatar.jpg'
import { useAuthValue } from '~/authContext';

function Header() {

  const currentUser = true;
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('logout');
    localStorage.removeItem('user');
    navigate('/login');
  }

  const userMenu = [
    {
      title: 'View profile',
      to: '/@tuan2003'
    },
    {
      title: 'Discussions',
      to: '/discussions'
    },
    {
      title: 'Lists',
      to: '/list'
    },
    {
      title: 'Ratings',
      to: '/rating'
    },
    {
      title: 'Watchlist',
      to: '/watchlist'
    },
    {
      title: 'Edit Profile',
      to: '/setting/profile'
    },
    {
      title: 'Settings',
      to: '/setting'
    },
    {
      title: 'Logout',
      to: '/logout',
      separate: true,
    },

  ]

  // console.log(userMenu);

  return (
    <>
      <header>
        <div className="fixed z-[100] top-0 inset-x-0 bg-[#032541] text-[#fff]">
          <nav className="max-w-[1300px] ease-[ease-in] transition-all duration-[0.5s] mx-auto my-0 lg:block hidden">
            <div className="flex items-center gap-4 font-semibold px-10 py-[18px]">
              <Link
                to={"/"}
                className="apply text-[2.1rem] pl-0 pr-[15px] py-0"
              >
                <img src={logo} alt="logo" width="154" height="20" />
              </Link>

              <div className="flex items-center justify-between w-full">
                <ul className="flex items-center gap-6">
                  <li className="nav-list-container--item group relative">
                    <Link to={"/movies"}>Movies</Link>
                    <div className="absolute w-[86px] z-10 hidden flex-col gap-2.5 px-[22px] py-[18px] rounded-xl -left-1.5 top-[18px] bg-transparent group-hover:flex"></div>
                    <div className="absolute border border-[#ccc] shadow-md text-black w-[141px] z-10 hidden flex-col gap-2.5 items-start justify-center px-[22px] py-[18px] rounded-xl -left-1.5 top-[198%] bg-white group-hover:flex">
                      <Link
                        className="text-black text-base font-normal mb-2"
                        to={"/movies"}
                      >
                        Popular
                      </Link>
                      <Link
                        className="text-black text-base font-normal mb-2"
                        to={"/movies"}
                      >
                        Now Playing
                      </Link>
                      <Link
                        className="text-black text-base font-normal mb-2"
                        to={"/movies"}
                      >
                        Upcoming
                      </Link>
                      <Link
                        className="text-black text-base font-normal mb-2"
                        to={"/movies"}
                      >
                        Top Rated
                      </Link>
                    </div>
                  </li>

                  <li className="nav-list-container--item group relative">
                    <Link to={"/tvshow"}>TV Shows</Link>
                    <div className="absolute w-[86px] z-10 hidden flex-col gap-2.5 px-[22px] py-[18px] rounded-xl -left-1.5 top-[18px] bg-transparent group-hover:flex"></div>
                    <div className="absolute border border-[#ccc] shadow-md text-black w-[141px] z-10 hidden flex-col gap-2.5 items-start justify-center px-[22px] py-[18px] rounded-xl -left-1.5 top-[198%] bg-white group-hover:flex">
                      <Link
                        className="text-black text-base font-normal mb-2"
                        to={"/tvshow"}
                      >
                        Popular
                      </Link>
                      <Link className="text-black text-base font-normal mb-2" to={"#"}>
                        Airing Today
                      </Link>
                      <Link className="text-black text-base font-normal mb-2" to={"#"}>
                        On TV
                      </Link>
                      <Link className="text-black text-base font-normal mb-2" to={"#"}>
                        Top Rated
                      </Link>
                    </div>
                  </li>

                  <li className="nav-list-container--item group relative">
                    <Link to={"/people"}>People</Link>
                    <div className="absolute w-[86px] z-10 hidden flex-col gap-2.5 px-[22px] py-[18px] rounded-xl -left-1.5 top-[18px] bg-transparent group-hover:flex"></div>
                    <div className="absolute border border-[#ccc] shadow-md text-black w-[141px] z-10 hidden flex-col gap-2.5 items-start justify-center px-[22px] py-[18px] rounded-xl -left-1.5 top-[198%] bg-white group-hover:flex">
                      <Link
                        className="text-black text-base font-normal mb-2"
                        to={"/people"}
                      >
                        Popular
                      </Link>
                    </div>
                  </li>

                  <li className="nav-list-container--item group relative">
                    <Link to={"#"}>More</Link>
                    <div className="absolute w-[86px] z-10 hidden flex-col gap-2.5 px-[22px] py-[18px] rounded-xl -left-1.5 top-[18px] bg-transparent group-hover:flex"></div>
                    <div className="absolute border border-[#ccc] shadow-md text-black w-[141px] z-10 hidden flex-col gap-2.5 items-start justify-center px-[22px] py-[18px] rounded-xl -left-1.5 top-[198%] bg-white group-hover:flex">
                      <Link
                        className="text-black text-base font-normal mb-2"
                        to={"#"}
                      >
                        Popular
                      </Link>
                      <Link
                        className="text-black text-base font-normal mb-2"
                        to={"#"}
                      >
                        Airing Today
                      </Link>
                      <Link
                        className="text-black text-base font-normal mb-2"
                        to={"#"}
                      >
                        On TV
                      </Link>
                      <Link
                        className="text-black text-base font-normal mb-2"
                        to={"#"}
                      >
                        Top Rated
                      </Link>
                    </div>
                  </li>
                </ul>

                <ul className="flex items-center gap-[26px]">
                  <li>
                    <Link to={"/"}>
                      <i className="w-5 block">
                        <img src="~/images/plus.svg" alt="" />
                      </i>
                    </Link>
                  </li>

                  <li>
                    <Link to={"/"}>
                      <div className="w-7 h-[26px] flex justify-center items-center content-center border text-[0.7rem] px-[5px] py-[3px] rounded-[3px] border-solid border-white">
                        EN
                      </div>
                    </Link>
                  </li>

                  <li>
                    {
                      currentUser ? (
                        <img
                          onClick={handleLogout}
                          src={avatar}
                          className="w-[32px] h-[32px] rounded-full cursor-pointer"
                          alt='Nguyen Van A'
                        />
                      ) : (
                        <Link style={{display: 'inline-block'}} to={"/login"}>Login</Link>
                      )
                    }
                  </li>

                  <li>
                    <Link to={"/"}>Join TMDB</Link>
                  </li>

                  <li>
                    <Link to={"/"}>
                      <i className="block w-[30px]">
                        <img src="~/images/search.svg" alt="" />
                      </i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* <!-- ======= Mobile ==== --> */}
          {/* <div className="bg-blue-900 lg:hidden text-white flex items-center px-5 py-[10px] justify-between">
            <span className="mobile-header--icon menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <Link to={"/"} className="mobile-header--logo">
              <img src="~/images/logoFooter.svg" alt="" className="w-14" />
            </Link>
            <div className="mobile-header--right flex gap-2 items-center">
              <span className="mobile-header--icon user">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <img
                src="~/images/search.svg"
                alt=""
                className="mobile-header--icon search w-6 h-6"
              />
            </div>
          </div> */}
        </div>
      </header>
    </>
  );
}

export default Header;
