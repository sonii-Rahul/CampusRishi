import React from 'react'
import NavBar from './NavBar'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import Footer from './Footer'
import {motion} from "framer-motion"
import SectionFive from './SectionFive'
import { FaqThree } from './FaqThree'

function home() {
  return (
    <>
     <motion.div
    
     
    
  >
    <NavBar/>
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
    <SectionFive/>
    <SectionFour/>
    <FaqThree/>
   
    <Footer/>
    
    </motion.div>
    
    </>
  )
}

export default home