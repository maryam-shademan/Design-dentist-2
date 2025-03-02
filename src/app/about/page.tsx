function about() {
  return (

    <section>
    <section className="py-24 relative">
  <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
    <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
      <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
        <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
          <img
            className=" rounded-xl object-cover"
            src="/img/عکس3.jpg"
            alt="about Us image"
          />
        </div>
        <img
          className="sm:ml-0 ml-auto rounded-xl object-cover"
          src="/img/عکس 1.jpg"
          alt="about Us image"
        />
      </div>
      <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
        <div className="w-full flex-col justify-center items-start gap-8 flex">
          <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
            <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
            درباه دکتر گلشاه
            </h2>
            <p className="text-gray-500  text-base font-bold leading-relaxed lg:text-start text-center">
            کلینیک دندانپزشکی دکتر گلشاه یکی از مجهزترین کلینیک های دندانپزشکی است که کلیه خدمات عمومی و تخصصی دندانپزشکی را با بهره گیری از پیشرفته ترین تجهیزات و بالاترین استانداردهای روز دنیا در اختیار مراجعین قرار می دهد.

کلینیک دندانپزشکی دکتر گلشاه ارائه کننده کلیه خدمات عمومی و تخصصی دندانپزشکی شامل: ترمیمی و زیبایی، درمان ریشه، جراحی لثه، پروتز، ایمپلنت و ارتودنسی با جدیدترین تکنولوژی و متد روز دنیا می باشد.

همچنین در این مرکز تمامی اقدامات بهداشتی طبق استاندارد های بین المللی با بهترین دستگاه های استریلیزاسیون و مواد ضدعفونی انجام می گیرد. هدف ما ایجاد لبخندی زیبا و جاودانه برای شما در محیطی دوستانه و گرم می باشد.
            </p>
          </div>
          <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
            <div className="flex-col justify-start items-start inline-flex">
              <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
               12+
              </h3>
              <h6 className="text-gray-500 text-base font-bold leading-relaxed">
               خدمات دکتر گلشاه
              </h6>
            </div>
            <div className="flex-col justify-start items-start inline-flex">
              <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                125+
              </h4>
              <h6 className="text-gray-500 text-base font-bold leading-relaxed">
               رزروی ها
              </h6>
            </div>
            <div className="flex-col justify-start items-start inline-flex">
              <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                1000+
              </h4>
              <h6 className="text-gray-500 text-base font-bold leading-relaxed">
                مشتری های موفق
              </h6>
            </div>
          </div>
        </div>
        <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
          
        </button>
      </div>
    </div>
  </div>
  <section className="relative  overflow-hidden mt-10">
  {/* Blue Crescent Shape (Halo) */}
  <div className="absolute top-0 left-0 w-full transform -translate-y-1/2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 200"
      preserveAspectRatio="none"
      className="w-full h-32"
    >
      <path
        className="fill-current text-blue-500"
        d="M0,0c0,0,250,200,500,200s500-200,500-200v200H0V0z"
      />
    </svg>
  </div>
  {/* Content */}
  <div className="container mx-auto px-4 mt-20 relative z-10">
    <div className="flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold mb-4 text-black">نیاز به مراجعه دارید!</h1>
      <div className="w-36 h-1 bg-blue-500 font-bold mb-4" />
      <p className="text-gray-600 mb-6 font-bold">
      مرکز دندانپزشکی دکتر گلشاه مفتخر به، بکار گیری جدیدترین متدهای طراحی لبخند و زیبایی دندان در کنار خدمات درمانی با همکاری تیمی متخصص، اساتید دانشگاه، استفاده از تجهیزات و تکنولوژی روز برای ارائه خدمات در بالاترین استاندارد جهانی است.

      </p>
    
      <p className="text-gray-600 mb-6 font-bold">
      جهت دریافت وقت مشاوره رایگان و اطلاع از طرح درمان خدمات تخصصی دندانپزشکی جهت دریافت دریافت خدمات اورژانسی در صورتی که درد شدید دارید جهت دریافت وقت ویزیت، تماس بگیرید
      </p>
      <a
        href="tel:+989120399715"
        className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
      >
        تماس با ما: 09120399715
      </a>
    </div>
  </div>
</section>

</section>


    </section>
  );
}

export default about;