import React from 'react'

const Aboutheader = () =>{
  const backgroundStyle = {
     backgroundImage: "url('/mainimages/tifin.jpg')", // Set the background image
    backgroundSize: 'cover',
   // filter: 'blur(8px)', // Apply the blur effect to the background image
  };

  return (
    <div className="bg-[url('/mainimages/mess.jpg')] flex items-center justify-center bg-[length:120vw_100vw] bg-center backdrop-blur-3xl
    backdrop-brightness-23">
  
      <div  className="about-section w-full p-8 text-center  hover:filter-none transition duration-500 backdrop-blur-sm bg-center backdrop-brightness-100">
     
        <h1 class=" text-4xl mb-4 animate-bounce text-shadow-md font-extrabold text-red  md:text-5xl lg:text-6xl ">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">About</span>
             <span className=' text-transparent bg-clip-text bg-gradient-to-br from-red-900 to-blue-600'>Us</span> </h1> <div className="max-w-xl mx-auto">
          <div className="mb-4">
            <p className='  lg:text-xl dark:text-grey-900  text-3xl sm:text-lg font-bold  
            text-black'>We are happy to tell you more about our team and food services.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutheader
