import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
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
  hidden: { x:10, opacity: 0 },
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
const Signup = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsename] = useState("");
  const [level, setLevel] = useState("CP-1");
  const [password, setPassword] = useState("");

  const data = {
    username,
    email,
    level,
    password,
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const url = "https://futurepioneersmernstack-c4ax.vercel.app/api/users";
      const { data: res } = await axios.post(url, data);

      console.log(res.message);
      navigate("/login");
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
      className="w-full pb-[100px] pt-[200px] bg-white element-cente flex items-center justify-center"
    >
      <div className="   h-[350px] element-shadow rounded-[10px]  sm:h-[400px] w-[90%] md:w-[90%]  lg:w-[60%]  flex ">
        <div className="flex-1 rounded-tl-[10px] rounded-bl-[10px] flex text-center flex-col items-center justify-center bg-black  ">
          <h1 className="text-[white] text-center mx-[5px] font-bold text-[17px] md:text-[40px] self-center mb-[70px] md:mb-[100px]">
            Welcome Back
          </h1>
          <Link to="/login">
            <button
              type="button"
              className="[outline:none]  text-black bg-[white]  font-bold md:text-[17px]  w-[70px] md:w-[180px] font-[bold] text-sm cursor-pointer px-0 py-3 element-center h-[10px] md:h-[30px] rounded-[20px] border-[none]"
            >
              Log in
            </button>
          </Link>
        </div>
        <div className="flex-[2] flex flex-col items-center justify-center bg-[white] rounded-tr-[10px] rounded-br-[10px]">
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <h1 className="text-[17px] sm:text-[20px]  font-bold  md:text-[40px] mt-0">
              Create Account
            </h1>

            <input
              type="text"
              placeholder="User Name"
              name="username"
              onChange={(e) => setUsename(e.target.value)}
              value={username}
              required
              autoFocus
              className="[outline:none] text-center border mb-2.5 p-2 rounded-[5px] border-solid border-[#ddd]  w-[150px] md:w-[330px] bg-[#ffffff] text-sm mx-0 my-[5px] border-[none] focus:border-black focus:border-[2px]"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              className="[outline:none] text-center border mb-2.5 p-2 rounded-[5px] border-solid border-[#ddd]  w-[150px] md:w-[330px] bg-[#ffffff] text-sm mx-0 my-[5px] border-[none] focus:border-black focus:border-[2px]"
            />

            <select
              id="level"
              name="level"
              required
              className="[outline:none] text-center border mb-2.5 p-2 rounded-[5px] border-solid border-[#ddd]  w-[150px] md:w-[330px] bg-[#ffffff] text-sm mx-0 my-[5px] border-[none] focus:border-black focus:border-[2px]"
              placeholder="CP / CI"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value="CP-1">CP-1</option>
              <option value="CP-2">CP-2</option>
              <option value="CI-1">CI-1</option>
              <option value="CI-2">CI-2</option>
              <option value="CI-3">CI-3</option>
            </select>

            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className="[outline:none] text-center border mb-2.5 p-2 rounded-[5px] border-solid border-[#ddd]  w-[150px] md:w-[330px] bg-[#ffffff] text-sm mx-0 my-[5px] border-[none] focus:border-black focus:border-[2px]"
            />

            {error && (
              <div className=" element-center w-[200px] md:w-[370px] text-[10px] md:text-sm bg-[#ff5a5a] text-[white] text-center mx-0 my-[5px] md:p-[15px] rounded-[5px]">
                {error}
              </div>
            )}
            <button
              type="submit"
              className="[outline:none]  text-white bg-[black]  font-bold md:text-[17px]  w-[70px] md:w-[180px] font-[bold] text-sm cursor-pointer px-0 py-3 element-center h-[10px] md:h-[30px] rounded-[20px] border-[none]"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Signup;
