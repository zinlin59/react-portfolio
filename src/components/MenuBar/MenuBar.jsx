import React from 'react'
import { Button, Navbar } from 'flowbite-react';
import './MenuBar.css'
const MenuBar = () => {
    return (
        <>
            <Navbar fluid rounded style={{
                zIndex: 10
            }}>
                <Navbar.Brand href="homepage">
                    <div className="self-center whitespace-nowrap text-xl font-semibold dark:text-white parentheader"><span className='headerstyle'>ZLH</span>tike</div>
                </Navbar.Brand>
                <div className="flex md:order-2 ">
                    <a href="#contact" > <Button className='bg-purple-500'>Contact</Button></a>
                </div>
                <Navbar.Collapse >
                    <Navbar.Link className='menuitems' href="homepage">
                        Home
                    </Navbar.Link>
                    <Navbar.Link className='menuitems' href="#skills">Skills</Navbar.Link>
                    <Navbar.Link className='menuitems' href="#projects">Project</Navbar.Link>
                    <Navbar.Link className='menuitems' href="#about">About</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default MenuBar