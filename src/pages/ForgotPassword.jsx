import { sendPasswordResetEmail, getAuth } from "firebase/auth";
import React, { useState } from "react";
import { Link as Link } from "react-router-dom";
import { toast } from "react-toastify";
import OAuth from "../components/OAuth";
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  
  function onChange(e) {
   setEmail (e.target.value);
    
  };
  async function onSubmit(e){
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
toast.success('Email was sent')
    } catch (error) {
      toast.error("could not send reset email")
    }
  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            className="w-full rounded-2xl"
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input
              className="w-full p-3 border-[2px] text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-7"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
            />
            <div>
              
            </div>
            <div className="flex flex-wrap justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-3">
                Don't have an account?{" "}
                <Link
                  className="text-red-600 hover:text-red-900 transition duration-200 ease-in-out ml-1"
                  to="/sign-up"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  className="text-blue-600 hover:text-blue-900 transition duration-200 ease-in-out ml-1"
                  to="/sign-in"
                >
                  Sign in instead
                </Link>
              </p>
            </div>
            <button
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-10000 ease-linear hover:shadow-lg active:bg-blue-900"
              type="submit"
            >
              Send reset password
            </button>
            <div>
              <p className="flex items-center text-center font-semibold mx-4 before:border-t  before:flex-1  before:border-gray-300 after:border-t  after:flex-1  after:border-gray-300 mt-2 mb-2">
                OR
              </p>
            </div>
            <OAuth/>
          </form>
        </div>
      </div>
    </section>
  );
}
