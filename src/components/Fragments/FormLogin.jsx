import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/firebaseConfig";

const FormLogin = () => {
 const [email, setEmail] = useState("");
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");

 const handleLogin = async (event) => {
  event.preventDefault();
  try {
   const usercredential = await signInWithEmailAndPassword(auth, email, password);
   const user = usercredential.user;
   console.log("Logged in user display name:", user.displayName);
   window.location.href = "/pages/home"
   alert("Login Succesfully!");
  } catch (error) {
   console.error("Error login: ", error);
   alert("Terjadi kesalahan saat login.");
  }
 };

 return (
  <div className="w-full justify-center items-center">
   <form onSubmit={handleLogin} className="col-span-3 sm:col-span-1 flex-col gap-4 mt-5 grid grid-rows-3 items-end">
    <div>
     <p className="text-md md:text-xl">Email</p>
     <input
      className="border border-slate-400 shadow-md p-3 w-full rounded-xl"
      type="email"
      placeholder="example@gmail.com"
      onChange={(e) => setEmail(e.target.value)}
     />
    </div>
    <div>
     <p className="text-md md:text-xl">Password</p>
     <input className="border border-slate-400 shadow-md p-3 w-full rounded-xl" type="password" placeholder="****" onChange={(e) => setPassword(e.target.value)} />
    </div>
    <button className="bg-blue-500 rounded-xl shadow-md h-12 text-white font-semibold" type="submit">
     Login
    </button>
   </form>
  </div>
 );
};

export default FormLogin;
