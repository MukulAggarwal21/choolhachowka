import React from 'react'

const Moreaboutus = () => {
  return (
    <div className="flex flex-col my-8 mx-16 gap-8 sm:flex sm:flex-col lg:flex lg:flex-row">
      <div className=""><h1 className="text-gray-400 font-mono">ABOUT US</h1>
      <h1 className="font-bold text-2xl">More <span className="text-purple-500">About Us</span></h1><br />
      <p className='font-sans font-medium text-zinc-500'><span className="font-bold text-base text-slate-700">Welcome to Choolha Chowka – where every bite is an adventure! 🍽️<br />
Our Journey:
Since [Year], we've been on a mission to redefine food. <br />Our story started with one idea: create exceptional, <br /> handcrafted dishes that bring people closer together.</span> <br /> <br />
What Makes Us Special: <br /> 
🌟 <span className='font-bold text-slate-700'>Quality First</span>: Top-notch ingredients, sourced locally whenever possible for freshness. <br />
👨‍🍳 <span className='font-bold text-slate-700'>Culinary Artistry</span>: Talented chefs creating visually stunning and delicious dishes. <br />
🌍 <span className='font-bold text-slate-700'>Diverse Flavors</span>: A menu that's a global gastronomic tour, catering to all tastes. <br />
🤗 <span className='font-bold text-slate-700'>Exceptional Service</span>: Friendly staff ensuring your experience is memorable.
</p>
      </div>
      <img className="h-96" src="/download.jpeg" alt="Head"/>
    </div>
  )
}

export default Moreaboutus
