import React from 'react'
import Aboutprofile from '../../imgs/aboutimg.jpg'
import Oshape from '../../imgs/oshape.png'
import './About.css'
const About = () => {
    return (
        <>

            <div id='about'>
                <div className="py-16 bg-white">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-center flex justify-center row text-2xl font-medium title-font mb-4 text-black">AB<img src={Oshape} style={{ width: "35px", height: '35px' }} alt="" /> UT ME</h1>
                    </div>
                    <div className="aboutcontainer container m-auto px-6 text-gray-600 md:px-12  xl:px-6">
                        <div className="aboutcard space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                            <div className="aboutitems">
                                <div className="md:5/12 lg:w-5/12 aboutimage">
                                    <div className='bgborder'></div>

                                    <img src={Aboutprofile} alt="image" loading="ZLHtike" style={{
                                        height: '400px',
                                        border: '3px solid blue',
                                        position: 'relative',
                                        zIndex: 10
                                    }} />

                                </div>
                                <div className="md:7/12 lg:w-6/12 aboutinfo">
                                    <p className="mt-6 ml-0 text-gray-600 font-extrabold text-2xl">Hi! there, my name is Zin Lin Htike. I am 24 year old.</p>
                                    <p className="mt-4 text-gray-600 font-extrabold text-lg">
                                        I am a hard working person. I am self motivated and have a can do attitude.
                                        I graduated <span className='text-purple-600'>Bachelor of Computer Science (B.C.Sc) </span> from Computer University of PangLong (UCSPL) in 2023.
                                        I studied the skills and knowledge of HTML, Css, Tailwind, Bootstrap, Javascript, ReactJs, PHP and Laravel.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About