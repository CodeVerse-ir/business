"use client";

import banner1 from '/public/image/carousel/banner1.jpg';
import banner2 from '/public/image/carousel/banner2.jpg';
import banner3 from '/public/image/carousel/banner3.png';
import banner4 from '/public/image/carousel/banner4.jpg';
import banner5 from '/public/image/carousel/banner5.jpg';

import Image from 'next/image';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
// Swiper css
import 'swiper/swiper-bundle.css';

import { useRef } from 'react';
import Link from 'next/link';

const pictures = [
    {
        image: banner1,
        title: "برگزاری دوره های آموزشی",
        text: "عمران ، معماری ، شهرسازی ، مکانیک ، برق ، نقشه برداری ، عمران-معماری ، ترافیک"
    },
    {
        image: banner2,
        title: "مرکز آموزش های تخصصی",
        text: "با رویکرد رفع نیاز های وزارتخانه ها ، سازمان ها و دستگاه های اجرایی"
    },
    {
        image: banner3,
        title: "تکنیک های ارتباط حرفه ای",
        text: "با هدف شناخت اصول تسلط بر کلام ، رفتار و مدیریت مذاکره"
    },
    {
        image: banner4,
        title: "دوره های زبان های خارجه",
        text: "انگلیسی ، فرانسه ، آلمانی ، ترکی استانبولی"
    },
    {
        image: banner5,
        title: "نقاشی و سیاه قلم",
        text: "با اعطای گواهی معتبر مرکز آموزش های تخصصی دانشگاه علم و فرهنگ"
    },
]

export default function SectionCarousel() {

    const swiperRef1 = useRef(null);
    const swiperRef2 = useRef(null);
    const swiperRef3 = useRef(null);

    const handleSlideChange = (swiper) => {
        if (swiperRef1.current) {
            swiperRef1.current.slideTo(swiper.activeIndex);
        }
        if (swiperRef2.current) {
            swiperRef2.current.slideTo(swiper.activeIndex);
        }
        if (swiperRef3.current) {
            swiperRef3.current.slideTo(swiper.activeIndex);
        }
    };

    return (
        <section className="relative mt-8 md:mt-20 bg-gradient-to-tr from-teal-900 to-teal-500 overflow-hidden">

            <div className="container">

                <div className="h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center z-10">

                    <div className="flex flex-col items-end justify-center w-[10%] h-full gap-y-10">
                        <div className="w-[80%] h-10 md:h-14 lg:h-20 rounded-r-full bg-orange-300 z-10"></div>
                        <div className="w-full h-16 md:h-20 lg:h-30 rounded-r-full bg-orange-200 z-10"></div>
                    </div>

                    <Swiper
                        onSwiper={(swiper) => (swiperRef1.current = swiper)}
                        modules={[Pagination, Autoplay]}
                        style={{
                            '--swiper-pagination-color': '#fb923c',
                        }}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        rewind={true}
                        slidesPerView={1}
                        onSlideChange={handleSlideChange}
                        className="w-[90%] h-[80%] sm:w-[60%] md:w-[80%] md:h-[80%] lg:w-[60%] lg:h-[80%] rounded-4xl overflow-hidden"
                    >

                        {/* <!-- Slides --> */}
                        {pictures.map((picture, index) => {
                            return <SwiperSlide key={index}>
                                <Link href={""} className='w-full h-full'>
                                    <Image
                                        className='w-full h-full'
                                        src={picture.image}
                                        width="100%"
                                        height="100%"
                                        alt={picture.title}
                                        loading='lazy'
                                    // loader={imageLoader}
                                    />
                                </Link>
                            </SwiperSlide>
                        })}
                    </Swiper >

                    <div className="flex flex-col items-start justify-center w-[25%] sm:w-[30%] md:w-[40%] gap-y-10 z-10">
                        <div className="w-full h-10 md:h-14 lg:h-20 rounded-l-full bg-orange-300">

                            <Swiper
                                onSwiper={(swiper) => (swiperRef2.current = swiper)}
                                modules={[Autoplay]}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                rewind={true}
                                slidesPerView={1}
                                onSlideChange={handleSlideChange}
                                className="w-[90%] h-10 md:h-14 lg:h-20"
                            >
                                {/* <!-- Slides --> */}
                                {pictures.map((picture, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className='hidden md:flex items-center justify-center h-10 md:h-14 lg:h-20 font-MorabbaMedium text-base md:text-lg lg:text-xl'>
                                                {picture.title}
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>

                        </div>
                        <div className="w-[80%] h-16 md:h-20 lg:h-30 rounded-l-full bg-orange-200">

                            <Swiper
                                onSwiper={(swiper) => (swiperRef3.current = swiper)}
                                modules={[Autoplay]}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                rewind={true}
                                slidesPerView={1}
                                onSlideChange={handleSlideChange}
                                className="w-[90%] h-14 md:h-20 lg:h-30"
                            >
                                {/* <!-- Slides --> */}
                                {pictures.map((picture, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className='hidden md:flex items-center justify-center w-full h-full font-MorabbaMedium md:text-base lg:text-lg line-clamp-3'>
                                                {picture.text}
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
