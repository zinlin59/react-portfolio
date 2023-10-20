import React from 'react'
import './Projects.css'
const Projects = () => {
    return (
        <>

            <div>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">PORTFOLIO</h1>
                            <p className="lg:w-3/3 mx-auto leading-relaxed text-base text-black">My Last Projects</p>
                        </div>
                        <div className="flex flex-wrap -m-4 porjectcard">
                            <div className="lg:w-1/3 sm:w-1/2 p-4 cardheader">
                                <div className="flex relative card card1">
                                    <div className=" cardbody px-8 py-10 relative z-10 w-full border-4 opacity-0 hover:opacity-100" >
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Admin Dashboard</h2>
                                        <p className="leading-relaxed">This is the admin dashborad UI design project. This project is using React Js</p>
                                        <div className='btngroup'>
                                            <a href="https://github.com/zinlin59/react-admindashboard"><button
                                                class="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                data-ripple-light="true"
                                            >Code</button>
                                            </a>
                                            <a href=" https://zinlin59.github.io/react-admindashboard/">
                                                <button
                                                    class="middle none center mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                    data-ripple-light="true"
                                                >Demo</button>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="lg:w-1/3 sm:w-1/2 p-4 cardheader">
                                <div className="flex relative card">

                                    <div className=" cardbody px-8 py-10 relative z-10 w-full border-4 opacity-0 hover:opacity-100" >
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Admin Dashboard</h2>
                                        <p className="leading-relaxed">This is the admin dashborad UI design project. This project is using React Js</p>
                                        <div className='btngroup'>
                                            <button
                                                class="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                data-ripple-light="true"
                                            >Code</button>
                                            <button
                                                class="middle none center mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                data-ripple-light="true"
                                            >Demo</button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="lg:w-1/3 sm:w-1/2 p-4 cardheader">
                                <div className="flex relative card">
                                    <div className=" cardbody px-8 py-10 relative z-10 w-full border-4 opacity-0 hover:opacity-100" >
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Admin Dashboard</h2>
                                        <p className="leading-relaxed">This is the admin dashborad UI design project. This project is using React Js</p>
                                        <div className='btngroup'>
                                            <button
                                                class="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                data-ripple-light="true"
                                            >Code</button>
                                            <button
                                                class="middle none center mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                data-ripple-light="true"
                                            >Demo</button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            {/*this is first three project */}
                            {/*
                            <div className="lg:w-1/3 sm:w-1/2 p-4 cardheader">
                                <div className="flex relative card">
                                    <div className=" cardbody px-8 py-10 relative z-10 w-full border-4 opacity-0 hover:opacity-100" >
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Admin Dashboard</h2>
                                        <p className="leading-relaxed">This is the admin dashborad UI design project. This project is using React Js</p>
                                        <div className='btngroup'>
                                            <button
                                                class="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                data-ripple-light="true"
                                            >Code</button>
                                            <button
                                                class="middle none center mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                data-ripple-light="true"
                                            >Demo</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="lg:w-1/3 sm:w-1/2 p-4 cardheader">
                                <div className="flex relative card">

                                    <div className=" cardbody px-8 py-10 relative z-10 w-full border-4 opacity-0 hover:opacity-100" >
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Admin Dashboard</h2>
                                        <p className="leading-relaxed">This is the admin dashborad UI design project. This project is using React Js</p>
                                        <div className='btngroup'>
                                            <button
                                                class="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                data-ripple-light="true"
                                            >Code</button>
                                            <button
                                                class="middle none center mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                data-ripple-light="true"
                                            >Demo</button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="lg:w-1/3 sm:w-1/2 p-4 cardheader">
                                <div className="flex relative card">
                                    <div className=" cardbody px-8 py-10 relative z-10 w-full border-4 opacity-0 hover:opacity-100" >
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Admin Dashboard</h2>
                                        <p className="leading-relaxed">This is the admin dashborad UI design project. This project is using React Js</p>
                                        <div className='btngroup'>
                                            <button
                                                class="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                data-ripple-light="true"
                                            >Code</button>
                                            <button
                                                class="middle none center mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                data-ripple-light="true"
                                            >Demo</button>
                                        </div>

                                    </div>

                                </div>
                            </div>
    */}

                        </div>
                    </div>
                </section >
            </div >
        </>
    )
}

export default Projects