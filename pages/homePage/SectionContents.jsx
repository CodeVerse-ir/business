import Link from 'next/link';
import accounting from '/public/image/news/accounting.jpg';
import english from '/public/image/news/english.gif';
import freelance from '/public/image/news/freelance.jpg';
import freelancing from '/public/image/news/freelancing.jpg';

import Image from 'next/image';

const contents = [
    {
        image: english,
        title: "کارگاه‌های زبان خارجه",
        text: "برگزاری کارگاه‌های زبان خارجه",
        clock: "صبح 9:13",
        calendar: "1403/04/20",
        seen: 7
    },
    {
        image: accounting,
        title: "شروع ثبت نام دوره‌های حسابداری",
        text: "کلاس‌های ترم تابستان 1403",
        clock: "صبح 7:12",
        calendar: "1403/03/26",
        seen: 32
    },
    {
        image: freelance,
        title: "اولین همایش ملی آزادکاری (فریلنسری)",
        text: "با رويكرد توسعه اقتصاد ديجيتال و مشاغل آينده",
        clock: "صبح 7:09",
        calendar: "1403/03/26",
        seen: 40
    },
    {
        image: freelancing,
        title: "مدرسه فریلنسری",
        text: "با رویکرد توسعه اقتصاد دیجیتال و مشاغل آینده",
        clock: "ب.ظ. 14:03",
        calendar: "1403/03/24",
        seen: 19
    },
]

export default function SectionContents() {
    return (
        <section className="pt-10 md:pt-16 lg:pt-20">
            <div className="container">

                {/* <!-- title --> */}
                <div className="flex items-center justify-center pb-5 md:pb-10 lg:pb-16">
                    <h4 className="font-MorabbaMedium text-2xl md:text-3xl lg:text-4xl text-black dark:text-white">
                        آخرین مطالب
                    </h4>
                </div>

                {/* <!-- Section Body  --> */}
                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3.5 md:gap-5">

                    {contents.map((content, index) => {
                        return <Link key={index} href={""} className="group flex flex-col justify-between bg-white dark:bg-zinc-700 shadow-normal rounded-3xl">

                            <div className="w-full rounded-t-3xl overflow-hidden">
                                <Image
                                    className='w-full h-[200px] group-hover:scale-125 transition-all duration-1000'
                                    src={content.image}
                                    width="100%"
                                    height={200}
                                    alt={content.title}
                                    loading='lazy'
                                // loader={imageLoader}
                                />
                            </div>

                            {/* <!-- Cart Title --> */}
                            <h5
                                className="font-MorabbaBold px-4 md:px-5 my-4 md:my-5 text-sm lg:text-xl text-black dark:text-white line-clamp-1">
                                {content.title}
                            </h5>

                            {/* <!-- Cart Detail --> */}
                            <div
                                className="px-4 md:px-5 mt-1.5 md:mt-2.5 font-DanaMedium text-xs md:text-sm lg:text-base text-gray-700 dark:text-gray-300 line-clamp-2">
                                {content.text}
                            </div>

                            {/* <!-- Cart Footer --> */}
                            <div className="flex items-center justify-between p-4 md:p-5 mt-1.5 md:mt-2.5">

                                <div className="flex items-end justify-between w-full">
                                    <div className="space-y-2">
                                        <div
                                            className="flex items-center justify-start text-xs md:text-ms lg:text-base text-gray-700 dark:text-gray-300 gap-x-2">
                                            <svg className="w-4 h-4 md:w-5 md:h-5">
                                                <use href="#clock"></use>
                                            </svg>
                                            <span className="mt-1">
                                                {content.clock}
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center justify-start text-xs md:text-ms lg:text-base text-gray-700 dark:text-gray-300 gap-x-2">
                                            <svg className="w-4 h-4 md:w-5 md:h-5">
                                                <use href="#calendar"></use>
                                            </svg>
                                            <span className="mt-1">
                                                {content.calendar}
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center justify-center text-xs md:text-sm lg:text-base text-gray-700 dark:text-gray-300 gap-x-2">
                                        <span className="mt-1">
                                            {content.seen}
                                        </span>
                                        <svg className="w-4 h-4 md:w-5 md:h-5">
                                            <use href="#eye"></use>
                                        </svg>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    })}

                </div>

                {/* <!-- footer --> */}
                <div className="flex items-center justify-center mt-5 md:mt-10 lg:mt-16">
                    <a className="flex items-center justify-center w-32 h-8 md:w-40 md:h-10 text-sm md:text-base lg:text-lg bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors"
                        href="">
                        مشاهده همه مطالب
                    </a>
                </div>

            </div>
        </section>
    )
}
