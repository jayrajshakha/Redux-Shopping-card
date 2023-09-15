import { useSelector } from "react-redux";
// import { useState } from "react";
import { useDispatch } from "react-redux";
import { delleter } from "../redux/Reducer";
import { Link } from "react-router-dom";
// import { editer } from "../redux/Reducer";
import { buyer } from "../redux/Reducer";

const Cart = () => {
  // const [item, setItem] = useState([]);

  const dispatch = useDispatch()

  const datas = useSelector((state) => state.data);
  // setItem(datas)
  

  console.log(datas);

  function del(d){

    // const a = datas.filter((f) => f.id === d)
    // console.log(a, 'a');
     dispatch(delleter(d))
  }

   

  return (
    <div>
      
         <h1 className="text-center text-xl bg-[#bce5bc] m-2 p-3 font-medium "> Items :  {datas.length}</h1>
          <div 
          className="relative overflow-x-auto shadow-md flex flex-wrap sm:rounded-lg">
          <table className=" sm:w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Stock
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Buy
                </th>
                <th scope="col" className="px-6 py-3">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>

              {

                datas.map((c) =>(

                  <tr key={c.id} 
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    
                    {c.title}
                  </th>
                  <td className="px-6 py-4">{c.stock}</td>
                  <td className="px-6 py-4">{c.category}</td>
                  <td className="px-6 py-4"> ${c.price}</td>
                  <td className="px-6 py-4">
                    <Link

                    onClick={() => dispatch(buyer(c.id))}
                  
                      to={`/card/${c.id}`}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Buy
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <a
                     onClick={() => del(c.id)}
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
  
                ))




              }
           

            </tbody>
          </table>
        </div>





        

    
     
    </div>
  );
};

export default Cart;
