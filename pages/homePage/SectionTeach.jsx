import Image from 'next/image'

import accounting from '/public/image/cart/Accounting.jpg';
import Painting from '/public/image/cart/Painting.jpg';
import WebDesign from '/public/image/cart/Web-design.jpg';
import foreignLanguages from '/public/image/cart/foreign-languages.jpg';

import logo from '/public/image/logo/logo-img.webp';

const teach = [
    {
        name: "accounting",
        image: accounting
    },
    {
        name: "Painting",
        image: Painting
    },
    {
        name: "WebDesign",
        image: WebDesign
    },
    {
        name: "foreignLanguages",
        image: foreignLanguages
    },
]

export default function SectionTeach() {
    return (
        <section className="pt-8 md:pt-20">
            <div className="container">

                {/* <!-- title --> */}
                <div className="flex items-center justify-center pb-16">
                    <h4 className="font-MorabbaMedium text-2xl md:text-3xl lg:text-4xl text-black dark:text-white">
                        گروه های آموزشی
                    </h4>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-x-5 lg:gap-x-10 gap-y-5 md:gap-y-0">
                    <div
                        className="relative group w-[60%] md:w-[30%] h-40 md:h-60 lg:h-80 overflow-hidden rounded-4xl shadow-lg cursor-pointer">
                        <Image
                            className='w-full h-full'
                            src={teach[0].image}
                            width="100%"
                            height="100%"
                            alt={teach[0].name}
                            loading='lazy'
                        // loader={imageLoader}
                        />
                        <div
                            className="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0 bg-gradient-to-bl from-teal-600/95 to-orange-300/95 group-hover:opacity-100 rounded-2xl rounded-bl-4xl">
                            <div className="flex items-center justify-center px-3 md:px-0">
                                <Image
                                    className='w-20 md:w-36 mx-auto'
                                    src={logo}
                                    width={80}
                                    height={80}
                                    alt="University of Science and Culture"
                                    loading='lazy'
                                // loader={imageLoader}
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex md:flex-col items-center justify-center w-full md:w-[30%] gap-y-5 lg:gap-y-10 gap-x-5 md:gap-x-0">
                        <div className="relative group w-full h-40 md:h-60 overflow-hidden rounded-4xl shadow-lg cursor-pointer">
                            <Image
                                className='w-full h-full'
                                src={teach[1].image}
                                width="100%"
                                height="100%"
                                alt={teach[1].name}
                                loading='lazy'
                            // loader={imageLoader}
                            />                                <div
                                className="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0 bg-gradient-to-bl from-teal-600/95 to-orange-300/95 group-hover:opacity-100 rounded-2xl rounded-bl-4xl">
                                <div className="flex items-center justify-center px-3 md:px-0">
                                    <Image
                                        className='w-20 md:w-36 mx-auto'
                                        src={logo}
                                        width={80}
                                        height={80}
                                        alt="University of Science and Culture"
                                        loading='lazy'
                                    // loader={imageLoader}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="relative group w-full h-40 md:h-60 overflow-hidden rounded-4xl shadow-lg cursor-pointer">
                            <Image
                                className='w-full h-full'
                                src={teach[2].image}
                                width="100%"
                                height="100%"
                                alt={teach[2].name}
                                loading='lazy'
                            // loader={imageLoader}
                            />                                <div
                                className="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0 bg-gradient-to-bl from-teal-600/95 to-orange-300/95 group-hover:opacity-100 rounded-2xl rounded-bl-4xl">
                                <div className="flex items-center justify-center px-3 md:px-0">
                                    <Image
                                        className='w-20 md:w-36 mx-auto'
                                        src={logo}
                                        width={80}
                                        height={80}
                                        alt="University of Science and Culture"
                                        loading='lazy'
                                    // loader={imageLoader}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="relative group w-[60%] md:w-[30%] h-40 md:h-60 lg:h-80 overflow-hidden rounded-4xl shadow-lg cursor-pointer">
                        <Image
                            className='w-full h-full'
                            src={teach[3].image}
                            width="100%"
                            height="100%"
                            alt={teach[3].name}
                            loading='lazy'
                        />
                        <div
                            className="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0 bg-gradient-to-bl from-teal-600/95 to-orange-300/95 group-hover:opacity-100 rounded-2xl rounded-bl-4xl">
                            <div className="flex items-center justify-center px-3 md:px-0">
                                <Image
                                    className='w-20 md:w-36 mx-auto'
                                    src={logo}
                                    width={80}
                                    height={80}
                                    alt="University of Science and Culture"
                                    loading='lazy'
                                // loader={imageLoader}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
