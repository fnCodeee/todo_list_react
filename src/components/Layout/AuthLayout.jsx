import React from "react";

const AuthLayout = (props) => {
 const { children, title } = props;
 return (
  <div className="w-full min-h-screen grid grid-cols-2 flex-col p-5 h-auto">
   <div className="col-span-2 sm:col-start-2 sm:col-end-2 md:grid md:grid-cols-4">
    <div className="w-full h-full col-start-2 col-end-4 flex-col justify-center items-center">
     <h1 className="text-2xl md:text-4xl">Welcome, to Cashier</h1>
     <p className="text-md  text-slate-600 sm:mt-4">Please input your details</p>
     {children}
    <Navigation type={title}/>
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
