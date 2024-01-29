import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStat } from "../hooks/useAuthStat";
import Loader from "./Loader";

export default function PrivateRouter() {
  const { loggedIn, checkingStatus } = useAuthStat();
  if (checkingStatus) {
    return <Loader />;
  }
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
}
