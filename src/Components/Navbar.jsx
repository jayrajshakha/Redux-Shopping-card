// import React from 'react'
import { Link } from "react-router-dom";
// import { useState } from "react"
import { useSelector } from "react-redux";

const Navbar = () => {
  const data = useSelector((state) => state.data);

  // const [num, setNum] = useState(0)

  console.log(data, "d");

  // setNum(data.length)

  return (
    <div className="sticky top-0 bg-gray-300 h-[80%]">
      <nav className=" grid grid-cols-2 md:grid-cols-3 h-[80%] ">
        <img
          className="h-[80px] p-2 m-2 ml-3 "
          src="https://www.freeiconspng.com/uploads/flame-logo-png-30.png"
          alt=""
        />
        <h1 className=" hidden md:inline-block text-center mx-auto text-2xl font-bold my-auto"> Jovial-Deals</h1>

        <ul className="flex justify-end items-start mr-5">
          <Link
            // onClick={(e) => e.preventDefault()}
            to={"/"}
            className=" relative inline-flex items-center p-3 m-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Home
          </Link>
           <Link 
            to={'/card'}
            className='relative inline-flex items-center p-3 m-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
               <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
              {data.length}
            </div>
              
               Carts - {data.length}
            </Link> 
         
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
