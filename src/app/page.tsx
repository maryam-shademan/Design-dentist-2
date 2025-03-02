export default function Page() {
  return (
    <>
      <section className="container mx-auto mt-10 px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* تصویر دکتر - در موبایل اول نمایش داده می‌شود */}
          <div className="order-1 md:order-2 flex justify-center ">
            <img
              src="/img/دکتر گلشاه.png"
              alt="دکتر گلشاه"
              className="w-full max-w-lg rounded-lg"
            />
          </div>

          {/* متن و اطلاعات - در موبایل دوم نمایش داده می‌شود */}
          <div className="order-2 md:order-1 text-center md:text-right ">
            <h1 className="text-2xl md:text-3xl font-bold text-black mb-5 text-center items-center">
              مرکز دندانپزشکی دکتر گلشاه
            </h1>
            <div className="w-16 h-1 bg-blue-500 mx-auto md:max-w-7xl mb-6" />

            {/* توضیحات بیشتر */}
            <p className=" leading-relaxed px-4 sm:px-8 font-bold text-black">
              مرکز دندانپزشکی زیبایی دکتر گلشاه با بکارگیری جدیدترین متدهای طراحی لبخند و با استفاده از بروزترین تکنولوژی و تجهیزات ایمپلنت، کلیه خدمات تخصصی و درمانی دندانپزشکی را ارائه می‌کند.
            </p>

            {/* متن بیشتر اضافه شده */}
            <p className=" leading-relaxed px-4 sm:px-8 font-bold text-black">
              این مرکز با تیمی متخصص و حرفه‌ای در زمینه‌های مختلف دندانپزشکی، خدماتی مانند سفید کردن دندان، درمان ریشه، جراحی دندان، ایمپلنت و ارتودنسی را به مشتریان محترم خود ارائه می‌دهد. همچنین، محیطی آرام و مدرن برای راحتی و آسایش بیماران فراهم کرده‌ایم.
            </p>

            {/* خط آبی زیر متن */}


            {/* دکمه واتساپ */}
            <a
              href="https://wa.me/+989122039774"
              target="_blank"
              rel="nofollow"
              className="inline-flex items-center px-6 py-3 mt-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 438.7c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6z" />
              </svg>
              دریافت مشاوره رایگان در واتساپ
            </a>
          </div>
        </div>
      </section>



      <section className="text-center justify-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 my-8 px-12">
          خدمات مرکز دندانپزشکی زیبایی
          دکتر گلشاه
        </h2>
      </section>


      <section className="px-20 sm:px-32 md:px-16 lg:px-96">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 md:p-12 lg:p-16 ">
          {/* خدمات لمینت */}
          <div className="relative px-5 mt-6 pt-8 pb-6 flex bg-white  flex-col justify-start items-center border-3 border-gray-400 rounded-xl text-gray-300 w-full h-64 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-blue-600">
            <span className="absolute -top-12 p-4 border-3  border-gray-300 rounded-full bg-gradient-to-r from-blue-500 to-blue-600">
              <img
                src="https://noorbakhshdds.com/wp-content/uploads/2022/12/Group-47.png"
                alt="خدمات لمینت"
                className="w-20 h-20 rounded-full"
              />
            </span>

            <h1 className="text-2xl md:text-3xl font-bold text-black mb-2 mt-10">
              لمینت
            </h1>
            <p className="py-2  text-center text-sm text-black font-bold">
              لمینت دندان یک روش زیبایی است که با استفاده از پوشش‌های نازک سرامیکی یا کامپوزیتی به دندان‌ها فرم می‌دهد.
            </p>
          </div>

          {/* ایمپلنت دندانی */}
          <div className="relative px-5 mt-6 pt-8 pb-6 flex flex-col justify-start items-center border-3 bg-white border-gray-400 rounded-xl text-gray-300 w-full h-64 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-blue-600">
            <span className="absolute -top-12 p-4 border-3 border-gray-300 rounded-full bg-gradient-to-r from-blue-500 to-blue-600">
              <img
                src="https://noorbakhshdds.com/wp-content/uploads/2022/12/Group-48.png"
                alt="ایمپلنت دندانی"
                className="w-20 h-20 rounded-full"
              />
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-2 mt-10">
              ایمپلنت دندان
            </h3>
            <p className="py-2 text-center text-sm text-black font-bold">
              ایمپلنت دندانی یک جایگزین دائمی برای دندان‌های از دست رفته است.
            </p>
          </div>

          {/* درمان ریشه */}
          <div className="relative px-5 mt-6 pt-8 pb-6 flex flex-col justify-start items-center border-3 bg-white border-gray-400 rounded-xl text-gray-300 w-full h-64 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-blue-600">
            <span className="absolute -top-12 p-4 border-3 border-gray-300 rounded-full bg-gradient-to-r from-blue-500 to-blue-600">
              <img
                src="https://noorbakhshdds.com/wp-content/uploads/2022/12/Group-46.png"
                alt="درمان ریشه"
                className="w-20 h-20 rounded-full"
              />
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-2 mt-10">
              درمان ریشه
            </h3>
            <p className="py-2 text-center text-sm text-black font-bold">
              درمان ریشه برای دندان‌های آسیب دیده یا عفونی ضروری است.
            </p>
          </div>
        </div>
      </section>

      <section className="px-20 sm:px-28 md:px-16 lg:px-96">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 md:p-12 lg:pt-1">
          {/* خدمات لمینت */}
          <div className="relative px-5 mt-6 pt-8 pb-6 flex flex-col justify-start items-center border-3 bg-white border-gray-400 rounded-xl text-gray-300 w-full h-64 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-blue-600">
            <span className="absolute -top-12 p-4 border-3 border-gray-300 rounded-full bg-gradient-to-r from-blue-500 to-blue-600">
              <img
                src="https://noorbakhshdds.com/wp-content/uploads/2022/12/Group-51.png"
                alt="خدمات لمینت"
                className="w-20 h-20 rounded-full"
              />
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-2 mt-10">
              خدمات لمینت
            </h3>
            <p className="py-2 text-center text-sm text-black font-bold">
              لمینت دندان یک راه حل مناسب برای کسانی است که به دنبال بهبود زیبایی و ظاهر دندان‌های خود هستند.
            </p>
          </div>

          {/* ایمپلنت دندانی */}
          <div className="relative px-5 mt-6 pt-8 pb-6 flex flex-col justify-start items-center border-3 bg-white border-gray-400 rounded-xl text-gray-300 w-full h-64 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-blue-600">
            <span className="absolute -top-12 p-4 border-3 border-gray-300 rounded-full bg-gradient-to-r from-blue-500 to-blue-600">
              <img
                src="https://noorbakhshdds.com/wp-content/uploads/2022/12/Group-66-1.png"
                alt="ایمپلنت دندانی"
                className="w-20 h-20 rounded-full"
              />
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-2 mt-10">
              لمینت سرامیکی
            </h3>
            <p className="py-2 text-center text-sm text-black font-bold">
              ایمپلنت‌ها یک راهکار عالی برای بازیابی عملکرد دندان از دست رفته هستند.
            </p>
          </div>

          {/* درمان ریشه */}
          <div className="relative px-5 mt-6 pt-8 pb-6 flex flex-col justify-start items-center border-3 bg-white border-gray-400 rounded-xl text-gray-300 w-full h-64 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-blue-600">
            <span className="absolute -top-12 p-4 border-3 border-gray-300 rounded-full bg-gradient-to-r from-blue-500 to-blue-600">
              <img
                src="https://noorbakhshdds.com/wp-content/uploads/2022/12/Group-49.png"
                alt="درمان ریشه"
                className="w-20 h-20 rounded-full"
              />
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-2 mt-10">
              اورژانس دندانپزشکی
            </h3>
            <p className="py-2 text-center text-sm text-black font-bold">
              درمان ریشه برای دندان‌های آسیب دیده یا عفونی ضروری است.
            </p>
          </div>
        </div>
      </section>




      <section>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">درباره دکتر گلشاه</h2>
            <h2 className="text-2xl font-bold text-gray-800">About Us</h2>
            <div className="w-12 h-1 bg-gray-400 my-8 px-8" />
            <p className="md:text-xl font-bold text-black text-center px-8 md:text-right">
              شعار من در کارم اولیت درمان بر زیبایی و انتخاب بهترین گزینه درمانی مناسب
              برای هر فرد است. و سپس اقدام به درمان زیبایی اصولی هستم. من با گذراندن
              دوره های مختلف زیبایی، ایمپلنت، لیزر و غیره سعی بر آن داشتم تا انتهای
              درمان جهت دریافت بهترین نتیجه در زمینه های مختلف بیمارانم را همراهی کنم.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <img
              decoding="async"
              width={1000}  // تغییر اندازه عرض تصویر
              height={800}
              src="/img/دکتر ودوستاش.png"
              className="w-full md:w-[1200px] h-auto"  // افزایش عرض در اندازه‌های بزرگتر صفحه
              alt="درباره دکتر نوربخش"
            />
          </div>
        </div>
        <section className="text-center justify-center px-10 sm:px-28 md:px-16 lg:px-96 py-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-8">
            نمونه کار
          </h2>
          <div className="relative">
            {/* تصویر پس‌زمینه */}
            <img
              src="https://noorbakhshdds.com/wp-content/uploads/2022/12/Group-67-min.webp"
              alt="Description"
              className="w-full max-w-full h-auto rounded-lg shadow-lg"
            />

            {/* تب‌ها */}
            <div className="tabs absolute top-8 left-1/2 transform -translate-x-1/2 flex space-x-4 sm:space-x-8 z-50">
              <button className="tab px-4 py-2 lg:px-6 lg:py-5 lg:text-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md shadow-md hover:bg-gray-100 focus:outline-none transition duration-300">
                همه
              </button>
              <button className="tab px-4 py-2 lg:px-6 lg:py-5 lg:text-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md shadow-md hover:bg-gray-100 focus:outline-none transition duration-300">
                فشن
              </button>
              <button className="tab px-4 py-2 lg:px-6 lg:py-5 lg:text-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md shadow-md hover:bg-gray-100 focus:outline-none transition duration-300">
                قبل
              </button>
              <button className="tab px-4 py-2 lg:px-6 lg:py-5 lg:text-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md shadow-md hover:bg-gray-100 focus:outline-none transition duration-300">
                بعد
              </button>
            </div>

            {/* گالری عکس‌ها */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 -mt-4 sm:-mt-12 md:-mt-12 lg:-mt-40 px-4 sm:px-8">
              {[...Array(9)].map((_, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    className="h-48 sm:h-56 md:h-64 w-full object-cover transform hover:scale-105 transition-transform duration-300"
                    src="/img/دندون.jpg" // مسیر ثابت برای همه تصاویر
                    alt={`Gallery Image ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        {/*ویذیو*/}
        <section className="mt-8 bg-gray-300 px-4 md:px-20">
          {/* بخش اول: ویدیو سمت راست، متن سمت چپ */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
            {/* متن */}
            <div className="w-full md:w-1/2 text-right">
              <h2 className="text-4xl font-bold mb-4 text-black">
                انتخاب من بین ونیر کامپوزیت و لمینت سرامیکی
              </h2>
              <div className="text-lg text-black">
                در مقایسه بین بهترین روش های طراحی لبخند
              </div>
            </div>

            {/* ویدیو */}
            <div className="w-full md:w-1/2  px-10 sm:px-28 md:px-16 lg:px-72">
              <div className="e-hosted-video elementor-wrapper elementor-open-inline">
                <video
                  className="elementor-video w-full h-auto max-w-xl mx-auto"
                  src="https://noorbakhshdds.com/wp-content/uploads/2022/11/انتخاب-من-بین-کامپوزیت-یا-ایمپلنت.mp4"
                  controls
                />
                <div
                  className="elementor-custom-embed-image-overlay"
                  style={{
                    backgroundImage:
                      'url("https://noorbakhshdds.com/wp-content/uploads/2024/07/6666666654.jpg")',
                  }}
                >
                  <div
                    className="elementor-custom-embed-play"
                    role="button"
                    aria-label="پخش ویدیو"
                    tabIndex={0}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 bg-gray-300 px-4 md:px-64">
          {/* بخش دوم: ویدیو سمت چپ، متن سمت راست */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
            {/* ویدیو */}
            <div className="w-full md:w-1/2 px-10 sm:px-28 md:px-16 lg:px-48">
              <div className="e-hosted-video elementor-wrapper elementor-open-inline">
                <video
                  className="elementor-video w-full h-auto max-w-xl mx-auto"
                  src="https://noorbakhshdds.com/wp-content/uploads/2022/11/انتخاب-من-بین-کامپوزیت-یا-ایمپلنت.mp4"
                  controls
                />
                <div
                  className="elementor-custom-embed-image-overlay"
                  style={{
                    backgroundImage:
                      'url("https://noorbakhshdds.com/wp-content/uploads/2024/07/6666666654.jpg")',
                  }}
                >
                  <div
                    className="elementor-custom-embed-play"
                    role="button"
                    aria-label="پخش ویدیو"
                    tabIndex={0}
                  ></div>
                </div>
              </div>
            </div>

            {/* متن */}
            <div className="w-full md:w-1/2 text-right">
              <h2 className="text-4xl font-bold mb-4 text-black">
                انتخاب من بین ونیر کامپوزیت و لمینت سرامیکی
              </h2>
              <div className="text-lg text-black">
                در مقایسه بین بهترین روش های طراحی لبخند
              </div>
            </div>
          </div>
        </section>





        {/*وبلاگ*/}

      </section>

      <section id="recent-posts" className="py-12 ">

        <div className="container mx-auto text-center mb-14" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800">پست‌های اخیر وبلاگ</h2>
          <>

            <button
              className=" mt-2 text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
              type="button"
            >
              <div className="bg-blue-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  height="25px"
                  width="25px"
                >
                  <path
                    d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                    fill="#000000"
                  />
                  <path
                    d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                    fill="#000000"
                  />
                </svg>
              </div>
              <p className="translate-x-2 mt-4">دیدن مطالب بیشتر ما</p>
            </button>
          </>

        </div>
        {/* End Section Title */}
        <div className="container mx-auto px-4 items-center justify-center flex ">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12  sm:gap-6 md:gap-16 lg:gap-48">
            {/* Post 1 */}
            <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img
                  src="/img/عکس وبلاگ.jpg"
                  className="w-full h-48 object-cover"
                  alt=""
                /></div>
              <div className="post-content p-4">
                <div className="meta text-sm text-gray-500 mb-2">
                  <span className="post-date">جمعه، 28شهریور403</span>
                  <span className="post-author"> / ادمین</span>
                </div>
                <h3 className="post-title text-lg font-semibold text-gray-800 mb-2">
                  درمان‌های پیشرفته دندانپزشکی
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  تجربه‌ای بدون درد با تکنولوژی‌های روز دنیا. سلامت دهان و دندان خود را به ما بسپارید.             </p>
                <>
                  <div className="items-center justify-center flex">
                    <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-cyan-500 rounded-md group">
                      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-600 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                      </span>
                      <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-600 rounded group-hover:-ml-4 group-hover:-mb-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-cyan-600 rounded-md group-hover:translate-x-0" />
                      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                        مطالعه بیشتر
                      </span>
                    </button>
                  </div>
                </>

              </div>
            </div>

            <div className="relative flex mt-4 w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img
                  src="/img/عکس وبلاگ.jpg"
                  className="w-full h-48 object-cover"
                  alt=""
                /></div>
              <div className="post-content p-4">
                <div className="meta text-sm text-gray-500 mb-2">
                  <span className="post-date">جمعه، 24شهریور403</span>
                  <span className="post-author"> / ادمین</span>
                </div>
                <h3 className="post-title text-lg font-semibold text-gray-800 mb-2">
                  طراحی لبخند ایده‌آل
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  با خدمات حرفه‌ای زیبایی دندان، لبخندی درخشان و طبیعی داشته باشید. متخصصان ما همراه شما هستند.                </p>
                <>
                  <div className="items-center justify-center flex">
                    <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-cyan-500 rounded-md group">
                      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-600 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                      </span>
                      <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-600 rounded group-hover:-ml-4 group-hover:-mb-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-cyan-600 rounded-md group-hover:translate-x-0" />
                      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                        مطالعه بیشتر
                      </span>
                    </button>
                  </div>
                </>

              </div>
            </div>
            <div className="relative flex w-80 mt-4 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img
                  src="/img/عکس وبلاگ.jpg"
                  className="w-full h-48 object-cover"
                  alt=""
                /></div>
              <div className="post-content p-4">
                <div className="meta text-sm text-gray-500 mb-2">
                  <span className="post-date">جمعه، 12 آبان 403</span>
                  <span className="post-author"> / ادمین</span>
                </div>
                <h3 className="post-title text-lg font-semibold text-gray-800 mb-2">
                  ارتودنسی برای همه سنین
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  با روش‌های نوین ارتودنسی، زیبایی و تراز دندان‌های خود را تضمین کنید. مشاوره رایگان!              </p>
                <>
                  <div className="items-center justify-center flex">
                    <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-cyan-500 rounded-md group">
                      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-600 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                      </span>
                      <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-600 rounded group-hover:-ml-4 group-hover:-mb-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-cyan-600 rounded-md group-hover:translate-x-0" />
                      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                        مطالعه بیشتر
                      </span>
                    </button>
                  </div>
                </>

              </div>
            </div>
            <div className="relative flex w-80 mt-4 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img
                  src="/img/عکس وبلاگ.jpg"
                  className="w-full h-48 object-cover"
                  alt=""
                /></div>
              <div className="post-content p-4">
                <div className="meta text-sm text-gray-500 mb-2">
                  <span className="post-date">جمعه، 24شهریور403</span>
                  <span className="post-author"> / ادمین</span>
                </div>
                <h3 className="post-title text-lg font-semibold text-gray-800 mb-2">
                  خدمات اورژانسی دندانپزشکی
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  در مواقع اضطراری، کنار شما هستیم. ارائه خدمات فوری برای دردهای دندان و لثه.           </p>
                <>
                  <div className="items-center justify-center flex">
                    <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-cyan-500 rounded-md group">
                      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-600 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                      </span>
                      <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-600 rounded group-hover:-ml-4 group-hover:-mb-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-cyan-600 rounded-md group-hover:translate-x-0" />
                      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                        مطالعه بیشتر
                      </span>
                    </button>
                  </div>
                </>

              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
