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
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      bounce: 0.4,
      duration: 0.5,
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
      window.localStorage.setItem("token", res.data);
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
      className="bg-white  py-[80px]  element-center"
    >
      <div className="   h-[350px] sm:h-[400px] w-[90%] md:w-[90%]  lg:w-[60%]  flex element-shadow  rounded-[10px]">
        <div className=" flex-[2] flex flex-col items-center justify-center bg-[white] rounded-tl-[10px] rounded-bl-[10px]">
          <form className="flex flex-col items-center" onSubmit={HandleSubmit}>
            <h1 className="text-[17px] my-auto sm:text-[20px] p-7 font-black md:text-[40px] mt-0">
              Login to Your Account
            </h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={data.email}
              required
              className="[outline:none] text-center border mb-2.5 p-2 rounded-[5px] border-solid border-[#999999]  w-[200px] md:w-[330px] bg-[#ffffff] text-sm mx-0 my-[5px] border-[none] focus:border-black focus:border-[2px]"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={data.password}
              required
              className="   [outline:none] text-center border mb-2.5 p-2 rounded-[5px] border-solid border-[#999999]  w-[200px] md:w-[330px] bg-[#ffffff] text-sm mx-0 my-[5px] border-[none] focus:border-black focus:border-[2px]]"
            />
            {error && (
              <div className=" element-center w-[150px] md:w-[370px] text-[10px] md:text-sm bg-[#ff5a5a] text-[white] text-center mx-0 my-[5px] md:p-[15px] rounded-[5px]">
                {error}
              </div>
            )}
            <br />
            <button
              type="submit"
              className="[outline:none]  font-bold md:text-[17px]  text-white bg-[black]   w-[70px] md:w-[180px] font-[bold] text-sm cursor-pointer px-0 py-3 element-center h-[10px] md:h-[30px] rounded-[20px] border-[none]"
            >
              LOG IN 
            </button>
          </form>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center bg-black rounded-tr-[10px] rounded-br-[10px]">
          <h1 className="text-[white]  font-bold text-[17px] md:text-[40px] self-center mb-[90px] md:mb-[100px]">
            New Here ?
          </h1>
          <Link to="/signup">
            <button
              type="button"
              className="[outline:none]  text-white bg-transparent  border-[1.5px] font-bold md:text-[17px]  w-[70px] md:w-[180px] font-[bold] text-sm cursor-pointer px-0 py-3 element-center h-[10px] md:h-[30px] rounded-[15px] border-white"
            >
              SIGN UP
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
export default Login;
