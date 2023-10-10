
import LogoFooter from '~/images/logoFooter.svg';

function Footer() {
  return (
    <>
      <footer className="footer bg-[#03213a] text-white">
        <div className="footer-nav max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="join-community">
            <img
              src={LogoFooter}
              alt="footer-logo"
              className="w-32 mb-6"
            />
            <a
              href="#!"
              className="footer-btn bg-white text-blue-400 font-bold text-lg rounded-md border-2 border-white px-6 py-2 transition-colors hover:bg-white hover:text-blue-400"
            >
              Join community
            </a>
          </div>
          <div className="footer-column">
            <h5 className="footer-column--heading text-lg font-semibold md:mb-4 mb-0">
              THE BASICS
            </h5>
            <ul className="footer-column--title">
              <li>
                <a href="#!" className="text-white">
                  Giới thiệu về TMDB
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Support Forums
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  API
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  System Status
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h5 className="footer-column--heading text-lg font-semibold md:mb-4 mb-0">
              GET INVOLVED
            </h5>
            <ul className="footer-column--title">
              <li>
                <a href="#!" className="text-white">
                  Contribution Bible
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Add New Movie
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Add New TV Show
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h5 className="footer-column--heading text-lg font-semibold md:mb-4 mb-0">
              COMMUNITY
            </h5>
            <ul className="footer-column--title">
              <li>
                <a href="#!" className="text-white">
                  Guidelines
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Discussions
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Leaderboard
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h5 className="footer-column--heading text-lg font-semibold md:mb-4 mb-0">
              LEGAL
            </h5>
            <ul className="footer-column--title">
              <li>
                <a href="#!" className="text-white">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  API Terms of Use
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  DMCA Takedown Request
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
