"use client";

import Image from 'next/image';
import logo from '../public/image/logo/logo-img.png';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ResizeListener from './ui/ResizeListener';
import Overlay from './ui/Overlay';
import Link from 'next/link';

const links = [
    {
        name: 'صفحه اصلی',
        path: '/',
        icon: "#home"
    },
    {
        name: 'گروه های آموزشی',
        path: '/b',
        icon: "#academic-cap"
    },
    {
        name: ' کلینیک روانشناسی',
        path: '/c',
        icon: "#building-library"
    },
    {
        name: 'درباره ما',
        path: '/d',
        icon: "#document-text"
    },
    {
        name: 'همکاری با ما',
        path: '/e',
        icon: "#user-group"
    },
    {
        name: 'سوالات متداول',
        path: '/f',
        icon: "#chat-bubble"
    },
    {
        name: 'ورود | ثبت نام',
        path: '/g',
        icon: "#arrow-left-on-rectangle"
    },
]

const submenu = [
    {
        name: 'هنر',
        path: '/h',
    },
    {
        name: 'معماری و دکوراسیون داخلی',
        path: '/i',
    },
    {
        name: 'آموزشهای تخصصی',
        path: '/j',
    },
    {
        name: 'بورس و بازارهای مالی',
        path: '/k',
    },
    {
        name: 'کامپیوتر',
        path: '/l',
    },
    {
        name: 'زبان',
        path: '/m',
    },
    {
        name: 'تربیت مربی',
        path: '/n',
    },
    {
        name: 'آموزشهای آفلاین',
        path: '/o',
    },
    {
        name: 'آموزش ضمن خدمت',
        path: '/p',
    },
]

export default function MobileHeader({ handleDarkMode }) {

    const pathname = usePathname();

    const [navbar, setNavbar] = useState(false);
    const [toggleSubmenu, setToggleSubmenu] = useState(false);

    const handleNavbar = () => setNavbar(!navbar);
    const handleToggleSubmenu = () => setToggleSubmenu(!toggleSubmenu);

    return (
        <>
            <div className="flex lg:hidden items-center justify-between h-16 px-4 bg-teal-700">

                {/* <!-- Nav Icon --> */}
                <div className="nav-icon">
                    <svg className="w-6 h-6 text-white" onClick={handleNavbar}>
                        <use href="#bars-3"></use>
                    </svg>
                </div>

                {/* <!-- Nav --> */}
                <div className={`nav fixed top-0 bottom-0 ${navbar ? "right-0" : "-right-64"} w-64 pt-3 px-4 bg-teal-700 overflow-y-scroll transition-all z-20`}>

                    {/* <!-- Nav Header --> */}
                    <div className="flex items-center justify-between pb-5 mb-6 border-b border-b-gray-100">
                        <div className="flex gap-x-3.5">
                            <Image
                                src={logo}
                                width={100}
                                height={100}
                                alt="University of Science and Culture"
                                loading='lazy'
                            // loader={imageLoader}
                            />
                        </div>
                        <div>
                            <svg className="w-5 h-5 text-white" onClick={handleNavbar}>
                                <use href="#x-mark"></use>
                            </svg>
                        </div>
                    </div>

                    {/* <!-- Nav Body --> */}
                    <div className="flex flex-col child:p-2 space-y-2 text-white">
                        {links.map((link, index) => {
                            return <div
                                key={index}
                                className={`${link.path === pathname && "bg-orange-200/20 text-orange-300 rounded-md"}`}
                            >
                                <div className="flex items-center justify-between">
                                    <Link href={link.path} className='flex items-center gap-x-2'>
                                        <svg className="w-5 h-5">
                                            <use href={`${link.icon}`}></use>
                                        </svg>
                                        {link.name}
                                    </Link>
                                    {
                                        link.name === "گروه های آموزشی" &&
                                        <svg className={`w-5 h-5 ${toggleSubmenu ? "rotate-0" : "rotate-180"} transition-all`} onClick={handleToggleSubmenu}>
                                            <use href="#chevron-down-mini"></use>
                                        </svg>
                                    }
                                </div>

                                {
                                    link.name === "گروه های آموزشی" &&
                                    <div className={`${toggleSubmenu ? "flex" : "hidden"} submenu child:justify-start`}>
                                        {submenu.map((sub, index) => {
                                            return <Link key={index} href={sub.path} className={sub.path === pathname ? "relative text-orange-300" : ""}>
                                                <span className={`inline-block w-2 h-1 ml-2 rounded-3xl ${sub.path === pathname ? "bg-orange-300" : "bg-white"}`}></span>
                                                {sub.name}
                                            </Link>
                                        })}
                                    </div>
                                }

                            </div>
                        })}
                    </div>

                    {/* <!-- Nav Footer --> */}
                    <div className="flex flex-col items-start gap-y-6 py-8 pr-2.5 mt-8 text-orange-300 border-t border-t-gray-100">

                        <a href="" className="inline-flex items-center gap-x-2.5">
                            <svg className="w-5 h-5 text-orange-300">
                                <use href="#shopping-cart"></use>
                            </svg>
                            سبد خرید
                        </a>

                        <a href="" className="inline-flex items-center gap-x-2.5">
                            <svg className="w-5 h-5 text-orange-300">
                                <use href="#magnifying-glass"></use>
                            </svg>
                            جست وجوی
                        </a>

                    </div>

                </div>

                {/* <!-- Theme --> */}
                <div className="inline-block select-none text-white" onClick={handleDarkMode}>
                    <svg className="w-6 h-6 inline-blok dark:hidden">
                        <use href="#moon"></use>
                    </svg>
                    <svg className="w-6 h-6 hidden dark:inline-block">
                        <use href="#sun"></use>
                    </svg>
                </div>

            </div >

            <ResizeListener navbar={navbar} />

            <Overlay navbar={navbar} handleNavbar={handleNavbar} />
        </>
    )
}
