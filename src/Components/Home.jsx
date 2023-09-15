import  { useEffect, useState } from "react";
import  {carts} from '../redux/Reducer'
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(false);

  // const [num, setNum] = useState(0)

  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/products");
        const result = await res.json();
        setData(result.products);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    }
    fetchData();
  }, []);

  // console.log(data);

  function handler(i){
    dispatch(carts(i))
  }




  return (
    <div className="flex flex-wrap justify-evenly p-2">
    

{

  error ? (<h1>error</h1>) : loading ? (<div
    role="status"
    className="flex items-center justify-center h-56 max-w-sm  bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
  >
    <svg
      className="w-[200px] h-[200px] text-gray-200 dark:text-gray-600"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 20"
    >
      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
    </svg>
    <span className="sr-only">Loading...</span>
  </div>
  ) : data.map((i)=>(

    <div
    key={i.id}
    className="max-w-sm  hover:bg-slate-200 duration-300 transition-all m-3  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img
        className=" rounded-t-lg h-[150px]  mx-auto"
        src={i.images[0]}
        
        alt=""
      />
    </a>
    <div className="p-5 relative">
      <a href="#">
        <h5 className=" mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">  
         {i.title}
         </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
       {i.description
}
      </p>
      <a
              onClick={(e) => {
                e.preventDefault()
          
                }}
                href="/card"
        className="inline-flex items-center px-3 py-2 text-sm font-bold text-center text-green-700  rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
       $ {
          i.price
        }
  
      </a>
      <a
        onClick={(e) => {
          e.preventDefault()
            handler(i)
          }}
        // onDoubleClick={dbl}
        href="#"
        className="m-2 md:m-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add Cart 
        <svg
          className="w-3.5 h-3.5 ml-2"
           fill="none"
         aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  </div>



  ))


}

   
    </div>
  );
};

export default Home;
