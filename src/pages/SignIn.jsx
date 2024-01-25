import React from "react";

export default function SignIn() {
  return (
    <>
      <section>
        <h1 className="text-center text-3xl font-bold mt-6">Sign In</h1>
        <div className="flex justify-center items-center flex-wrap px-6 py-12 mx-auto max-w-6xl">
          <div className="mb-12 md:w-[67%] lg:w-[50%] md:mb-6">
            <img
              className="w-full rounded-xl"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QH49PC552EETbMXBlVyU4wHaE7%26pid%3DApi&f=1&ipt=c3f3923f7b283b690263a40d8b706547624abd8de504553d24573f7890699faa&ipo=images"
              alt="News Image"
            />
          </div>
          <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
            <form>
              <input
                className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-blue-300 rounded transition ease-in-out"
                type="email"
                id="email"
                placeholder="Email Address"
              />
              <div className="relative mb-6">
                <input
                  className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-blue-300 rounded transition ease-in-out"
                  type="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
