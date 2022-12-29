import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router";

export default function Profile() {
  const Navigate = useNavigate()
  const auth = getAuth()
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;
  function onLogout(e){
   auth.signOut()
    Navigate('/')
  }
  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl name-center mt-6 font-bold ">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3 ">
          <form>
            {/*Name Input*/}

            <input
              type="text"
              id="name"
              value={name}
              disabled
              className="w-full px-4 mb-6 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out "
            />

            {/*Email Input*/}

            <input
              type="email"
              id="email"
              value={email}
              disabled
              className="w-full px-4 mb-6 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out "
            />
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center">
                Do you want to change your name?{" "}
                <span className="text-red-600 hover:text-red-800 cursor-pointer transition ease-in-out duration-200 ml-1">
                  Edit
                </span>
              </p>
              <p onClick={onLogout} className="text-blue-600 hover:text-blue-800 cursor-pointer transition ease-in-out duration-200">
                Sign out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
