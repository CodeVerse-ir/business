"use client";

import teacher from '/public/image/cart/Teacher-training-course.png';
import coloredPencil from '/public/image/cart/colored-pencil.png';
import blackPen from '/public/image/cart/black-pen.png';
import accounting from '/public/image/cart/Accounting.jpg';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const courses = [
    {
        image: teacher,
        title: "کارگاه دو روزه تربیت مدرس زبان انگلیسی (TTC)",
        text: "اساتید دانشگاه علم و فرهنگ",
        star: 5,
        clock: "10:00 الی 18:00",
        calendar: "پنج شنبه - جمعه",
        StartCourse: "1403/05/24",
        price: 4200000,
        dicount: 0,
    },
    {
        image: coloredPencil,
        title: "مدادرنگی",
        text: "مهسا شایسته",
        star: 4,
        clock: "شناور",
        calendar: " دوشنبه - سه شنبه - پنج شنبه",
        StartCourse: "1403/05/15",
        price: 800000,
        dicount: 0,
    },
    {
        image: blackPen,
        title: "سیاه قلم",
        text: "مهسا شایسته",
        star: 2,
        clock: "شناور",
        calendar: "پنج شنبه - دوشنبه",
        StartCourse: "1403/05/15",
        price: 950000,
        dicount: 1000000,
    },
    {
        image: accounting,
        title: "ترم سه حسابداری مشاغل به روش نوین",
        text: "علی رنجبر",
        star: 3,
        clock: "13:00 الی 14:30",
        calendar: "پنج شنبه - جمعه",
        StartCourse: "1403/06/01",
        price: 260000,
        dicount: 300000,
    },
]

export default function SectionCourses() {

    const [flippedIndex, setFlippedIndex] = useState(null);

    const handleFrontCart = (index) => {
        setFlippedIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <section className="pt-8 md:pt-20">
            <div className="container">

                {/* <!-- title --> */}
                <div className="flex items-center justify-center pb-16">
                    <h4 className="font-MorabbaMedium text-2xl md:text-3xl lg:text-4xl text-black dark:text-white">
                        دوره های در حال تکمیل
                    </h4>
                </div>

                {/* <!-- Section Body  --> */}
                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3.5 md:gap-5">

                    {courses.map((course, index) => {
                        return <div key={index} className="card-container min-w-[157px] min-h-[350px] md:min-h-[416px] lg:min-w-[300px] lg:min-h-[440px]" onClick={() => handleFrontCart(index)}>
                            <div className={`card ${flippedIndex === index ? "flipped" : ""}`}>
                                <div className="card-front flex flex-col justify-between bg-white dark:bg-zinc-700 shadow-normal rounded-3xl">

                                    <div className="w-full rounded-t-3xl overflow-hidden">
                                        <Image
                                            className='w-full h-[200px]'
                                            src={course.image}
                                            width="100%"
                                            height={200}
                                            alt={course.title}
                                            loading='lazy'
                                        // loader={imageLoader}
                                        />
                                    </div>

                                    {/* <!-- Cart Title --> */}
                                    <h5
                                        className="font-MorabbaBold px-4 md:px-5 my-4 md:my-5 text-sm lg:text-xl text-black dark:text-white line-clamp-2">
                                        {course.title}
                                    </h5>

                                    {/* <!-- Cart Detail --> */}
                                    <div
                                        className="px-4 md:px-5 mt-1.5 md:mt-2.5 font-DanaMedium text-xs md:text-sm lg:text-base text-gray-700 dark:text-gray-300 line-clamp-2">
                                        {course.text}
                                    </div>

                                    {/* <!-- Cart Footer --> */}
                                    <div className="flex items-center justify-between p-4 md:p-5 mt-1.5 md:mt-2.5">

                                        {/* <!-- Star --> */}
                                        <div className="flex text-gray-300 dark:text-gray-400">
                                            {Array.from({ length: 5 }, (_, index) => (
                                                <svg key={index} className={`mb-1 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 ${index < course.star && "text-yellow-400"}`}>
                                                    <use href="#star-solid"></use>
                                                </svg>
                                            ))}
                                        </div>

                                    </div>
                                </div>

                                <div className="card-back flex flex-col items-center justify-between px-4 md:px-5 bg-white dark:bg-zinc-700 shadow-normal rounded-3xl">

                                    {/* <!-- Cart Title --> */}
                                    <h5
                                        className="font-MorabbaBold px-4 md:px-5 mt-2 lg:mt-5 mb-2 text-base md:text-lg lg:text-xl text-black dark:text-white line-clamp-2">
                                        جزئیات
                                    </h5>

                                    {/* <!-- Cart Detail --> */}
                                    <div className="w-full font-DanaMedium text-xs md:text-sm lg:text-base text-black dark:text-white">

                                        <div className="flex flex-col lg:flex-row items-center justify-between mb-3 md:mb-3.5 gap-y-2">
                                            <div className="flex items-center justify-center gap-x-1">
                                                <svg className="w-4 h-4 md:w-5 md:h-5">
                                                    <use href="#calendar-days"></use>
                                                </svg>
                                                <span>
                                                    شروع دوره:
                                                </span>
                                            </div>
                                            <div>
                                                {course.StartCourse}
                                            </div>
                                        </div>

                                        <div className="flex flex-col lg:flex-row items-center justify-between mb-3 md:mb-3.5 gap-y-2">
                                            <div className="flex items-center justify-center gap-x-1">
                                                <svg className="w-4 h-4 md:w-5 md:h-5">
                                                    <use href="#calendar"></use>
                                                </svg>
                                                <span>
                                                    روزهای برگزاری:
                                                </span>
                                            </div>
                                            <div>
                                                {course.calendar}
                                            </div>
                                        </div>

                                        <div className="flex flex-col lg:flex-row items-center justify-between mb-3 md:mb-3.5 gap-y-2">
                                            <div className="flex items-center justify-center gap-x-1">
                                                <svg className="w-4 h-4 md:w-5 md:h-5">
                                                    <use href="#clock"></use>
                                                </svg>
                                                <span>
                                                    ساعات جلسات:
                                                </span>
                                            </div>
                                            <div>
                                                {course.clock}
                                            </div>
                                        </div>

                                    </div>

                                    <div className="w-full h-px bg-gray-300"></div>

                                    {/* <!-- Cart Title --> */}
                                    <h5
                                        className="font-MorabbaBold px-4 md:px-5 mt-2 lg:mt-5 mb-2 text-base md:text-lg lg:text-xl text-black dark:text-white line-clamp-2">
                                        هزینه دوره
                                    </h5>

                                    {/* <!-- Cart Price --> */}
                                    <div className="w-full font-DanaMedium text-xs md:text-sm lg:text-base text-black dark:text-white">

                                        <div className="flex items-center justify-between w-full mb-1.5 md:mb-2.5">

                                            <div className="flex items-center justify-center">
                                                قیمت :
                                            </div>
                                            <div className="text-teal-600 dark:text-emerald-500">
                                                <span className="font-DanaBold text-base lg:text-xl">
                                                    {Number(course.price).toLocaleString()}
                                                </span>
                                                <span className="pr-0.5 text-xs md:text-sm tracking-tighter">
                                                    تومان
                                                </span>
                                            </div>

                                        </div>

                                        <div className="flex items-center justify-between w-full mb-1.5 md:mb-2.5">

                                            <div className="flex items-center justify-center">
                                                تخفیف :
                                            </div>
                                            <div className="text-gray-400 lg:text-base">
                                                <span className="font-DanaBold text-base lg:text-xl line-through decoration-red-500 decoration-1">
                                                    {Number(course.dicount).toLocaleString()}
                                                </span>
                                                <span className="pr-0.5 text-xs md:text-sm">
                                                    تومان
                                                </span>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="w-full h-px bg-gray-300"></div>

                                    {/* <!-- Cart Footer --> */}
                                    <div className="flex items-center justify-between w-full mb-2 md:mb-5 mt-1">

                                        <Link href={""} className="flex items-center justify-center w-20 h-10 lg:w-36 lg:h-10 text-white rounded-lg bg-teal-600 hover:bg-teal-700 transition-colors">
                                            <span className="hidden lg:inline">
                                                افزودن به
                                            </span>
                                            سبد خرید
                                        </Link>
                                        <Link href={""} className="flex items-center justify-center w-14 h-10 lg:w-24 lg:h-10 text-white rounded-lg bg-orange-400 hover:bg-orange-500 transition-colors">
                                            جزئیات
                                            <span className="hidden lg:inline">
                                                دوره
                                            </span>
                                        </Link>

                                    </div>

                                </div>
                            </div>
                        </div>
                    })}

                </div>

                {/* <!-- footer --> */}
                <div className="flex items-center justify-center mt-16">
                    <a className="flex items-center justify-center w-32 h-8 md:w-40 md:h-10 text-sm md:text-base lg:text-lg bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors"
                        href="">
                        مشاهده همه مطالب
                    </a>
                </div>

            </div>
        </section>
    )
}
