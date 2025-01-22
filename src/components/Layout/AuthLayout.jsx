import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";

const AuthLayout = (props) => {
 const { children, type } = props;
const [a, seta] = useState("")

 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    if(currentUser) {
      console.log(currentUser.displayName)
      seta(currentUser)
    } else {
      console.log("none")
      seta("")
    }
  });
  return () => unsubscribe();
 }, [])

 const handleLogout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("error woi: ", error)
  }
 }
 return (
  <div className="w-full min-h-screen grid grid-cols-2 flex-col p-5 h-auto">
   <div className="col-span-2 sm:col-start-2 sm:col-end-2 md:grid md:grid-cols-4">
    <div className="w-full h-full col-start-2 col-end-4 flex-col justify-center items-center">
     <h1 className="text-2xl md:text-4xl">
      {type === "login" ? 
      "Hello Friend"
      :
      "Welcome"
    }
     </h1>
     <p className="text-md  text-slate-600 sm:mt-4">
      {type === "login" ?
      "Welcome back, are you having a good day?"
      :
      "Are you going to do something today?"
      }
     </p>
     {children}
    <Navigation type={type}/>
    <div className="w-full flex justify-center">
    {type === "login" ? 
     <p className="mt-5 text-sm text-slate-600">Don't have an account? <Link to="/auth/register" className="text-blue-500 font-semibold">Sign Up</Link></p>
     : 
     <p className="mt-5 text-sm text-slate-600">Already have an account? <Link to="/auth/login" className="text-blue-500 font-semibold">Sign In</Link></p>
    }
    
    </div>
    {a ? 
    <button type="button" className="w-full mt-5 border-2 p-2 rounded-full border-red-600 text-red-600" onClick={() => handleLogout()}>Log out</button>
    :
    <span>none</span>
    }
    </div>
   </div>
  </div>
 );
};

const Navigation = ({ type }) => {
  const RegisterLink = () => {
    window.location.href = "/auth/register";
  }
  if(type === "login") {
    return (
      <button className="border-2 border-blue-500 rounded-xl shadow-md w-full h-12 mt- text-blue-500 mt-5 font-semibold" onClick={() => RegisterLink()}>
        Sign Up
      </button>
    )
  }
}

export default AuthLayout;
