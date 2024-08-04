import Image from 'next/image';
import logo from '../public/image/logo/logo-white.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    {
        name: 'صفحه اصلی',
        path: '/',
    },
    {
        name: 'گروه های آموزشی',
        path: '/b',
    },
    {
        name: ' کلینیک روانشناسی',
        path: '/c',
    },
    {
        name: 'درباره ما',
        path: '/d',
    },
    {
        name: 'همکاری با ما',
        path: '/e',
    },
    {
        name: 'سوالات متداول',
        path: '/f',
    },
    {
        name: 'ورود | ثبت نام',
        path: '/g',
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

export default function DesktopHeader({ handleDarkMode }) {

    const pathname = usePathname();

    return (
        <header className="absolute top-0 right-0 left-0 z-50 hidden lg:flex items-center w-full h-25 px-5 lg:px-5 xl:px-7 py-5 mx-auto">
            <div className="flex items-center justify-between w-full ">
                {/* <!-- Logo & Menu --> */}
                <nav className="flex items-center gap-x-3 xl:gap-x-5">

                    {/* <!-- Logo --> */}
                    <Image
                        className='w-10 h-10 xl:w-14 xl:h-14 shrink-0'
                        src={logo}
                        width={40}
                        height={40}
                        alt="University of Science and Culture"
                        loading='lazy'
                    // loader={imageLoader}
                    />

                    <div className="flex gap-x-5 lg:gap-x-7 h-full text-base xl:text-xl text-gray-300 tracking-tightest child:leading-[56px]">
                        {links.map((link, index) => {
                            return (
                                <div key={index} className='relative group'>
                                    <Link
                                        href={link.path}
                                        className={`${link.path === pathname && "text-orange-300"} hover:text-orange-300 group-hover:text-orange-300 transition-colors`}
                                    >
                                        {link.name}
                                    </Link>
                                    {
                                        link.name === "گروه های آموزشی" &&
                                        <div className="absolute top-full flex flex-col items-start w-56 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible delay-75 transition-all space-y-4 text-white bg-teal-700 text-sm xl:text-base tracking-normal border-t-[3px] border-t-orange-300 rounded-2xl shadow-normal">
                                            {submenu.map((sub, index) => {
                                                return (
                                                    <Link
                                                        key={index}
                                                        href={sub.path}
                                                        className='hover:text-orange-300 transition-colors'
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    }
                                </div>
                            );
                        })}
                    </div>

                </nav>

                {/* <!-- Cart & Toggle & Login Link --> */}
                <div className="flex items-center gap-x-4 lg:gap-x-5 xl:gap-x-8 text-orange-100">

                    {/* <!-- shopping-cart --> */}
                    <Link href={""} className="cursor-pointer hover:text-orange-300 transition-colors">
                        <svg className="w-7 h-7 xl:w-8 xl:h-8">
                            <use href="#shopping-cart"></use>
                        </svg>
                    </Link>

                    {/* <!-- Search --> */}
                    <Link href={""} className="cursor-pointer hover:text-orange-300 transition-colors">
                        <svg className="w-7 h-7 xl:w-8 xl:h-8">
                            <use href="#magnifying-glass"></use>
                        </svg>
                    </Link>

                    {/* <!-- Divide Border --> */}
                    <span className="block w-px h-14 bg-white/20"></span>

                    {/* <!-- Theme Switch Btn --> */}
                    <div className="cursor-pointer hover:text-orange-300 transition-colors" onClick={handleDarkMode}>
                        <svg className="inline-block dark:hidden w-7 h-7 xl:w-8 xl:h-8">
                            <use href="#moon"></use>
                        </svg>
                        <svg className="hidden dark:inline-block w-7 h-7 xl:w-8 xl:h-8">
                            <use href="#sun"></use>
                        </svg>
                    </div>

                </div>
            </div >
        </header >
    )
}
