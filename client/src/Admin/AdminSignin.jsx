import React from 'react'

function AdminSignin() {
  return (
    <>
     <div className='w-full flex h-full'>
      <div className='w-1/2 '> image-right-div</div>
      <div className='w-1/2  '>
      <div className='p-3  max-w-lg mx-auto '>
     <h1 className='text-3xl text-center font-semibold my-7'></h1>
    <h1 className='text-3xl text-center font-semibold my-7'>Admin</h1>
    <form  className='flex flex-col gap-4 py-7'>

    <input type="text" placeholder='Username'
      id='' className='bg-slate-100 p-3 rounded-lg' 
      />

      <input type="password" placeholder='Password'
      id='' className='bg-slate-100 p-3 rounded-lg' 
      />

     

      <button  className='bg-green-500 text-white font-bold p-2 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
        Sign In</button>
        

    </form>
   
    
    </div>


      </div>
    </div>
    </>
  )
}

export default AdminSignin