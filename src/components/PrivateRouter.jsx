import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStat } from "../hooks/useAuthStat";

export default function PrivateRouter() {
  const { loggedIn, checkingStatus } = useAuthStat();
  // if (checkingStatus) {
  // }
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
}
