import React from 'react'
import { Link } from 'react-router-dom'

function Recommendation() {
  return (
   <>
   <div className='w-full h- flex '>
    <div className='h-[calc(100vh-2rem)] w-full max-w-[20rem] bg-green-300 p-4 shadow-xl shadow-blue-gray-900/5 '>
     <div className="mb-2 p-4 ">
        <h1 className='p-2 font-bold'>Farmer Sidebar</h1>
     </div>

     <div className='space-y-8'>

     <div className='h-5 w-full  '>
        <button className=' h-7 w-full rounded-lg font-bold hover:bg-red-300 border uppercase'><Link to='/facropplan'>Crop Planning</Link>
        </button>
     </div>

     <div className='h-5 w-full  '>
        <button className=' h-7 w-full  rounded-lg font-bold hover:bg-red-300 border uppercase'><Link to='/farecommendation'>Fertilizer Recommendation</Link>
        </button>
     </div>

     <div className='h-5 w-full  '>
        <button className=' h-7 w-full  rounded-lg font-bold hover:bg-red-300 border uppercase'>Disease Diagnosis
        </button>
     </div>

     <div className='h-5 w-full  '>
        <button className=' h-7 w-full  rounded-lg font-bold hover:bg-red-300 border uppercase'>profitability Assesement
        </button>
     </div>

     <div className='h-5 w-full  '>
        <button className=' h-7 w-full  rounded-lg font-bold hover:bg-red-300 border uppercase'>storage warehouse
        </button>
     </div> 

     <div className='h-5 w-full  '>
        <button className=' h-7 w-full  rounded-lg font-bold hover:bg-red-300 border uppercase'><Link to='/fagov'>goverment updates</Link>
        </button>
     </div> 

     <div className='h-5 w-full  '>
        <button className=' h-7 w-full  rounded-lg font-bold hover:bg-red-300 border uppercase'>waste managment
        </button>
     </div> 

     </div>  
    </div>
    
        
    <div className=' p-5 md:p-10 text-gray-800 border w-full '> 
        <div className='bg-gray-100 rounded-2xl p-5 mb-10'>
        <h2 className="text-2xl font-bold mb-4">Fertilizer Recommendation</h2>

        <div className='p-3  max-w-lg mx-auto '>
  
    <form  className='flex flex-col gap-4 py-7'>

    <input type="text" placeholder='Previously Planed Crops'
      id='' className='bg-white p-3 rounded-lg' 
      />

      <input type="text" placeholder='Currently Planed Crops'
      id='' className='bg-white p-3 rounded-lg' 
      />

      <input type="text" placeholder='Time period of planed crops'
      id='' className='bg-white p-3 rounded-lg' 
      />

      <button  className='bg-green-500 text-white font-bold p-2 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
        Get Recommendation</button>
        

    </form>
       
    <form className='  space-x-6'>
    <input type="text" placeholder='Enter Your Farm Location'
      id='' className='bg-white p-3 rounded-lg' 
      />

    <button  className='bg-green-500 text-white font-bold p-2 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
        Get Your Live Location</button>

    </form>

   
    
    </div>


        </div>
        </div>
    </div>
   </>
  )
}

export default Recommendation