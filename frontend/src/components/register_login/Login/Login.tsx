import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { handleLogin } from "../../Context/Reducer";
import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 1, y: -20, scale: 0 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
const item = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      bounce: 0.4,
      duration: 1,
    },
  },
};
const Login = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = {
    email,
    password,
  };

  const HandleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const url = "https://futurepioneersmernstack-c4ax.vercel.app/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      // console.log(res.data);

      dispatch(handleLogin());
      navigate("/");
    } catch (error: any) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <motion.div
      variants={item}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      className="bg-white pt-[50px] flex pb-[100px] items-center justify-center"
    >
      <div className="   h-[300px] sm:h-[400px] w-[90%] md:w-[90%]  lg:w-[60%]  flex element-shadow shadow-[0_14px_14px_rgba(0, 0, 0, 0.25),0_10px_10px_rgba(0,0,0,0.22)] rounded-[10px]">
        <div className=" flex-[2] flex flex-col items-center justify-center bg-[white] rounded-tl-[10px] rounded-bl-[10px]">
          <form className="flex flex-col items-center" onSubmit={HandleSubmit}>
            <h1 className="text-[12px] my-auto sm:text-[20px] p-10 font-black md:text-[40px] mt-0">
              Login to Your Account
            </h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
              value={data.email}
              required
              className="[outline:none] text-center border mb-2.5 p-2 rounded-[5px] border-solid border-[#ddd]  w-[150px] md:w-[330px] bg-[#ffffff] text-sm mx-0 my-[5px] border-[none] focus:border-black focus:border-[2px]"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={data.password}
              required
              className="   [outline:none] text-center border mb-2.5 p-2 rounded-[5px] border-solid border-[#ddd]  w-[150px] md:w-[330px] bg-[#ffffff] text-sm mx-0 my-[5px] border-[none] focus:border-black focus:border-[2px]]"
            />
            {error && (
              <div className=" w-[270px] md:w-[370px] text-sm bg-[#f34646] text-[white] text-center mx-0 my-[5px] p-[15px] rounded-[5px]">
                {error}
              </div>
            )}
            <br />
            <button
              type="submit"
              className="[outline:none]  font-bold md:text-[17px]  text-white bg-[black]   w-[70px] md:w-[180px] font-[bold] text-sm cursor-pointer px-0 py-3 element-center h-[10px] md:h-[30px] rounded-[20px] border-[none]"
            >
              Log In
            </button>
          </form>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center bg-black rounded-tr-[10px] rounded-br-[10px]">
          <h1 className="text-[white]  font-bold text-[12px] md:text-[40px] self-center mb-[90px] md:mb-[100px]">
            New Here ?
          </h1>
          <Link to="/signup">
            <button
              type="button"
              className="[outline:none]  text-black bg-[white]  font-bold md:text-[17px]  w-[70px] md:w-[180px] font-[bold] text-sm cursor-pointer px-0 py-3 element-center h-[10px] md:h-[30px] rounded-[20px] border-[none]"
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
export default Login;
