import React from 'react'
import {motion} from "framer-motion"
import myimg from "./my.jpg"

function SectionTwo() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1, delay: 0.3 }}
    viewport={{ once: false}}
  >
    <section className="px-2 py-10 md:px-0 font-salsa ">
    <div className="mx-auto max-w-4xl">
      <div className="  md:flex md:items-center md:justify-center md:space-x-14 px-10 mx-2">
        <div className="relative h-48 w-48 flex-shrink-0 ">
          <img
            className="relative h-48 w-48 rounded-full object-cover "
            src={myimg}
            alt=""
          />
        </div>

        <div className="mt-10 md:mt-0">
          <blockquote>
            <p className="text-xl text-black">
              “As the founder of CampusRishi, I'm excited to welcome you to our education management platform. Our mission is to empower educators, administrators, and students alike by providing innovative solutions for managing attendance and fostering learning through our blogging platform. Together, let's shape the future of education!”
            </p>
          </blockquote>
          <p className="mt-7 text-lg font-semibold text-black">Rahul Soni</p>
          <p className="mt-1 text-base text-gray-600">Founder-CEO CampusRishi</p>
        </div>
      </div>
    </div>
  </section>
  </motion.div>
  )
}

export default SectionTwo