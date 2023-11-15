import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleLogout } from "../Context/Reducer";

export default async function LogOut() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://futurepioneers.vercel.app/api/users/logout", {
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
        Navigate("/LOGOUT");
        dispatch(handleLogout());
      })
      .catch((err) => console.log(err));
  });

  return <div></div>;
}
