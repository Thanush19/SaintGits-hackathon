import React from 'react'

function Register() {
  return (
    <>
    
    <div className='w-full flex h-full'>
        <div className='w-1/2 border'>
          <img
            src='https://images.pexels.com/photos/18100007/pexels-photo-18100007/free-photo-of-farmer-with-oxes-on-field.jpeg'
            alt='Registration Image'
            className='w-full h-full object-cover'
          />
        </div>
      <div className='w-1/2 border '>
      <div className='p-3  max-w-lg mx-auto '>
     <h1 className='text-3xl text-center font-semibold my-7'></h1>
    <h1 className='text-3xl text-center font-semibold my-7'>Farmers</h1>
    <form  className='flex flex-col gap-4 py-7'>

    <input type="number" placeholder='Aadhar Number'
      id='' className='bg-slate-100 p-3 rounded-lg' 
      />

      <input type="number" placeholder='Phone-Number'
      id='' className='bg-slate-100 p-3 rounded-lg' 
      />

      <input type="text" placeholder='Location'
      id='' className='bg-slate-100 p-3 rounded-lg' 
      />

      <button  className='bg-green-500 text-white font-bold p-2 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
        Register</button>
        

    </form>
   
    
    </div>


      </div>
    </div>
     
    </>
  )
}

export default Register