import university from '/public/image/background/university.png';

import Image from 'next/image';

export default function SectionAbout() {
    return (
        <section className="mt-10 md:mt-16 lg:mt-20 bg-orange-300">
            <div className="container">

                <div
                    className="flex flex-col md:flex-row items-center justify-center w-full h-full gap-x-10 lg:gap-x-10 p-10 lg:py-16">

                    <div className="flex flex-col items-start justify-center w-[300px] md:w-[400px] lg:w-[600px] xl:w-[700px]">
                        <h4 className="font-DanaBold text-xl md:text-2xl lg:text-3xl mb-10">
                            دانشگاه علم و فرهنگ؛ دانشگاه ارزش آفرین
                        </h4>
                        <p className="font-DanaMedium text-sm md:text-base lg:text-xl mb-5">
                            این دانشگاه با قدمتی سی ساله یکی از دانشگاه‌های دارای مجوز رسمی وزارت علوم، تحقیقات و فناوری است که به
                            لحاظ ساختاری وابسته به جهاد دانشگاهی است. از این حیث اعتبار دانشگاه علم و فرهنگ مضاعف است؛ از یک سو به
                            عنوان یکی از بهترین دانشگاه‌های غیردولتی کشور تحت نظارت عالیه وزارت علوم، تحقیقات و فناوری است و از سوی
                            دیگر به یکی از نهادهای موفق و معتبر آموزشی و پژوهشی کشور (جهاد دانشگاهی) وابستگی سازمانی دارد.
                        </p>
                        <div className="w-full flex items-center justify-center">
                            <span
                                className="flex items-center justify-center py-3 px-5 rounded-lg text-sm md:text-base lg:text-lg bg-teal-200 hover:bg-teal-500 transition-colors cursor-pointer">
                                مطالب بیشتر
                            </span>
                        </div>
                    </div>

                    <div className="order-first md:order-last mb-10 md:mb-0">
                        <div className="relative size-64 lg:size-80 xl:size-96 bg-teal-200 rounded-4xl rotate-2">
                            <div
                                className="absolute top-0 right-0 left-0 w-full h-full bg-teal-500 rounded-4xl rotate-12 overflow-hidden">
                                <Image className='absolute -bottom-8 left-0 right-0 object-cover -rotate-12'
                                    src={university}
                                    width="100%"
                                    height="100%"
                                    alt="University of Science and Culture"
                                    loading='lazy'
                                // loader={imageLoader}
                                />
                            </div>
                            <div
                                className="absolute top-0 md:-left-5 left-0 py-2 px-5 text-xs md:text-sm lg:text-base rounded-4xl bg-teal-600">
                                رشته تحصیلی : 94+
                            </div>
                            <div
                                className="absolute top-10 md:top-12 -left-10 md:left-10 py-2 px-5 text-xs md:text-sm lg:text-base rounded-4xl bg-teal-600">
                                دانش آموخته : 23000+
                            </div>
                            <div
                                className="absolute top-20 md:top-24 -left-10 md:-left-5 py-2 px-5 text-xs md:text-sm lg:text-base rounded-4xl bg-teal-600">
                                دانشجو : 8875+
                            </div>
                            <div
                                className="absolute top-30 md:top-44 lg:top-40 -left-12 md:-left-10 lg:-left-10 py-2 px-5 text-xs md:text-sm lg:text-base rounded-4xl bg-teal-600">
                                هیات علمی : 126+
                            </div>

                            <div
                                className="absolute top-8 md:top-0 xl:top-14 -right-7 md:-right-16 py-2 px-5 text-xs md:text-sm lg:text-base rounded-4xl bg-teal-600">
                                دانشجو بین الملل : 103+
                            </div>
                            <div
                                className="absolute top-20 md:top-24 xl:top-30 -right-10 md:-right-14 lg:-right-10 xl:-right-14 py-2 px-5 text-xs md:text-sm lg:text-base rounded-4xl bg-teal-600">
                                مقالات بین الملل : 2115+
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}
