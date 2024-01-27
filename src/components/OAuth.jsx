import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function OAuth() {
  return (
    <button
      type="button"
      className="flex justify-center items-center bg-red-700 text-white text-sm uppercase px-7 py-3 hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg w-full rounded transition duration-150 ease-in-out">
      <FcGoogle className="text-2xl bg-white rounded-full mr-2" />
      Continue with Google
    </button>
  );
}
