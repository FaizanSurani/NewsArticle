import React, { useState, useEffect } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase";
import MyPreference from "../components/MyPreference";

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const apiKey = "470a464d3e6442a2a6c3d847be2d0ee9";

  const [category, setCategory] = useState("general");
  const [categoryData, setCategoryData] = useState([]);
  const [changeDetail, setChangeDetail] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, { displayName: name });

        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
          name: name,
        });
      }
      toast.success("Profile Details Updated!");
    } catch (error) {
      toast.error("Could not Update the Profile Details");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`
      );
      const data = await response.json();
      setCategoryData(data.articles);
      console.log(data.articles);
    };
    fetchData();
  }, [category]);

  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            <input
              type="text"
              id="name"
              value={name}
              disabled={!changeDetail}
              onChange={onChange}
              className={`mb-6 px-4 py-2 w-full text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${
                changeDetail && "bg-red-200 focus:bg-red-200"
              }`}
            />
            <input
              type="email"
              id="email"
              value={email}
              disabled={!changeDetail}
              onChange={onChange}
              className="px-4 py-2 mb-6 w-full text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            />
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center">
                Do you want to change your name?
                <span
                  onClick={() => {
                    changeDetail && onSubmit();
                    setChangeDetail((prevState) => !prevState);
                  }}
                  className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer">
                  {changeDetail ? "Apply Changes" : "Edit"}
                </span>
              </p>
              <p
                onClick={onLogout}
                className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer">
                Sign Out
              </p>
            </div>
          </form>
        </div>
        <div>
          <h1 className="text-3xl mt-6 font-bold text-center mb-6">
            Latest News
          </h1>
          <div>
            <ul className="flex justify-between items-center">
              <li className="rounded-full ml-3 mr-3 border border-gray-600 px-7 py-2 cursor-pointer hover:border-gray-800 active:border-gray-900 transition duration-150 ease-in-out">
                General
              </li>
              <li className="rounded-full ml-3 mr-3 border border-gray-600 px-7 py-2 cursor-pointer hover:border-gray-800 active:border-gray-900 transition duration-150 ease-in-out">
                Business
              </li>
              <li className="rounded-full ml-3 mr-3 border border-gray-600 px-7 py-2 cursor-pointer hover:border-gray-800 active:border-gray-900 transition duration-150 ease-in-out">
                Entertainment
              </li>
              <li className="rounded-full ml-3 mr-3 border border-gray-600 px-7 py-2 cursor-pointer hover:border-gray-800 active:border-gray-900 transition duration-150 ease-in-out">
                Health
              </li>
              <li className="rounded-full ml-3 mr-3 border border-gray-600 px-7 py-2 cursor-pointer hover:border-gray-800 active:border-gray-900 transition duration-150 ease-in-out">
                Science
              </li>
              <li className="rounded-full ml-3 mr-3 border border-gray-600 px-7 py-2 cursor-pointer hover:border-gray-800 active:border-gray-900 transition duration-150 ease-in-out">
                Sports
              </li>
              <li className="rounded-full ml-3 mr-3 border border-gray-600 px-7 py-2 cursor-pointer hover:border-gray-800 active:border-gray-900 transition duration-150 ease-in-out">
                Technology
              </li>
            </ul>
          </div>
          <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categoryData.map((data, index) => {
              return (
                <MyPreference
                  key={index}
                  title={data.title}
                  description={data.description}
                  src={data.urlToImage}
                  url={data.url}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
