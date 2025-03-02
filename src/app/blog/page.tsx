function Blog() {
  return (
    <div className="container mx-auto px-4 items-center justify-center flex mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Post 1 */}
        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            <img
              src="/img/عکس وبلاگ.jpg"
              className="w-full h-48 object-cover"
              alt=""
            />
          </div>
          <div className="post-content p-4">
            <div className="meta text-sm text-gray-500 mb-2">
              <span className="post-date">جمعه، 28شهریور403</span>
              <span className="post-author"> / ادمین</span>
            </div>
            <h3 className="post-title text-lg font-semibold text-gray-800 mb-2">
              درمان‌های پیشرفته دندانپزشکی
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              تجربه‌ای بدون درد با تکنولوژی‌های روز دنیا. سلامت دهان و دندان خود را به ما بسپارید.
            </p>
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
          </div>
        </div>

        {/* Post 2 */}
        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            <img
              src="/img/عکس وبلاگ.jpg"
              className="w-full h-48 object-cover"
              alt=""
            />
          </div>
          <div className="post-content p-4">
            <div className="meta text-sm text-gray-500 mb-2">
              <span className="post-date">جمعه، 24شهریور403</span>
              <span className="post-author"> / ادمین</span>
            </div>
            <h3 className="post-title text-lg font-semibold text-gray-800 mb-2">
              طراحی لبخند ایده‌آل
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              با خدمات حرفه‌ای زیبایی دندان، لبخندی درخشان و طبیعی داشته باشید. متخصصان ما همراه شما هستند.
            </p>
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
          </div>
        </div>

        {/* Post 3 */}
        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            <img
              src="/img/عکس وبلاگ.jpg"
              className="w-full h-48 object-cover"
              alt=""
            />
          </div>
          <div className="post-content p-4">
            <div className="meta text-sm text-gray-500 mb-2">
              <span className="post-date">جمعه، 12 آبان 403</span>
              <span className="post-author"> / ادمین</span>
            </div>
            <h3 className="post-title text-lg font-semibold text-gray-800 mb-2">
              ارتودنسی برای همه سنین
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              با روش‌های نوین ارتودنسی، زیبایی و تراز دندان‌های خود را تضمین کنید. مشاوره رایگان!
            </p>
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
          </div>
        </div>

        {/* Post 4 */}
        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            <img
              src="/img/عکس وبلاگ.jpg"
              className="w-full h-48 object-cover"
              alt=""
            />
          </div>
          <div className="post-content p-4">
            <div className="meta text-sm text-gray-500 mb-2">
              <span className="post-date">جمعه، 24شهریور403</span>
              <span className="post-author"> / ادمین</span>
            </div>
            <h3 className="post-title text-lg font-semibold text-gray-800 mb-2">
              خدمات اورژانسی دندانپزشکی
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              در مواقع اضطراری، کنار شما هستیم. ارائه خدمات فوری برای دردهای دندان و لثه.
            </p>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;