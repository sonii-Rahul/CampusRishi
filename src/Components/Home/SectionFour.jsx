import React from 'react'
import { motion } from "framer-motion"
import myimg from "./my.jpg"


function SectionFour() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
  whileInView={{ opacity: 1, delay: 0.5}}
  viewport={{ once: false }}
  
>
    <div className="mx-auto max-w-xl rounded-3xl bg-black p-1 m-8 font-salsa ">
      <div className="flex flex-col rounded-3xl bg-black">
        <div className="flex flex-1 flex-col justify-between p-8">
          <div className="mb-4 flex space-x-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            ))}
          </div>
          <div className="flex-1 pt-2">
            <blockquote>
              <p className="text-lg text-white">
                “CampusRishi is the complete solution we needed for education management. With its swift implementation, we launched in days, not months. Now, we're efficiently managing attendance and offering a robust blogging platform.”
              </p>
            </blockquote>
          </div>

          <div className="mt-8 border-t border-white pt-4 dark:border-gray-800">
            <div className="flex items-center">
              <img
                className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                src={myimg}
                alt=""
              />
              <div className="ml-3 min-w-0">
                <p className="truncate text-base font-semibold text-white">Rahul Soni</p>
                <p className="truncate text-base text-gray-500">CEO CampusRishi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  )
}

export default SectionFour