"use client";

import logo from '/public/image/logo/logo-img.png'

import Image from 'next/image';

export default function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  
        });
    };

    return (
        <footer className="relative min-h-80 px-5 py-10 m:px-10 md:px-5 lg:px-16 text-white bg-teal-700">

            {/* <!-- Curve --> */}
            <svg
                className="absolute top-0 left-0 right-0 hidden md:inline-block mx-auto text-gray-100 dark:text-zinc-800 w-[100px] h-[22px] rotate-180">
                <use href="#curve"></use>
            </svg>

            {/* <!-- Arrow Circle --> */}
            <div
                className="absolute top-0 left-0 right-0 mx-auto -translate-y-2/4 hidden md:flex items-center justify-center w-[30px] h-[30px] border-2 border-orange-300 rounded-full cursor-pointer" onClick={scrollToTop}>
                <svg className="w-5 h-5 text-zinc-700 dark:text-white rotate-180">
                    <use href="#chevron-down-mini"></use>
                </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 xl:gap-y-0 pb-5 border-b border-b-gray-100/20">

                <div className="flex flex-col md:col-span-2 xl:col-span-1 gap-y-4">

                    <Image className='w-48'
                        src={logo}
                        width={192}
                        height={192}
                        alt="University of Science and Culture"
                        loading='lazy'
                    // loader={imageLoader}
                    />

                    <p className="text-base lg:text-lg xl:pl-20">
                        مرکز آموزش‌های تخصصی دانشگاه علم و فرهنگ زیر نظر بنیاد توسعه کسب و کار با دغدغه ایجاد اشتغال، کارآفرینی،
                        ارتقای مهارت‌های منابع انسانی و با هدف تربیت نيروي انساني متخصص و مهارتی فعالیت می‌کند.
                    </p>

                </div>

                <div className="flex flex-col">
                    <h4 className="text-white font-DanaBold text-xl lg:text-2xl pb-2">
                        سوالات متداول
                    </h4>
                    <ul
                        className="grid grid-cols-1 mt-6 gap-y-2.5 child-hover:child:text-orange-300 child:child:transition-colors text-sm lg:text-base xs:pl-20 md:pl-0 lg:pl-20">
                        <li>
                            <a href="">
                                <span className="inline-block w-2 h-1 ml-2 bg-gray-200 rounded-3xl"></span>
                                بنیاد کسب و کار دانشگاه علم و فرهنگ چیست؟
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="inline-block w-2 h-1 ml-2 bg-gray-200 rounded-3xl"></span>
                                چه خدماتی توسط بنیاد کسب و کار ارائه می‌شود؟
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="inline-block w-2 h-1 ml-2 bg-gray-200 rounded-3xl"></span>
                                چگونه می‌توان در فعالیت‌های بنیاد کسب و کار شرکت کرد؟
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="inline-block w-2 h-1 ml-2 bg-gray-200 rounded-3xl"></span>
                                چگونه می‌توان به مشاوره‌های تخصصی دسترسی پیدا کرد؟
                            </a>
                        </li>
                    </ul>

                </div>

                <div className="flex flex-col">
                    <h4 className="text-white font-DanaBold text-base lg:text-2xl pb-8">
                        در تماس باشیم
                    </h4>

                    <div className="flex gap-x-2 mb-4 text-sm lg:text-base">
                        <svg className="w-5 h-5">
                            <use href="#map-pin"></use>
                        </svg>
                        بلوار اشرفی اصفهانی ، نرسیده به پل اتوبان همت ، خیابان شهید قموشی ، خیابان بهار
                    </div>

                    <div className="flex gap-x-2 mb-4 text-sm lg:text-base">
                        <svg className="w-5 h-5">
                            <use href="#phone"></use>
                        </svg>
                        <span>
                            تلفن : 44238171
                        </span>
                    </div>

                    <div className="flex gap-x-2 mb-4 text-sm lg:text-base">
                        <svg className="w-5 h-5">
                            <use href="#phone"></use>
                        </svg>
                        <span>
                            دورنگار : 44214750
                        </span>
                    </div>

                </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-y-4 xl:gap-y-0 items-center justify-between mt-7 text-sm lg:text-base">
                <p>
                    تمامی حقوق برای
                    <span className="font-DanaMedium text-orange-300 px-1">
                        بنیاد کسب و کار دانشگاه علم و فرهنگ
                    </span>
                    محفوظ است. ©
                </p>
                <p>
                    طراحی شده توسط
                    <a className="pr-1 hover:text-orange-300 transition-colors" href="https://codeverse.iapp.ir/">Code Verse</a>
                </p>
            </div>

        </footer>
    )
}
