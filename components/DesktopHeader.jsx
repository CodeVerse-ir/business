import Image from 'next/image';
import logo from '../public/image/logo/logo-white.png';

export default function DesktopHeader({ darkMode, handleDarkMode }) {
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

                    {/* <!-- Menu --> */}
                    <ul
                        className="flex gap-x-5 xl:gap-x-7 h-full text-base xl:text-xl text-gray-300 tracking-tightest child:leading-[56px] child-hover:text-orange-300 child-hover:transition-colors">
                        <li className="text-orange-300">
                            <a href="">
                                صفحه اصلی
                            </a>
                        </li>

                        {/* <!-- Has Sub --> */}
                        <li className="relative group">
                            <a className="group-hover:text-orange-300 transition-colors" href="">
                                گروه های آموزشی
                            </a>

                            {/* <!-- Submenu --> */}
                            <div
                                className="absolute top-full w-56 p-6 flex flex-col opacity-0 invisible group-hover:opacity-100 group-hover:visible delay-75 transition-all space-y-4 text-white bg-teal-700 text-base tracking-normal border-t-[3px] border-t-orange-300 rounded-2xl shadow-normal child:inline child-hover:text-orange-300 child:transition-colors">
                                <a href="">
                                    هنر
                                </a>
                                <a href="">
                                    معماری و دکوراسیون داخلی
                                </a>
                                <a href="">
                                    آموزشهای تخصصی
                                </a>
                                <a href="">
                                    بورس و بازارهای مالی
                                </a>
                                <a href="">
                                    کامپیوتر
                                </a>
                                <a href="">
                                    زبان
                                </a>
                                <a href="">
                                    تربیت مربی
                                </a>
                                <a href="">
                                    آموزشهای آفلاین
                                </a>
                                <a href="">
                                    آموزش ضمن خدمت
                                </a>
                            </div>
                        </li>
                        <li>
                            <a href="">
                                کلینیک روانشناسی
                            </a>
                        </li>
                        <li>
                            <a href="">
                                درباره ما
                            </a>
                        </li>
                        <li>
                            <a href="">
                                همکاری با ما
                            </a>
                        </li>
                        <li>
                            <a href="">
                                سوالات متداول
                            </a>
                        </li>
                        <li>
                            <a href="">
                                ورود | ثبت نام
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* <!-- Cart & Toggle & Login Link --> */}
                <div className="flex items-center gap-x-4 lg:gap-x-5 xl:gap-x-8 text-orange-100">

                    {/* <!-- shopping-cart --> */}
                    <div className="cursor-pointer hover:text-orange-300 transition-colors">
                        <svg className="w-7 h-7 xl:w-8 xl:h-8">
                            <use href="#shopping-cart"></use>
                        </svg>
                    </div>

                    {/* <!-- Search --> */}
                    <div className="cursor-pointer hover:text-orange-300 transition-colors">
                        <svg className="w-7 h-7 xl:w-8 xl:h-8">
                            <use href="#magnifying-glass"></use>
                        </svg>
                    </div>

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
            </div>
        </header>
    )
}
