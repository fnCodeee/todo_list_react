import React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase/firebaseConfig";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const FormRegister = () => {
 const [Username, setUsername] = useState("");
 const [Email, setEmail] = useState("");
 const [Password, setPassword] = useState("");
 const [Role, setRole] = useState("petugas");

 const handleRegister = async (e) => {
  e.preventDefault();
  try {
   // Register ke firebase auth
   const db = getFirestore(app);
   const auth = getAuth(app);
   const userCredential = await createUserWithEmailAndPassword(auth, Email, Password);
   const user = userCredential.user;

   await setDoc(doc(db, "users", user.uid), {
    username: Username,
    email: Email,
    role: Role,
    createAt: new Date(),
   });
   alert("Register Succesfully!");
  } catch (error) {
   console.error("Error registrasi: ", error);
   alert("Terjadi kesalahan saat registrasi.");
  }
 };

 return (
  <div className="w-full justify-center items-center">
   <form onSubmit={handleRegister} className="col-span-3 sm:col-span-1 flex-col gap-5 mt-5 grid grid-rows-3">
    <div>
     <p className="text-md md:text-xl">Username</p>
     <input
      className="border border-slate-400 shadow-md p-3 w-full rounded-xl"
      type="text"
      placeholder="Username"
      onChange={(e) => setUsername(e.target.value)}
     />
    </div>

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
     <input
      className="border border-slate-400 shadow-md p-3 w-full rounded-xl"
      type="password"
      placeholder="****"
      onChange={(e) => setPassword(e.target.value)}
     />
    </div>

    <div>
     <select className="border w-full p-2" onChange={(e) => setRole(e.target.value)}>
      <option value="petugas">Petugas</option>
      <option value="administrator">Administrator</option>
     </select>
    </div>
    <button className="bg-blue-500 rounded-xl shadow-md h-12 text-white font-semibold" type="submit">
     Submit
    </button>
   </form>
  </div>
 );
};

export default FormRegister;
