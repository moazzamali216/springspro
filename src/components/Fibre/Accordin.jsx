import React, { useState } from 'react';
import img from "../../assets/images/2.png"
import img1 from "../../assets/images/3.svg"
import img2 from "../../assets/images/world.png"

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);  // Toggle active state
    };

    return (

        <>
            <div className='py-10'>
                <div className='container mx-auto px-4 xl:px-[120px]'>
                    <div className=' w-full  gap-x-4 md:flex-row flex-col gap-y-8 flex '>
                        <div className='w-full md:w-1/2 lg:pr-8 xl:pr-[120px]'>
                            <h1 className='text-4xl sm:text-6xl text-[] font-poppins font-medium'>Put experiences first with the Meraki platform</h1>
                            <div className="accordion mt-8">
                                <div className="accordion-item border-y border-gray-400 py-7 cursor-pointer">
                                    <div
                                        className="accordion-header"
                                        onClick={() => handleToggle(0)}
                                    >
                                        <div className='flex justify-between'>
                                            <h3 className='text-3xl font-poppins font-semibold'>Be Fast & Flexible</h3>
                                            <i className='fa-solid  text-2xl fa-plus'></i>
                                        </div>
                                    </div>
                                    {activeIndex === 0 && (
                                        <div className="accordion-body">
                                            <p className='font-light text-base mt-7'>It all starts with the network. Build more best-in-class network experiences on the world’s most-trusted SD-WAN fabric..</p>
                                        </div>
                                    )}
                                </div>
                                <div className="accordion-item border-b border-gray-400 py-7 cursor-pointer">
                                    <div
                                        className="accordion-header"
                                        onClick={() => handleToggle(1)}
                                    >
                                        <div className='flex'>
                                            <h3 className='text-3xl font-poppins font-semibold'>Benefits of Longetivty Connectivity</h3>
                                            <i className='fa-solid  text-2xl fa-plus'></i>
                                        </div>
                                    </div>
                                    {activeIndex === 1 && (
                                        <div>
                                            <p className='font-light text-base mt-7'>It all starts with the network. Build more best-in-class network experiences on the world’s most-trusted SD-WAN fabric..</p>
                                        </div>
                                    )}
                                </div>

                                <div className="accordion-item border-b border-gray-400 py-7 cursor-pointer">
                                    <div
                                        className="accordion-header"
                                        onClick={() => handleToggle(2)}
                                    >
                                        <div className='flex'>
                                            <h3 className='text-3xl font-poppins font-semibold'>Maintain a Network thats Fast </h3>
                                            <i className='fa-solid  text-2xl fa-plus'></i>
                                        </div>
                                    </div>
                                    {activeIndex === 2 && (
                                        <div className="accordion-body">
                                            <p className='font-light text-base mt-7'>It all starts with the network. Build more best-in-class network experiences on the world’s most-trusted SD-WAN fabric..</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='w-full  md:w-1/2 flex items-center'>                      
                            {activeIndex === 0 && (
                                <img src={img} />
                            )}
                            {activeIndex === 1 && (
                                <img src={img1} />
                            )}
                            {activeIndex === 2 && (
                                <img src={img2} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Accordion;
