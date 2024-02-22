import React from 'react'

function RaiseDemand() {
  return (
    <>
    <div className='w-full h- flex '>
    <div className='h-[calc(100vh-2rem)] w-full max-w-[20rem] bg-green-300 p-4 shadow-xl shadow-blue-gray-900/5 '>
     <div className="mb-2 p-4 ">
        <h1 className='p-2 font-bold'>Sidebar</h1>
     </div>

     <div className='space-y-8'>

     <div className='h-5 w-full  '>
        <button className=' h-7 w-full rounded-lg font-bold hover:bg-red-300 border'>Raise Demand
        </button>
     </div>

     <div className='h-5 w-full  '>
        <button className=' h-7 w-full  rounded-lg font-bold hover:bg-red-300 border'>Logistics Support
        </button>
     </div>

     <div className='h-5 w-full  '>
        <button className=' h-7 w-full  rounded-lg font-bold hover:bg-red-300 border'>Storage warehouse
        </button>
     </div>

     <div className='h-5 w-full  '>
        <button className=' h-7 w-full  rounded-lg font-bold hover:bg-red-300 border'>Sell your Goods
        </button>
     </div>

     <div className='h-5 w-full  '>
        <button className=' h-7 w-full  rounded-lg font-bold hover:bg-red-300 border'>Retailer Track
        </button>
     </div> 

     <div className='h-5 w-full  '>
        <button className=' h-7 w-full  rounded-lg font-bold hover:bg-red-300 border'>Farmer's Track
        </button>
     </div> 

     </div>  
    </div>
    
        
        <div className='w-full border '>right </div>
    </div>
   
    </>
  )
}

export default RaiseDemand