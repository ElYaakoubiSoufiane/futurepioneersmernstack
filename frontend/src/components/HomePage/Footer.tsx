import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import img5 from "../../assets/63110131796835.Y3JvcCw4NTAsNjY0LDAsMA.png";
import { Link } from "react-router-dom";
function Footer() {
  const [as, setas] = useState(["About", "Campaign", "Courses"]);
  const [socialIcons, setSocialIcons] = useState([
    "facebook",
    "twitter",
    "instagram",
  ]);
  return (
    <footer className="bg-[#000000] h-[140px] md:h-[110px] lg:h-[120px]">
      <div className="mx-auto w-full px-3 max-w-screen-xl  ">
        <div className="md:flex pt-3  md:justify-between">
          <div className="element-center mb-1 md:mb-0">
            <a href="/" className="flex items-center">
              <img src={img5} className="h-8 me-3" alt="FlowBite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                FUTURE PIONEERS
              </span>
            </a>
          </div>
          <div className="grid grid-cols-3 text-center gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-2">
                  <a href="/about" className=" hover:text-[#540b0e]  ">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-2">
                  <a href="/courses" className="hover:text-[#540b0e]  ">
                    Courses
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-2">
                  <a href="/campaign" className="hover:text-[#540b0e] ">
                    Campaign
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-2 border-gray-200 w-[90%] sm:mx-auto lg:my-4" />
        <div className="sm:flex flex place-content-between sm:items-center sm:justify-between">
          <span className="text-[13px]  text-center flex mx-[10px]  sm:text-center text-white">
            ©2023 Created By El Yaakoubi Soufiane
          </span>
          <div className="flex   sm:justify-center sm:mt-0">
            <Link to="https://www.instagram.com/futurepioneers_ensaf/">
              <FaInstagram className="mx-[4px] h-[20px] w-[20px]  font-bold text-[#ffffff]" />
            </Link>
            <Link to="https://ma.linkedin.com/company/future-pioneers-ensaf">
              {" "}
              <FaLinkedinIn className="mx-[16px] h-[20px] w-[20px]  text-white" />
            </Link>
            <Link to="https://web.facebook.com/FuturePioneersEnsaf/?_rdc=1&_rdr">
              <FaFacebookF className="mx-[4px]  h-[20px] w-[20px]  text-[#ffffff]" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
