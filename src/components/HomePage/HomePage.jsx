import React from 'react'
import Zinlin from '../../imgs/zinlin.jpg'
import Heartemoji from '../../imgs/heartemoji.png'
import Glassemoji from '../../imgs/glasses.png'
import Headroom from 'react-headroom'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import MenuBar from '../MenuBar/MenuBar';
import './HomePage.css'
import { Helmet } from 'react-helmet-async'
import Fade from 'react-reveal/Fade'
import Jump from 'react-reveal/Jump'
import Animation from 'react-reveal/LightSpeed'
const HomePage = () => {
    const [typeEffect] = useTypewriter({
        words: ['b Developer '],
        loop: {},
        typeSpeed: 150,
        deleteSpeed: 100
    });
    const onButtonClick = () => {
        const pdfUrl = "zinlinCv.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "zinlinhtike-CV.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
            <Helmet>
                <title>ZLH_Portfolio</title>
            </Helmet>
            <div className=" text-gray-800" id='homepage' >
                {/*menu bar */}
                <Headroom>
                    <header className='bg-blue-600'>
                        <MenuBar />
                    </header>
                </Headroom>


                <section className=" grid items-center justify-center grid-6 grid-cols-2
                 mainboard">
                    {/*  left */}
                    <div className='flex leftside'>
                        <div className='blur' style={{
                            background: 'rgb(103, 213, 99);',
                            top: '13rem',
                            width: '25rem',
                            height: '25rem',
                            left: '6rem'
                        }}></div>

                        <div className='leftchild'>
                            <Animation>
                                <h1 className="text-5xl sm:text-5xl lg:text-5xl" style={{
                                    position: 'relative',
                                    zIndex: 10
                                }}>Hi! I am,</h1>
                            </Animation>
                            <h1 className="text-5xl sm:text-5xl lg:text-5xl zlhname grid grid-cols-12 grid-1"
                                style={{
                                    position: 'relative',
                                    zIndex: 10
                                }}>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: "1",
                                        delay: "1"
                                    }}
                                >Z</motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: "1",
                                        delay: "2"
                                    }}
                                >I</motion.div><motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: "1",
                                        delay: "3"
                                    }}
                                >N</motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: "1",
                                        delay: "3"
                                    }}
                                > &nbsp;&nbsp;</motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: "1",
                                        delay: "4"
                                    }}
                                >L</motion.div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: "1",
                                        delay: "5"
                                    }}
                                >I</motion.div><motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: "1",
                                        delay: "6"
                                    }}
                                >N</motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: "1",
                                        delay: "6"
                                    }}
                                > &nbsp;&nbsp;</motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: "1",
                                        delay: "7"
                                    }}
                                >H</motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: "1",
                                        delay: "8"
                                    }}
                                >T</motion.div><motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: "1",
                                        delay: "9"
                                    }}
                                >I</motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: "1",
                                        delay: "10"
                                    }}
                                >K</motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: "1",
                                        delay: "11"
                                    }}
                                >E</motion.div>
                            </h1>

                            <h2 className="font-light text-4xl sm:text-4xl lg:text-4xl">
                                We{typeEffect}<Cursor style='}' />
                            </h2>
                            {/* Button */}
                            <div className='grid grid-cols-2 grid-6 pt-9' style={{
                                gap: 15
                            }}>
                                <button onClick={onButtonClick} class="group relative h-12 w-30 overflow-hidden rounded-lg bg-white text-lg shadow">
                                    <div class="absolute inset-0 w-3 bg-purple-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                    <span class="relative text-black group-hover:text-white">Download CV</span>
                                </button>

                            </div>
                            {/* social icon link */}
                            <Jump>
                                <div className='social pt-9'>
                                    <div className='socialicons'>
                                        <a href="https://instagram.com/154zinlinhtike?igshid=NGVhN2U2NjQ0Yg==">
                                            <img className="w-12 h-12"
                                                src='https://www.iconpacks.net/icons/2/free-instagram-logo-icon-2433-thumb.png'
                                                alt="Instagram" />
                                        </a>
                                        <a href="https://github.com/zinlin59">
                                            <img className="w-12 h-12" style={{
                                                borderRadius: '50%'
                                            }}
                                                src='data:image/png;base64,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'
                                                alt="Github" />
                                        </a>
                                        <a href="https://codepen.io/Zin-Htike">
                                            <img className="w-12 h-12"
                                                src='https://cdn.iconscout.com/icon/free/png-256/free-codepen-3771716-3149550.png'
                                                alt="Code pen" />
                                        </a>
                                    </div>
                                </div>
                            </Jump>
                        </div>

                    </div>
                    {/* right */}
                    <div className=' flex rightside' style={{
                        paddingRight: '100px'
                    }} >
                        {/*left emoji*/}
                        <div className='leftemoji'>
                            <div className="emoji">
                                <Fade left>
                                    <motion.img src={Heartemoji} alt="HeartEmoji"
                                        style={{
                                            width: '100px',
                                            height: '130px'
                                        }}
                                        animate={{
                                            x: [0, 10, 10, 0, -10, -10, 0],
                                        }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: "5",
                                            delay: "1"
                                        }} />
                                </Fade>
                            </div>
                        </div>
                        {/*profile png */}

                        <img className="block object-cover w-2/4 rounded-full ring-4 ring-purple-500/50 ring-offset-[30px]"
                            src={Zinlin} alt="I am Zin Lin Htike" />

                        {/* right emoji */}
                        <div className='rightemoji'>
                            <div className="emoji">
                                <Fade right>
                                    <motion.img src={Glassemoji} alt="HeartEmoji"
                                        style={{
                                            width: '100px',
                                            height: '110px'
                                        }}
                                        animate={{
                                            x: [0, -10, -10, 0, 10, 10, 0],
                                        }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: "5",
                                            delay: "1"
                                        }} />
                                </Fade>
                            </div>
                        </div>
                    </div>

                </section >

            </div >
        </>
    )
}

export default HomePage