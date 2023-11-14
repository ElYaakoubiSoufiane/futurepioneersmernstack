import React, { useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdiHomeVariant } from "@mdi/js";
import { mdiViewHeadline } from "@mdi/js";
import imag1 from "../../assets/63110131796835.Y3JvcCw4NTAsNjY0LDAsMA.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { handleLogout } from "../Context/Reducer";
import { useDispatch, useSelector } from "react-redux";

const getWindowWidth = () => {
  const { innerWidth: width } = window;
  return width;
};

export default function Header() {
  const isTrue = false;
  // const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  const [menuiconcol, setMenuiconcol] = useState("");
  if (isTrue) {
    setMenuiconcol("hover:bg-black hover:text-white");
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(getWindowWidth());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [MobileMenu, setMobileMenu] = useState(isTrue);
  const dispatch = useDispatch();

  const isLogged = useSelector((state: any) => state.auth.isLogged);
  return (
    <>
      <div className="z-10 fixed h-[47px] box-shadow mx-auto w-full bg-white">
        {isLogged ? (
          <nav className="container  fixed   max-w-full transition-colors duration-500">
            <div className=" max-w-auto px-2  z-10 h- sm:px-6 lg:px-8">
              <div className="relative flex w-[100%] items-center justify-between">
                <div className="flex  pt-2 flex-1 items-center justify-center  sm:items-stretch sm:justify-start">
                  <div className=" flex  flex-shrink-0 ">
                    <Link to={"/"}>
                      <img
                        className="h-10 w-10 object-contain translate-x-5 top-0 bg-[#ffffff]  rounded-[50%] "
                        src={imag1}
                        alt="Your Company"
                      />
                    </Link>
                  </div>

                  <div className="hidden max-h-full my-auto sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      <Link
                        to="/"
                        className="hover:bg-[#d0fcff]  text-black rounded-md px-3 py-1 text-sm font-medium"
                        aria-current="page"
                      >
                        {" "}
                        <Icon path={mdiHomeVariant} size={1} />
                      </Link>
                      <Link
                        to="/courses"
                        className=" text-black font-extrabold  hover:bg-[#000000] hover:text-white    rounded-md px-3 py-2 text-sm "
                      >
                        Courses
                      </Link>
                      <Link
                        to="/campaign"
                        className="text-black   hover:bg-[#000000] hover:text-white   rounded-md px-3 py-2 text-sm font-extrabold"
                      >
                        Campaign
                      </Link>
                      <Link
                        to="/about"
                        className="text-black   hover:bg-[#000000] hover:text-white   rounded-md px-3 py-2 text-sm font-extrabold"
                      >
                        About
                      </Link>

                      <Link
                        className="bg-gray text-black rounded-md  hover:bg-[#000000] hover:text-white   px-3 py-2 text-sm font-extrabold "
                        aria-current="page"
                        onClick={() => {
                          dispatch(handleLogout());
                          localStorage.setItem("token", "");
                        }}
                        to="/login"
                      >
                        LogOut
                      </Link>
                    </div>

                    <div className="flex space-x-4"></div>
                  </div>
                </div>
                <div className=" flex element-center ">
                  <Link to="https://www.instagram.com/futurepioneers_ensaf/">
                    <FaInstagram className="mx-[4px] h-[20px] font- text-[#000000]" />
                  </Link>
                  <Link to="https://ma.linkedin.com/company/future-pioneers-ensaf">
                    {" "}
                    <FaLinkedinIn className="  mx-[6px] h-[20px] text-[#000000]" />
                  </Link>
                  <Link to="https://web.facebook.com/FuturePioneersEnsaf/?_rdc=1&_rdr">
                    <FaFacebookF className="mx-[4px]  text-[#000000]" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="absolute top-[8px] left-0   pr-[10px] flex  sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                onClick={() => {
                  setMobileMenu((isTrue: any) => !isTrue);
                }}
                type="button"
                className={`relative  rounded-md  text-black font-extrabold ${menuiconcol} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <Icon path={mdiViewHeadline} size={1} />
              </button>
            </div>
            <div
              className="sm:hidden element-shadow bg-[#ffffff]"
              id="mobile-menu"
            >
              <div className="grid  grid-rows-4 ">
                {MobileMenu && windowWidth < 643 && (
                  <>
                    {" "}
                    <Link
                      onClick={() => {
                        setMobileMenu(false);
                      }}
                      to="/"
                      className=" text-black font-extrabold  text-center hover:bg-[#000000] hover:text-white    rounded-md px-3 py-2 text-sm "
                    >
                      Home
                    </Link>
                    <Link
                      onClick={() => {
                        setMobileMenu(false);
                      }}
                      to="/courses"
                      className=" text-black font-extrabold  text-center hover:bg-[#000000] hover:text-white    rounded-md px-3 py-2 text-sm "
                    >
                      Courses
                    </Link>
                    <Link
                      onClick={() => {
                        setMobileMenu(false);
                      }}
                      to="/campaign"
                      className="text-black  text-center  hover:bg-[#000000] hover:text-white   rounded-md px-3 py-2 text-sm font-extrabold"
                    >
                      Campaign
                    </Link>
                    <Link
                      onClick={() => {
                        setMobileMenu(false);
                      }}
                      to="/about"
                      className="text-black   text-center hover:bg-[#000000] hover:text-white   rounded-md px-3 py-2 text-sm font-extrabold"
                    >
                      About
                    </Link>
                    <Link
                      to="/LOGIN"
                      className="bg-gray text-black rounded-md  text-center hover:bg-[#000000] hover:text-white   px-3 py-2 text-sm font-extrabold "
                      aria-current="page"
                      onClick={() => {
                        dispatch(handleLogout());
                        localStorage.setItem("token", "");
                      }}
                    >
                      LogOut
                    </Link>
                  </>
                )}
              </div>
            </div>
          </nav>
        ) : (
          <nav className=" max-w-full transition-colors duration-500 ">
            <div className=" max-w-auto px-2  z-10 h- sm:px-6 lg:px-8">
              <div className="relative flex w-[100%] items-center justify-between">
                <div className=" pl-[10px] pt-2 flex-1 text-center   items-center justify-center  sm:items-stretch sm:justify-start">
                  {" "}
                  <Link
                    to="/login"
                    className="bg-gray text-white rounded-md bg-[#000000] hover:bg-[#949494] hover:text-white   px-3 py-2 text-sm font-extrabold "
                    aria-current="page"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-gray  pointer-events-auto text-[#000000] rounded-md  hover:text-[#949494] px-3 py-2 text-sm font-extrabold "
                    aria-current="page"
                  >
                    Register
                  </Link>
                </div>
                <div className=" flex pt-[5px] element-center ">
                  <Link to="https://www.instagram.com/futurepioneers_ensaf/">
                    <FaInstagram className="mx-[4px] font-bold text-[#000000]" />
                  </Link>
                  <Link to="https://ma.linkedin.com/company/future-pioneers-ensaf">
                    {" "}
                    <FaLinkedinIn className="mx-[6px]  text-[#000000]" />
                  </Link>
                  <Link to="https://web.facebook.com/FuturePioneersEnsaf/?_rdc=1&_rdr">
                    <FaFacebookF className="mx-[4px]  text-[#000000]" />
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
      <br />
    </>
  );
}
