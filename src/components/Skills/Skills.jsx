import React from 'react'
import './Skills.css'
import Html from '../../imgs/html.png'
import Css from '../../imgs/css.png'
import Bootstrap from '../../imgs/bootstrap.png'
import Tailwind from '../../imgs/tailwind.png'
import Js from '../../imgs/js.png'
import Reactjs from '../../imgs/react.png'
import PHP from '../../imgs/php.png'
import Laravel from '../../imgs/laravel.png'
import { Flip } from 'react-reveal'
import Jump from 'react-reveal/Jump'

const Skills = () => {
    return (
        <div className='skill' id='skills'>
            <div>
                <section className="text-gray-200 bg-gray-900">
                    <div className="max-w-6xl mx-auto px-5 py-16 ">
                        {/* card header & fond end skill title*/}
                        <div className="text-center mb-20">
                            <h1 className=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">What Skills I Have</h1>
                            <p className="text-base leading-relaxed text-3xl mx-auto">&lt; Front-End Development Skills /&gt;</p>
                            <div className="flex mt-6 justify-center">
                                <div className="w-24 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                            </div>
                        </div>
                        {/* first line card */}
                        <div className="flex  flex-wrap justify-center sm:-m-4 -mx-4 -mb-10 -mt-4 cardrow">
                            <Flip left>
                                <div className="p-10 sm:w-1/3   md:w-1/3 md:mb-0 mb-6 flex flex-col skillcard">
                                    <div className="pattern-dots-md gray-light dotted">
                                        <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 grid justify-center  cardbody"  >
                                            <div className="sm:w-28 sm:h-28 w-36 h-36 inline-flex items-center justify-center rounded-full bg-white text-green-500 mb-5 flex-shrink-0 p-2 cardimg">
                                                <img src={Html} alt="" className='sm:w-20 sm:h-20 w-24 h-24 ' />
                                            </div>
                                            <div className="grid justify-center cardname ">
                                                <h2 className="text-purple-100 text-xl title-font font-medium mb-3">HTML</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Flip>
                            <Jump >
                                <div className="p-10 sm:w-1/3 md:w-1/3 md:mb-0 mb-6 flex flex-col skillcard">
                                    <div className="pattern-dots-md gray-light dotted">
                                        <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 grid justify-center  cardbody"  >
                                            <div className="sm:w-28 sm:h-28 w-36 h-36 inline-flex items-center justify-center rounded-full bg-white text-green-500 mb-5 flex-shrink-0 p-2 cardimg">
                                                <img src={Css} alt="" className='sm:w-20 sm:h-20 w-24 h-24 ' />
                                            </div>
                                            <div className="grid justify-center cardname">
                                                <h2 className="text-purple-100 text-xl title-font font-medium mb-3">Css</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Jump>
                            <Flip right>
                                <div className="p-10 sm:w-1/3 md:w-1/3 md:mb-0 mb-6 flex flex-col skillcard">
                                    <div className="pattern-dots-md gray-light dotted">
                                        <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 grid justify-center  cardbody"  >
                                            <div className="sm:w-28 sm:h-28 w-36 h-36 inline-flex items-center justify-center rounded-full bg-white text-green-500 mb-5 flex-shrink-0 p-2 cardimg">
                                                <img src={Bootstrap} alt="" className='sm:w-20 sm:h-20 w-24 h-24 ' />
                                            </div>
                                            <div className="grid justify-center cardname">
                                                <h2 className="text-purple-100 text-xl title-font font-medium mb-3">Bootstrap</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Flip>
                        </div>
                        {/* second line card */}
                        <div className="flex flex-wrap justify-center sm:-m-4 -mx-4 -mb-10 -mt-4 cardrow">
                            <Flip left>
                                <div className="p-10 sm:w-1/3 md:w-1/3 md:mb-0 mb-6 flex flex-col skillcard">
                                    <div className="pattern-dots-md gray-light dotted">
                                        <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 grid justify-center  cardbody"  >
                                            <div className="sm:w-28 sm:h-28 w-36 h-36 inline-flex items-center justify-center rounded-full bg-white text-green-500 mb-5 flex-shrink-0 p-2 cardimg">
                                                <img src={Tailwind} alt="" className='sm:w-20 sm:h-20 w-24 h-24 ' />
                                            </div>
                                            <div className="grid justify-center cardname">
                                                <h2 className="text-purple-100 text-xl title-font font-medium mb-3">Tailwind</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Flip>
                            <Jump>
                                <div className="p-10 sm:w-1/3 md:w-1/3 md:mb-0 mb-6 flex flex-col skillcard ">
                                    <div className="pattern-dots-md gray-light dotted">
                                        <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 grid justify-center  cardbody"  >
                                            <div className="sm:w-28 sm:h-28 w-36 h-36 inline-flex items-center justify-center rounded-full bg-white text-green-500 mb-5 flex-shrink-0 p-2 cardimg">
                                                <img src={Js} alt="" className='sm:w-20 sm:h-20 w-24 h-24 ' />
                                            </div>
                                            <div className="grid justify-center cardname">
                                                <h2 className="text-purple-100 text-xl title-font font-medium mb-3">JavaScript</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Jump>
                            <Flip right>
                                <div className="p-10 sm:w-1/3 md:w-1/3 md:mb-0 mb-6 flex flex-col skillcard">
                                    <div className="pattern-dots-md gray-light dotted">
                                        <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 grid justify-center  cardbody"  >
                                            <div className=" sm:w-28 sm:h-28 w-36 h-36 inline-flex items-center justify-center rounded-full bg-white text-green-500 mb-5 flex-shrink-0 p-2 cardimg">
                                                <img src={Reactjs} alt="" className='sm:w-20 sm:h-20 w-24 h-24 ' />
                                            </div>
                                            <div className="grid justify-center cardname">
                                                <h2 className="text-purple-100 text-xl title-font font-medium mb-3">ReactJs</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Flip>
                        </div>

                        {/* for back end skill title */}
                        <div className="text-center mb-20 pt-16 ">
                            <p className="text-base leading-relaxed text-3xl mx-auto">&lt; Back-End Development Skills /&gt;</p>
                            <div className="flex mt-6 justify-center">
                                <div className="w-24 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                            </div>
                        </div>
                        {/* Backend skills */}
                        <div className="flex flex-wrap justify-center sm:-m-4 -mx-4 -mb-10 -mt-4 cardrow ">
                            <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col skillcard ">
                                <div className="pattern-dots-md gray-light dotted">
                                    <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 grid justify-center  cardbody"  >
                                        <div className="w-36 h-36 inline-flex items-center justify-center rounded-full bg-white text-green-500 mb-5 flex-shrink-0 p-2 cardimg">
                                            <img src={PHP} alt="" className='w-24 h-24 ' />
                                        </div>
                                        <div className="grid justify-center cardname">
                                            <h2 className="text-purple-100 text-xl title-font font-medium mb-3">PHP</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col skillcard">
                                <div className="pattern-dots-md gray-light dotted">
                                    <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 grid justify-center  cardbody"  >
                                        <div className="w-36 h-36 inline-flex items-center justify-center rounded-full bg-white text-green-500 mb-5 flex-shrink-0 p-2 cardimg">
                                            <img src={Laravel} alt="" className='w-24 h-24 ' />
                                        </div>
                                        <div className="grid justify-center cardname">
                                            <h2 className="text-purple-100 text-xl title-font font-medium mb-3">Laravel</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Skills