import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { Link } from 'react-router-dom';


function Home() {

    const slides = [
        {
          url: 'https://i0.wp.com/www.indictoday.com/wp-content/uploads/2020/04/Ramkumar-Radhakrishnan-Wikimedia-1569929663.jpg?fit=1100%2C500&ssl=1',
        },
        {
          url: 'https://i.imgur.com/LGsY9qB.jpeg',
        },
        {
          url: 'https://www.ackerland.in/wp-content/uploads/2021/07/Top-10-Agricultural-producing-states-in-India-..-Ackerland.-2-1700x950.jpg',
        },
    
        {
          url: 'https://assets.thehansindia.com/h-upload/2020/03/30/958045-ministry-of-agriculture.jpg',
        },
        {
          url: 'https://static.wixstatic.com/media/e7ba47_02de10d9456a40efadfde112c8c43692~mv2.jpg/v1/fit/w_731%2Ch_380%2Cal_c%2Cq_80/file.jpg',
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };
  return (
    <>
    <div className='p-2 md:p-10 '>
      <div className='bg-gray-100 rounded-2xl p-5 mb-5'>
      <div className='max-w-[1400px] h-[780px] w-full m-auto py-10 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>

      </div> 
    </div>

    <div className='p-5 md:p-10'>
    <div className='bg-gray-100 p-5 rounded-2xl '> 
    <div className='mx-auto flex justify-evenly'>
    <Link to='/faregister'>
  <button className='px-8 py-3 rounded font-bold text-white bg-red-500 mt-4'>Farmer</button>
    </Link>

    <Link to='/tradersignin'>
  <button className='px-8 py-3 rounded font-bold text-white bg-red-500 mt-4'>Trader</button>
</Link>

<Link to='/wholesalersignin'>
  <button className='px-8 py-3 rounded font-bold text-white bg-red-500 mt-4'>Whole Salers</button>
</Link>

<Link to='/customersignin'>
  <button className='px-8 py-3 rounded font-bold text-white bg-red-500 mt-4'>Customer</button>
</Link>


      
    </div>
    </div>

    </div>

    
     
    <body className='p-5 md:p-10 text-gray-800'>
        <section className='bg-gray-100 rounded-2xl p-5 mb-5'>
        <div className='mx-auto'>
        <div className='flex flex-wrap mt-5 justify-center'>
            <div className='w-full lg:w-1/3 xl:w-1/4 py-5 lg:p-5'>
                <div className='bg-white p-10 rounded-2xl shadow-lg '>
                <div className=''>Lorem </div> <button className='px-8 py-3 rounded font-bold text-white bg-green-500 mt-4'><Link to='/facropplan'>More</Link></button>
                </div>
            </div>

            <div className='w-full lg:w-1/3 xl:w-1/4 py-5 lg:p-5'>
                <div className='bg-white p-10 rounded-2xl shadow-lg '>
                <div className=''>Lorem </div> <button className='px-8 py-3 rounded font-bold text-white bg-green-500 mt-4'><Link to='/farecommendation'>More</Link></button>
                </div>
            </div>

            <div className='w-full lg:w-1/3 xl:w-1/4 py-5 lg:p-5'>
                <div className='bg-white p-10 rounded-2xl shadow-lg '>
                <div className=''>Lorem </div> <button className='px-8 py-3 rounded font-bold text-white bg-green-500 mt-4'>More</button>
                </div>
            </div>

            <div className='w-full lg:w-1/3 xl:w-1/4 py-5 lg:p-5'>
                <div className='bg-white p-10 rounded-2xl shadow-lg '>
                <div className=''>Lorem </div> <button className='px-8 py-3 rounded font-bold text-white bg-green-500 mt-4'>More</button>
                </div>
            </div>
            <div className='w-full lg:w-1/3 xl:w-1/4 py-5 lg:p-5'>
                <div className='bg-white p-10 rounded-2xl shadow-lg '>
                <div className=''>Lorem </div> <button className='px-8 py-3 rounded font-bold text-white bg-green-500 mt-4'>More</button>
                </div>
            </div>
            <div className='w-full lg:w-1/3 xl:w-1/4 py-5 lg:p-5'>
                <div className='bg-white p-10 rounded-2xl shadow-lg '>
                <div className=''>Lorem </div> <button className='px-8 py-3 rounded font-bold text-white bg-green-500 mt-4'>More</button>
                </div>
            </div>

            <div className='w-full lg:w-1/3 xl:w-1/4 py-5 lg:p-5'>
                <div className='bg-white p-10 rounded-2xl shadow-lg '>
                <div className=''>Lorem </div> <button className='px-8 py-3 rounded font-bold text-white bg-green-500 mt-4'>More</button>
                </div>
            </div>

            <div className='w-full lg:w-1/3 xl:w-1/4 py-5 lg:p-5'>
                <div className='bg-white p-10 rounded-2xl shadow-lg '>
                <div className=''>Lorem </div> <button className='px-8 py-3 rounded font-bold text-white bg-green-500 mt-4'>More</button>
                </div>
            </div>

        </div>


    </div>


        </section>
        
    </body>

    


    </>
  )
}

export default Home