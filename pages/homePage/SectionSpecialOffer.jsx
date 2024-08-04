import art from '/public/image/proposal/art.png';

import Image from "next/image";

export default function SectionSpecialOffer() {
    return (
        <section className="pt-10 md:pt-16 lg:pt-20">
            <div className="container">

                <div className='flex flex-col items-center justify-center'>

                    <div className='flex items-start justify-center'>

                        <div className="relative flex items-center justify-center size-30 md:size-[200px] xl:size-[300px] bg-orange-200 rounded-full shadow-2xl">
                            <div className='absolute top-10 right-0 left-0 mx-auto size-5 bg-gray-700 rounded-full'></div>
                            <Image
                                src={art}
                                width={300}
                                height={300}
                                alt="Picture of the author"
                            />
                        </div>


                        <div className='w-[150px] sm:w-[300px] md:w-[400px] h-[100px] xl:w-[450px] xl:h-[200px] mt-[60px] md:mt-[130px] lg:mt-[150px] border-t-2 border-l-2  border-dashed border-black dark:border-white rounded-tl-lg'></div>

                    </div>

                    <div className='w-full flex items-start justify-end sm:justify-between gap-x-20'>

                        <div className='relative hidden sm:flex items-center justify-center size-30 md:size-40 xl:size-56 font-MorabbaBold text-sm md:text-base lg:text-xl xl:text-2xl bg-orange-300 rounded-full shadow-lg'>
                            <div className='absolute top-2.5 right-2.5 flex items-center justify-center size-25 md:size-36 xl:size-50 border-2 border-dashed border-black dark:border-white rounded-lg -z-10'></div>
                            <div className='absolute -bottom-14 mx-auto sm:top-10 sm:right-25 md:top-14 md:right-36 xl:top-16 xl:right-52 flex items-center justify-center w-40 h-10 md:w-60 md:h-12 xl:w-72 xl:h-20 text-white bg-teal-700 rounded-l-full -z-10'>
                                نقاشی و سیاه قلم
                            </div>
                            پیشنهاد ویژه
                        </div>

                        <div className='relative flex flex-col items-start justify-center w-[250px] h-[200px] lg:w-[400px] lg:h-[150px] xl:w-[450px] xl:h-[150px] p-5 text-black dark:text-white bg-white dark:bg-zinc-700 border-2 border-dashed border-black dark:border-white rounded-lg shadow-2xl'>
                            <div className='absolute hidden sm:inline-block -top-10 -right-10 md:-top-14 md:-right-14 xl:-top-20 xl:-right-20 size-20 md:size-30 xl:size-40 bg-orange-400 rounded-full -z-10'></div>
                            <h4 className='font-MorabbaBold text-sm md:text-base xl:text-lg mb-5'>
                                آموزش تخصصی نقاشی و سیاه قلم با استاد سعید مرادی
                            </h4>
                            <div className='text-xs md:text-sm lg:text-base'>
                                تکنیک‌های سیاه‌قلم: آموزش تکنیک‌های مختلف پردازش با سیاه‌قلم و نحوه ایجاد سایه و نور.
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}
