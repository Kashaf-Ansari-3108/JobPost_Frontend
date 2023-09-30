import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero'
import AllJobPosts from '../Components/AllJobPosts'
import Footer from '../Components/Footer'
import CreateJobPost from '../Components/CreateJobPost'

function HomePage() {
  return (
   <>
    <div>
        <NavBar/>
        <Hero/>
        <AllJobPosts/>
        <CreateJobPost/>
        <Footer/>
    </div>
   </>
  )
}

export default HomePage
