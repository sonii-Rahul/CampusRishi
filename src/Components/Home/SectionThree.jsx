import React from 'react'
import {motion} from "framer-motion"
import myimg from "./my.jpg"
import { useScroll,useTransform } from "framer-motion"


function SectionThree() {
  const { scrollYProgress } = useScroll()
const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1.1]);
  return (
    <motion.div
    style={{ scale }}
    

  >
    <section className="px-2 py-10 md:px-0 bg-orange-500 m-6 rounded-3xl font-salsa ">
      <figure className="mx-auto max-w-2xl">
        <h1 className="mb-4 text-4xl font-semibold text-black">What Students are saying ?</h1>
        <blockquote className="mt-10 text-xl text-white">
          <p>
            “Students are praising CampusRishi for its intuitive interface and helpful features. They appreciate how easy it is to track their attendance and engage with educational content through the blogging platform. Many students have mentioned that Campus Rishi has positively impacted their learning experience by providing valuable insights and facilitating collaboration with their peers. Overall, students are expressing gratitude for the platform's contribution to their academic journey..”
          </p>
        </blockquote>
        <figcaption className="mt-10 flex items-center gap-x-6">
          <div className="isolate flex -space-x-2">
            <img
              className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
              src="https://images.pexels.com/photos/2764976/pexels-photo-2764976.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Dan_Abromov"
            />
            <img
              className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
              src="https://images.pexels.com/photos/16928656/pexels-photo-16928656/free-photo-of-portrait-of-smiling-woman.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <img
              className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Lee_Robinson"
            />
            <img
              className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75"
              alt="Delba"
            />
          </div>
          <div>
            <p className="font-semibold text-black">2000+ Students</p>
          </div>
        </figcaption>
      </figure>
    </section>
    </motion.div>
  )
}

export default SectionThree