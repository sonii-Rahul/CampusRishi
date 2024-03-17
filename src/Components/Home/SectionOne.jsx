import React from 'react'
import { motion } from "framer-motion"

function SectionOne() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
  whileInView={{ opacity: 1, delay: 0.2 }}
  viewport={{ once: false }}
  
  >
    <div className="relative w-full bg-orange-500 rounded-full font-salsa  ">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 m-6">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
         
          <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
            <div className="rounded-full bg-black p-1 px-2">
              <p className="text-sm font-medium text-white">Manage&apos; Attendance</p>
            </div>
            <p className="text-sm font-medium">Join our team &rarr;</p>
          </div>
          <h1 className="mt-8 text-3xl  tracking-tight text-white md:text-4xl lg:text-6xl   ">
            People who care about your growth
          </h1>
          <p className="mt-8 text-lg text-white">
          {"encourage users to stay updated with the latest blogs".toUpperCase()}
          </p>
          <form action="" className="mt-8 flex items-start space-x-2">
            <div>
              <input
                className="flex w-full rounded-md border border-white bg-transparent px-3 py-2 text-sm placeholder:text-white focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Enter your email"
                id="email"
              ></input>
              <p className="mt-2 text-sm text-white">We care about your privacy</p>
            </div>
            <div>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <img
            className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9] rounded-xl"
            src="https://images.pexels.com/photos/4778664/pexels-photo-4778664.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </div>
    </div>
    </motion.div>
  )
}

export default SectionOne