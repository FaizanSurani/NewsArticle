import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const onInput = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent!");
      navigate("/sign-in");
    } catch (error) {
      toast.error("Could not send reset password");
    }
  };

  return (
    <>
      <section>
        <h1 className="text-center text-3xl font-bold mt-6">Forgot Password</h1>
        <div className="flex justify-center items-center flex-wrap px-6 py-12 mx-auto max-w-6xl">
          <div className="mb-12 md:w-[67%] lg:w-[50%] md:mb-6">
            <img
              className="w-full rounded-xl"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QH49PC552EETbMXBlVyU4wHaE7%26pid%3DApi&f=1&ipt=c3f3923f7b283b690263a40d8b706547624abd8de504553d24573f7890699faa&ipo=images"
              alt="News Image"
            />
          </div>
          <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
            <form onSubmit={onSubmit}>
              <input
                className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-black rounded transition ease-in-out"
                type="email"
                id="email"
                placeholder="Email Address"
                value={email}
                onChange={onInput}
              />
              <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
                <p className="mb-6">
                  Don't have an Account?
                  <Link
                    to="/sign-up"
                    className="text-red-600 hover:text-red-700 ml-1 transition duration-200 ease-in-out">
                    Register
                  </Link>
                </p>
                <p>
                  <Link
                    to="/sign-in"
                    className="text-blue-600 hover:text-blue-700 ml-1 transition duration-200 ease-in-out">
                    Sign in Instead
                  </Link>
                </p>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white uppercase px-7 py-3 text-sm font-medium rounded shadow-sm hover:bg-blue-700 hover:shadow-sm transition duration-150 ease-in-out">
                Send Reset Email
              </button>
              <div className="my-4 before:border-t flex before:flex-1 items-center before:border-gray-300 after:border-gray-300 after:border-t after:flex-1">
                <p className="text-center font-semibold mx-4">OR</p>
              </div>
              <OAuth />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
