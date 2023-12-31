import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleLogout } from "../Context/Reducer";

export default  function LogOut() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://futurepioneersmernstack-c4ax.vercel.app/api/users/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        if (res.status !== 200) {
          const error = new Error("An error occurred during logout.");

          throw error;
        }
        window.localStorage.setItem("token", "");
        Navigate("/LOGOUT");
        dispatch(handleLogout());
      })
      .catch((err) => console.log(err));
  });

  return <div></div>;
}
