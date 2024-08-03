export default function SectionHome() {
  return (
    <section
      className="home relative h-[200px] xs:h-auto xs:aspect-[2/1] md:aspect-auto bg-home-mobile md:bg-home-desktop bg-no-repeat bg-cover bg-center">
      <div className="absolute w-full h-full top-0 right-0 left-0 bg-black/60"></div>
      <div className="container relative overflow-y-hidden h-full md:min-h-screen flex items-center justify-start">

        <div className="text-white">
          <h2 className="font-MorabbaBold text-2xl md:text-6xl/[62px] mb-0.5 md:mb-2">
            بنیاد کسب و کار
          </h2>
          <span className="font-MorabbaLight text-xl md:text-5xl/[64px]">
            دانشگاه علم و فرهنگ
          </span>
          <span className="block w-[100px] h-px bg-orange-300 my-3 md:my-8"></span>
          <p className="max-w-[201px] md:max-w-[460px] text-xs md:text-2xl">
            مرکز آموزش‌های تخصصی دانشگاه علم و فرهنگ زیر نظر بنیاد توسعه کسب و کار با دغدغه ایجاد اشتغال،
            کارآفرینی،
            ارتقای مهارت‌های منابع انسانی و با هدف تربیت نيروي انساني متخصص و مهارتی فعالیت می‌کند.
          </p>
        </div>
      </div>
    </section>
  )
}
