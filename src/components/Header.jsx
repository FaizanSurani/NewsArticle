import React from "react";

export default function Header() {
  return (
    <>
      <div>
        <header className="flex justify-between items-center px-3 mx-auto max-w-6xl bg-green-50">
          <div>
            <ul className="flex space-x-10">
              <li className={`px-3 cursor-pointer`}>Home</li>
              <li>Sign In</li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}
