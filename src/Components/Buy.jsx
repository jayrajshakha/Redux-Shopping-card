
import { useState } from 'react'
import { useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'



const Buy = () => {

    const [val, setVal] = useState(1)

    const st = useSelector(state => state.data)
    console.log(st[0],'st');

    // const param = useParams()
    // console.log(param);

    function order(){

            setVal(1)
            
            alert( val === 0 ? 'Add Quintyty' :  `Your ${st[0].title} On the Way 😍 Ready Rakho ₹ ${st[0].price * val * 80}`)
    }

    
  return (

  
    
    <div className='sm:flex sm:justify-center items-center mt-3'>
        

        {
        st[0] === undefined ? (<h1  className='text-center bg-sky-700 rounded-md text-white p-2 m-2 '> <Link to={'/'}> Please Add Carts </Link></h1>) : (<div className='flex sm:flex-col md:flex-row border-2 border-black rounded-md m-2 p-2'>
         <div className=' w-[50%]' >
           <h3 className='font-normal text-xl p-2 m-2' >Brand : {st[0].brand}</h3>
            <h3 className='font-normal text-xl p-2 m-2' > Category : {st[0].category}</h3>
            <p className='font-normal text-lg text-gray-600 p-2 m-2'><span className='text-black font-normal'>description</span> : {st[0].description}</p>
        <h2 className='font-semibold text-xl p-2 m-2'>OFF : <span className='text-red-900 focus:bg-red-700'> {`${st[0].discountPercentage} %`}</span></h2>
            <h1 className='font-semibold text-2xl p-2 m-2'>Devise Name : {st[0].title}</h1>
            <button 
            onClick={order}
            className='relative inline-flex items-center p-3 m-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 '>ORDER NOW</button>
            <input 
            onChange={(e) =>setVal(e.target.value) 
            }

            type="number" className='border-3 outline-none rounded-md border-blue-700' name="" placeholder='1' id="" /> 
           
          </div>
          <div className='  w-[50%] '>
             <h1 className='font-medium p-2 m-3 text-2xl text-center '>{st[0].category}</h1>
            <img 
            className=' block md:h-[250px] mx-auto '
            src={st[0].images[0]} alt="" />
            <p className=" font-bold ml-2 sm:text-sm md:text-xl text-center">Price: ${st[0].price * val} </p> 
            
       
        </div>
        
        </div>)
    }


        </div>
       

  )
}

export default Buy
