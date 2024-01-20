import React from 'react'
import './Projects.css'
import Oshape from '../../imgs/oshape.png'
const Projects = () => {

    return (
        <div className='flex flex-col min-h-screen items-center' id='projects'>
            <section className='container my-5 '>
            <   div className="flex flex-col text-center w-full ">
                    <h1 className="sm:text-3xl text-center flex justify-center row text-2xl font-medium title-font text-black">MY PROJECTS</h1>
                </div>
                <p class="text-gray/60 text-center mt-1 ">Here is some of the projects that I have completed.</p>
            
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10 p-8">
                    <div class="flex bg-paper flex-col border-2 border-secondary/10  border-purple-600 rounded-md hover:border-secondary/70 transition-all duration-300 cursor-pointer">
                        <div class="aspect-video relative group object-contain max-h-[200px] transition-all duration-300 rounded-t bg-[length:100%_100%] hover:bg-[length:120%_120%] bg-center card1">

                        </div>
                        
                        <div class="p-3">
                            <h5 class="text-xl font-semibold">Portfolio</h5>
                            <div class="flex flex-wrap gap-1 my-2">
                                <span class="text-xs border border-secondary/60 rounded-full px-2 py-1">HTML</span>
                                <span class="text-xs border border-secondary/60 rounded-full px-2 py-1">CSS</span>
                                <span class="text-xs border border-secondary/60 rounded-full px-2 py-1">Tailwind CSS</span>
                                <span class="text-xs border border-secondary/60 rounded-full px-2 py-1">React JS</span>
                                <span class="text-xs border border-secondary/60 rounded-full px-2 py-1">Framer Motion</span>
                            </div>
                            <p class="text-gray-900 text-lg">   This app is to view the information related to me.</p>
                        </div>
                        <div class="mt-auto px-3">
                            <div class="mt-auto flex justify-end text-sm space-x-2 border-t py-3 border-secondary/60">
                                <a class="px-5 py-3 group relative text-black select-none bg-primary bg-purple-300 font-semibold rounded-md overflow-hidden hover:scale-110 outline-none active:scale-105 transition-all flex space-x-2 items-center" href="https://zinlin59.github.io/react-portfolio/" target="_blank">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span>Demo</span>
                                    <div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine "></div>
                                </a>
                                <a class="px-5 py-3 group relative text-black bg-purple-300 select-none bg-primary font-semibold rounded-md overflow-hidden hover:scale-110 outline-none active:scale-105 transition-all flex space-x-2 items-center bg-secondary opacity-100" href="https://github.com/zinlin59/react-portfolio" target="_blank">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span>Code</span>
                                    <div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine "></div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* php page*/}
                    <div class="flex bg-paper flex-col border-2 border-secondary/10  border-purple-600 rounded-md hover:border-secondary/70 transition-all duration-300 cursor-pointer">
                        <div class="aspect-video relative group object-contain max-h-[200px] transition-all duration-300 rounded-t bg-[length:100%_100%] hover:bg-[length:120%_120%] bg-center cardphp">

                        </div>
                        <div class="p-3">
                            <h5 class="text-xl font-semibold">Student Affair Management System</h5>
                            <div class="flex flex-wrap gap-1 my-2">
                                <span class="text-xs border border-secondary/60 rounded-full px-2 py-1">HTML</span>
                                <span class="text-xs border border-secondary/60 rounded-full px-2 py-1">CSS</span>
                                <span class="text-xs border border-secondary/60 rounded-full px-2 py-1">PHP</span>
                            </div>
                            <p class="text-gray-900 text-lg">   This system is essential role in the university enrollment process. The system deals with the mainteance of student information within the UCS, (PangLong). </p>
                        </div>
                        <div class="mt-auto px-3">
                            <div class="mt-auto flex justify-end text-sm space-x-2 border-t py-3 border-secondary/60">
                                <a class="px-5 py-3 group relative bg-purple-300 text-black select-none bg-primary font-semibold rounded-md overflow-hidden hover:scale-110 outline-none active:scale-105 transition-all flex space-x-2 items-center" href="https://github.com/zinlin59/php-student-affair-system" target="_blank">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span>Demo</span>
                                    <div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine "></div>
                                </a>
                                <a class="px-5 py-3 group relative bg-purple-300 text-black select-none bg-primary font-semibold rounded-md overflow-hidden hover:scale-110 outline-none active:scale-105 transition-all flex space-x-2 items-center bg-secondary opacity-100" href="https://github.com/zinlin59/php-student-affair-system" target="_blank">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span>Code</span>
                                    <div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine "></div>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* second page */}
                    <div class="flex bg-paper flex-col border-2 border-secondary/10  border-purple-600 rounded-md hover:border-secondary/70 transition-all duration-300 cursor-pointer">
                        <div class="aspect-video relative group object-contain max-h-[200px] transition-all duration-300 rounded-t bg-[length:100%_100%] hover:bg-[length:120%_120%] bg-center card2">

                        </div>
                        <div class="p-3">
                            <h5 class="text-xl font-semibold">Admin Dashboard</h5>
                            <div class="flex flex-wrap gap-1 my-2">
                                <span class="text-xs border border-secondary/60 rounded-full px-2 py-1">HTML</span>
                                <span class="text-xs border border-secondary/60 rounded-full px-2 py-1">CSS</span>
                                <span class="text-xs border border-secondary/60 rounded-full px-2 py-1">React JS</span>
                            </div>
                            <p class="text-gray-900 text-lg">   This app is Admin Dashboard Design</p>
                        </div>
                        <div class="mt-auto px-3">
                            <div class="mt-auto flex justify-end text-sm space-x-2 border-t py-3 border-secondary/60">
                                <a class="px-5 py-3 group relative bg-purple-300 text-black select-none bg-primary font-semibold rounded-md overflow-hidden hover:scale-110 outline-none active:scale-105 transition-all flex space-x-2 items-center" href="https://zinlin59.github.io/react-admindashboard/" target="_blank">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span>Demo</span>
                                    <div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine "></div>
                                </a>
                                <a class="px-5 py-3 group relative bg-purple-300 text-black select-none bg-primary font-semibold rounded-md overflow-hidden hover:scale-110 outline-none active:scale-105 transition-all flex space-x-2 items-center bg-secondary opacity-100" href="https://github.com/zinlin59/react-admindashboard" target="_blank">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span>Code</span>
                                    <div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine "></div>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* third page */}
                    <div class="flex bg-paper flex-col border-2 border-secondary/10  border-purple-600 rounded-md hover:border-secondary/70 transition-all duration-300 cursor-pointer">
                        <div class="aspect-video relative group object-contain max-h-[200px] transition-all duration-300 rounded-t bg-[length:100%_100%] hover:bg-[length:120%_120%] bg-center card3">

                        </div>
                        <div class="p-3">
                            <h5 class="text-xl font-semibold">Myanmar Dream Dictionary</h5>
                            <div class="flex flex-wrap gap-1 my-2">
                                <span class="text-xs border border-secondary/60 rounded-full px-2 py-1">HTML</span>
                                <span class="text-xs border border-secondary/60 rounded-full px-2 py-1">CSS</span>
                                <span class="text-xs border border-secondary/60 rounded-full px-2 py-1">Tailwind CSS</span>
                                <span class="text-xs border border-secondary/60 rounded-full px-2 py-1">React JS</span>
                                <span class="text-xs border border-secondary/60 rounded-full px-2 py-1">JQuery</span>
                            </div>
                            <p class="text-gray-900 text-lg">   This app is to find your dream precursors.</p>
                        </div>
                        <div class="mt-auto px-3">
                            <div class="mt-auto flex justify-end text-sm space-x-2 border-t py-3 border-secondary/60">
                                <a class="px-5 py-3 group relative bg-purple-300 text-black select-none bg-primary font-semibold rounded-md overflow-hidden hover:scale-110 outline-none active:scale-105 transition-all flex space-x-2 items-center" href="https://zinlin59.github.io/react-myan-dream/" target="_blank">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span>Demo</span>
                                    <div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine "></div>
                                </a>
                                <a class="px-5 py-3 group relative bg-purple-300 text-black select-none bg-primary font-semibold rounded-md overflow-hidden hover:scale-110 outline-none active:scale-105 transition-all flex space-x-2 items-center bg-secondary opacity-100" href="https://github.com/zinlin59/react-myan-dream" target="_blank">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span>Code</span>
                                    <div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine "></div>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* fourth page*/}
                    <div class="flex bg-paper flex-col border-2 border-secondary/10  border-purple-600 rounded-md hover:border-secondary/70 transition-all duration-300 cursor-pointer">
                        <div class="aspect-video relative group object-contain max-h-[200px] transition-all duration-300 rounded-t bg-[length:100%_100%] hover:bg-[length:120%_120%] bg-center card4">

                        </div>
                        <div class="p-3">
                            <h5 class="text-xl font-semibold">Small Weather App</h5>
                            <div class="flex flex-wrap gap-1 my-2">
                                <span class="text-xs border border-secondary/60 rounded-full px-2 py-1">HTML</span>
                                <span class="text-xs border border-secondary/60 rounded-full px-2 py-1">CSS</span>
                                <span class="text-xs border border-secondary/60 rounded-full px-2 py-1">Tailwind CSS</span>
                                <span class="text-xs border border-secondary/60 rounded-full px-2 py-1">React JS</span>
                                <span class="text-xs border border-secondary/60 rounded-full px-2 py-1">React API</span>
                            </div>
                            <p class="text-gray-900 text-lg">   This app is to find the weather condition of the place you want to know.</p>
                        </div>
                        <div class="mt-auto px-3">
                            <div class="mt-auto flex justify-end text-sm space-x-2 border-t py-3 border-secondary/60">
                                <a class="px-5 py-3 group relative bg-purple-300 text-black select-none bg-primary font-semibold rounded-md overflow-hidden hover:scale-110 outline-none active:scale-105 transition-all flex space-x-2 items-center" href="https://zinlin59.github.io/react-weather-api/" target="_blank">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span>Demo</span>
                                    <div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine "></div>
                                </a>
                                <a class="px-5 py-3 group relative bg-purple-300 text-black select-none bg-primary font-semibold rounded-md overflow-hidden hover:scale-110 outline-none active:scale-105 transition-all flex space-x-2 items-center bg-secondary opacity-100" href="https://github.com/zinlin59/react-weather-api" target="_blank">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span>Code</span>
                                    <div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine "></div>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Fifth page*/}
                    <div class="flex bg-paper flex-col border-2 border-secondary/10  border-purple-600 rounded-md hover:border-secondary/70 transition-all duration-300 cursor-pointer">
                        <div class="aspect-video relative group object-contain max-h-[200px] transition-all duration-300 rounded-t bg-[length:100%_100%] hover:bg-[length:120%_120%] bg-center card6">

                        </div>
                        <div class="p-3">
                            <h5 class="text-xl font-semibold">Typing Speed Test</h5>
                            <div class="flex flex-wrap gap-1 my-2">
                                <span class="text-xs border border-secondary/60 rounded-full px-2 py-1">HTML</span>
                                <span class="text-xs border border-secondary/60 rounded-full px-2 py-1">CSS</span>
                                <span class="text-xs border border-secondary/60 rounded-full px-2 py-1">React JS</span>
                            </div>
                            <p class="text-gray-900 text-lg">   This app is to test your typing speed.</p>
                        </div>
                        <div class="mt-auto px-3">
                            <div class="mt-auto flex justify-end text-sm space-x-2 border-t py-3 border-secondary/60">
                                <a class="px-5 py-3 group relative bg-purple-300 text-black select-none bg-primary font-semibold rounded-md overflow-hidden hover:scale-110 outline-none active:scale-105 transition-all flex space-x-2 items-center" href="https://zinlin59.github.io/typing-testing-game/" target="_blank">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span>Demo</span>
                                    <div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine "></div>
                                </a>
                                <a class="px-5 py-3 group relative bg-purple-300 text-black select-none bg-primary font-semibold rounded-md overflow-hidden hover:scale-110 outline-none active:scale-105 transition-all flex space-x-2 items-center bg-secondary opacity-100" href="https://github.com/zinlin59/typing-testing-game" target="_blank">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span>Code</span>
                                    <div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine "></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>



            </section >
        </div>

    )
}

export default Projects