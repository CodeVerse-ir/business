import Image from 'next/image';
import logo from '../public/image/logo/logo-img.png';

export default function MobileHeader() {
    return (
        <div className="flex lg:hidden items-center justify-between h-16 px-4 bg-teal-700">

            {/* <!-- Nav Icon --> */}
            <div className="nav-icon">
                <svg className="w-6 h-6 text-white">
                    <use href="#bars-3"></use>
                </svg>
            </div>

            {/* <!-- Nav --> */}
            <div className="nav fixed top-0 bottom-0 -right-64 w-64 pt-3 px-4 bg-teal-700 overflow-y-scroll transition-all z-20">

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
                    <div className="nav-close-btn">
                        <svg className="w-5 h-5 text-white">
                            <use href="#x-mark"></use>
                        </svg>
                    </div>
                </div>

                <div className="flex items-center h-10 mb-4 pr-2.5 bg-orange-200/20 text-orange-300 rounded-md">
                    <a href="" className="flex items-center gap-x-2">
                        <svg className="w-5 h-5">
                            <use href="#home"></use>
                        </svg>
                        صفحه اصلی
                    </a>
                </div>

                {/* <!-- Nav Body --> */}
                <ul className="child:pr-2.5 space-y-6 text-white">

                    {/* <!-- Has Sub --> */}
                    <li className="">
                        <div className="flex items-center justify-between">
                            <a className="flex items-center gap-x-2" href="">
                                <svg className="w-5 h-5">
                                    <use href="#academic-cap"></use>
                                </svg>
                                گروه های آموزشی
                            </a>
                            <span className="submenu-open-btn transition-all">
                                <svg className="w-4 h-4 rotate-180">
                                    <use href="#chevron-down-mini"></use>
                                </svg>
                            </span>
                        </div>

                        {/* <!-- Submenu --> */}
                        <div className="submenu child:justify-start">
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
                            <a href="" className="submenu__item--active">
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
                        <a href="" className="flex items-center gap-x-2">
                            <svg className="w-5 h-5">
                                <use href="#building-library"></use>
                            </svg>
                            کلینیک روانشناسی
                        </a>
                    </li>
                    <li>
                        <a href="" className="flex items-center gap-x-2">
                            <svg className="w-5 h-5">
                                <use href="#document-text"></use>
                            </svg>
                            درباره ما
                        </a>
                    </li>
                    <li>
                        <a href="" className="flex items-center gap-x-2">
                            <svg className="w-5 h-5">
                                <use href="#user-group"></use>
                            </svg>
                            همکاری با ما
                        </a>
                    </li>
                    <li>
                        <a href="" className="flex items-center gap-x-2">
                            <svg className="w-5 h-5">
                                <use href="#chat-bubble"></use>
                            </svg>
                            سوالات متداول
                        </a>
                    </li>
                    <li>
                        <a href="" className="flex items-center gap-x-2">
                            <svg className="w-5 h-5">
                                <use href="#arrow-left-on-rectangle"></use>
                            </svg>
                            ورود | ثبت نام
                        </a>
                    </li>
                </ul>

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
            <div className="inline-block toggle-theme select-none text-white">
                <svg className="w-6 h-6 inline-blok dark:hidden">
                    <use href="#moon"></use>
                </svg>
                <svg className="w-6 h-6 hidden dark:inline-block">
                    <use href="#sun"></use>
                </svg>
            </div>

        </div>
    )
}
