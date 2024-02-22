import React from 'react'
import { Link } from 'react-router-dom'

function Govupdate() {
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
        <button className=' h-7 w-full  rounded-lg font-bold hover:bg-red-300 border uppercase'>goverment update
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
            
        <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Goverment schemes</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">S.No</th> 
              <th className="py-2 px-4 border-b">Schemes</th>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Apply Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b text-center">1</td>
              <td className="py-2 px-4 border-b text-center">Sub mission on agri mechanization</td>
              <td className="py-2 px-4 border-b text-center">Scheme provid Agriculturalmachinery </td>
              <td className="py-2 px-4 border-b text-center">Apply Link</td>
            </tr>

            
            <tr>
              <td className="py-2 px-4 border-b text-center">2</td>
              <td className="py-2 px-4 border-b text-center">lorem</td>
              <td className="py-2 px-4 border-b text-center">Lorem</td>
              <td className="py-2 px-4 border-b text-center">lorem,</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
        </div>
        </div>
    </div>
   

   </>
  )
}

export default Govupdate