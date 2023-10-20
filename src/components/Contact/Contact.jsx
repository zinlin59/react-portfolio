import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import Oshape from '../../imgs/oshape.png'
import Programmer from '../../imgs/programmer.gif'
import './Contact.css'
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_r91wiie', 'template_00fb8ut', form.current, '59vzZEKHFZTpTyyAs')
            .then((result) => {
                console.log(result.text);
                console.log("message sent")
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            <div className="flex-col items-center justify-center p-12">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-center flex justify-center row text-2xl font-medium title-font mb-4 text-black">C<img src={Oshape} style={{ width: "35px", height: '35px' }} alt="" /> NTACT ME</h1>
                </div>
                <div className="contactcard">
                    <div className="contactbody">

                        <div className="mx-auto w-full max-w-[550px]">

                            <form ref={form} onSubmit={sendEmail}>
                                <div className="mb-5">
                                    <label
                                        for="name"
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        id="name"
                                        placeholder="Full Name"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                                <div className="mb-5">
                                    <label
                                        for="email"
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        id="email"
                                        placeholder="example@domain.com"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>

                                <div className="mb-5">
                                    <label
                                        for="message"
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        rows="4"
                                        name="message"
                                        id="message"
                                        placeholder="Type your message"
                                        className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    ></textarea>
                                </div>
                                <div>
                                    <button
                                        className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="programmer">
                            <img src={Programmer} alt="" />
                            <div className="contactadd">
                                <div className="emailaddress">
                                    <div className="contacticons">
                                        <AiOutlineMail />
                                    </div>
                                    <h3>zinlinhtike59@gmail.com </h3>
                                </div>
                                <div className="phoneno">
                                    <div className="contacticons">
                                        <AiOutlinePhone />
                                    </div>
                                    <h3>09985453498</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact