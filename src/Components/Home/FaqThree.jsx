import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

export const FaqThree = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
            Some of the user questions
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          <motion.div
            layout
            initial={{ borderRadius: 10 }}
            animate={{ borderRadius: openIndex === 0 ? 10 : 10 }}
            transition={{ duration: 0.3 }}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
              onClick={() => handleToggle(0)}
            >
              <span className="flex text-lg font-semibold text-black">How do I get started?</span>
              {openIndex === 0 ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
            </button>
            <motion.div
              layout
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: openIndex === 0 ? 1 : 0, height: openIndex === 0 ? 'auto' : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p className="text-gray-500">
                To begin using our student LMS system, simply sign up with your email and create a password. Once logged in, explore our intuitive interface to access courses, resources, and interactive features designed to enhance your learning experience.
                </p>
              </div>
            </motion.div>
          </motion.div>
          {Array.from({ length: 2 }).map((_, i) => (
            <motion.div
              key={i}
              layout
              initial={{ borderRadius: 10 }}
              animate={{ borderRadius: openIndex === i + 1 ? 10 : 10 }}
              transition={{ duration: 0.3 }}
            >
              <button
                type="button"
                className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
                onClick={() => handleToggle(i + 1)}
              >
                <span className="flex text-start text-lg font-semibold text-black">
                  What is the difference between a free and paid account?
                </span>
                {openIndex === i + 1 ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
              </button>
              <motion.div
                layout
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: openIndex === i + 1 ? 1 : 0, height: openIndex === i + 1 ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-gray-500">
                  Our free account offers basic access to course materials, while our paid account provides premium features such as exclusive content, personalized support, and ad-free browsing, enhancing your learning journey."
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <p className="textbase mt-6 text-center text-gray-600">
          Can&apos;t find what you&apos;re looking for?{' '}
          <a href="#" title="" className="font-semibold text-black hover:underline">
            Contact our support
          </a>
        </p>
      </div>
    </section>
  );
};
