"use client";

import Link from 'next/link'

import art from '/public/image/working-group/art.svg'
import bear from '/public/image/working-group/bear.svg'
import build from '/public/image/working-group/build.svg'
import educator from '/public/image/working-group/educator.svg'
import inspiration from '/public/image/working-group/inspiration.svg'
import programming from '/public/image/working-group/programming.svg'
import teaching from '/public/image/working-group/teaching.svg'
import typing from '/public/image/working-group/typing.svg'

import Image from 'next/image';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
// Swiper css
import 'swiper/swiper-bundle.css';

const teach = [
    {
        title: "هنر",
        image: art
    },
    {
        title: " بورس و بازارهای مالی",
        image: bear
    },
    {
        title: "آموزشهای تخصصی",
        image: build
    },
    {
        title: "تربیت مربی",
        image: educator
    },
    {
        title: "معماری و دکوراسیون داخلی",
        image: inspiration
    },
    {
        title: "کامپیوتر",
        image: programming
    },
    {
        title: "آموزش‌های آفلاین",
        image: teaching
    },
    {
        title: "زبان های خارجی",
        image: typing
    }
]

export default function SectionWorkingGroup() {
    return (
        <section className="py-10 md:py-16 lg:py-20">
            <div className="container">

                {/* <!-- title --> */}
                <div className="flex items-center justify-center pb-5 md:pb-10 lg:pb-16">
                    <h4 className="font-MorabbaMedium text-2xl md:text-3xl lg:text-4xl text-black dark:text-white">
                        کارگروه های آموزشی
                    </h4>
                </div>

                <div className="flex items-center justify-center px-5 md:px-0">

                    <div className="hidden md:flex swiper-button-prev-custom">
                        <svg className="w-10 h-10 rotate-180 text-teal-500 hover:text-teal-700 transition-all cursor-pointer">
                            <use href="#chevron-left"></use>
                        </svg>
                    </div>

                    {/* <!-- Section Body  --> */}

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{
                            nextEl: ".swiper-button-next-custom",
                            prevEl: ".swiper-button-prev-custom",
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        rewind={true}
                        slidesPerView={2}
                        spaceBetween={10}
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        className="mySwiper"
                    >

                        {/* <!-- Slides --> */}
                        {teach.map((item, index) => {
                            return <SwiperSlide key={index} className='pt-5'>
                                <Link href={""} className="relative group flex items-center justify-center">
                                    <span
                                        className="absolute invisible opacity-0 top-16 group-hover:visible group-hover:opacity-100 group-hover:-top-5 left-0 right-0 flex items-center justify-center w-full py-2 mx-auto font-DanaBold text-sm md:text-base lg:text-lg text-black dark:text-white rounded-lg border border-gray-700 dark:border-gray-300 transition-all duration-300">
                                        {item.title}
                                    </span>
                                    <Image className='size-[190px] sm:size-[210px] md:size-[230px] lg:size-[300px] text-teal-700 scale-90 group-hover:scale-110 transition-all duration-300'
                                        src={item.image}
                                        width={270}
                                        height={270}
                                        alt={item.title}
                                        loading='lazy'
                                    // loader={imageLoader}
                                    />
                                </Link>
                            </SwiperSlide>
                        })}

                    </Swiper >


                    <div className="hidden md:flex swiper-button-next-custom">
                        <svg className="w-10 h-10 text-teal-500 hover:text-teal-700 transition-all cursor-pointer">
                            <use href="#chevron-left"></use>
                        </svg>
                    </div>

                </div>

                {/* <!-- footer --> */}
                <div className="flex items-center justify-center mt-5 md:mt-10 lg:mt-16">
                    <a className="flex items-center justify-center w-36 h-8 md:w-48 md:h-10 text-sm md:text-base lg:text-lg bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors"
                        href="">
                        مشاهده همه آموزش ها
                    </a>
                </div>

            </div>
        </section>
    )
}
