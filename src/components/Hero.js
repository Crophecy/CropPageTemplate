
import { IoIosPartlySunny } from "react-icons/io";

import React from 'react'

const Hero = () => {
  return (
    <section className="hero md:mt-4 max-w-4xl mx-auto  p-4">
        <div className="py-8 md:py-12">
            <h1 className="text-4xl font-semibold">
                
                <span className="text-primary">
                    RICE
                </span>
                <br />
                <div className="text-xl flex pt-1"><div className="pr-2"><IoIosPartlySunny/></div>20 MAY - 5 JUN</div>
                
            </h1>
            <p className="my-6 text-gray-500 text-sm">
            Rice is the most important food crop of India covering about one-fourth of the total cropped area and providing food to about half of the Indian population.
            </p>
        </div>
        <div className="relative flex hidden md:block">
            <img className="h-45 w-45 rounded-lg" src="/2135idea99sunflowe.jpg" alt="React Image" layout={'fill'} objectFit={'contain'}/> 

        </div>
    </section>
  )
}

export default Hero