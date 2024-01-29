import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Header() {
  const [pageState, setPageState] = useState("Sign In");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign In");
      }
    });
  }, [auth]);

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <>
      <div className="bg-white border-b shadow-sm sticky top-0 z-10">
        <header className="flex justify-between items-center px-3 mx-auto max-w-6xl bg-green-50">
          <div>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frighttolife.org.uk%2Fwp-content%2Fuploads%2F2019%2F06%2FThe-Article-logo.png&f=1&nofb=1&ipt=2ef7e60060833db5d53e46b2c2137b890e18e290f9c55e8c1eb37100aa50f3db&ipo=images"
              alt="News Article Logo"
              className="h-11 cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>
          <div>
            <ul className="flex space-x-10">
              <li
                className={`py-3 cursor-pointer text-sm font-semibold text-gray-600 border-b-[3px] border-transparent 
                ${pathMatchRoute("/") && "text-black border-b-blue-700"}`}
                onClick={() => navigate("/")}>
                Home
              </li>
              <li
                className={`py-3 cursor-pointer text-sm font-semibold text-gray-600 border-b-[3px] border-transparent 
                ${
                  pathMatchRoute("/sign-in") && "text-black border-b-blue-700"
                }`}
                onClick={() => navigate("/profile")}>
                {pageState}
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}
