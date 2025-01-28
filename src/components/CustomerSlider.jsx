import { useState, useRef } from "react";

const CustomerSlider = ({ customers }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goToPrevious = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? customers.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === customers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current - touchEndX.current > 50) {
      goToNext();
    } else if (touchEndX.current - touchStartX.current > 50) {
      goToPrevious();
    }
  };

  return (
    <div onTouchStart={handleTouchStart}
    onTouchEnd={handleTouchEnd} className="max-w-[280px] md:max-w-[400px] tab:max-w-[960px] lg:max-w-[780px] xl:max-w-[960px] pt-[40px] pb-[80px] md:pb-[50px] relative mx-auto lg:pb-0 xl:pb-0">
      <button
        disabled={currentSlide === 0}
        onClick={goToPrevious}
        className="bottom-[-80px] absolute tab:bottom-0 md:bottom-[-20px] sm:bottom-0 leading-[0px] left-[50%] w-[56px] h-[56px] rounded-[12px] bg-[#F7F7F7] lg:bottom-[50%] xl:bottom-[50%] cursor-pointer disabled:cursor-not-allowed group translate-x-[-62px] lg:translate-x-[-50%] lg:translate-y-[50%] lg:left-[-60px] xl:translate-x-[-50%] xl:translate-y-[50%] xl:left-[-60px]"
      >
        <img
          alt="previous"
          className={`mx-auto ${
            currentSlide === 0
              ? "opacity-25"
              : "opacity-75 group-hover:opacity-100"
          }`}
          src="/icons/prev-arrow-icon-black.svg"
        />
      </button>

      <div ref={sliderRef} className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {customers.map((res, index) => (
            <div key={res.name} className="flex-shrink-0 w-full">
              <div className="flex flex-col tab:flex-row lg:flex-row xl:flex-row overflow-hidden rounded-[18px] relative group">
                <div className="max-h-[400px] size-[280px] tab:size-[295px] md:size-[400px] lg:size-[320px] lg:basis-[47%] lg:max-w-[320px] xl:size-[320px] xl:basis-[47%] xl:max-w-[320px] relative leading-[0px] overflow-hidden">
                  <img
                    alt={res.name}
                    className="object-cover align-middle w-full h-full"
                    src={res.image}
                  />
                </div>

                <div className="max-w-[640px] xl:max-w-full bg-[#f7f7f7] flex justify-between flex-col grow">
                  <div className="tab:min-h-[135px] tab:max-h-[135px] md:overflow-scroll p-[20px_20px_30px_20px] tab:px-[40px] lg:px-[40px] xl:px-[40px] lg:py-0 xl:py-0 tab:py-0 tab:mt-[40px] lg:mt-[40px] xl:mt-[40px] scroll_hide">
                    <h4 className="text-[16px] tab:text-left lg:text-left xl:text-left  md:text-[20px] tab:text-[24px] lg:text-[24px] xl:text-[24px] md:leading-[32px] tab:leading-[32px] lg:leading-[32px] xl:leading-[32px] leading-[24px] text-center text-[#020a19] font-bold antialiased">
                      {res.title}
                    </h4>
                  </div>

                  <div className="px-[20px] py-[12px] tab:px-[40px] lg:px-[40px] xl:px-[40px] md:py-0 border-t-[1px] border-white/30 flex flex-col justify-center items-center min-h-[73px] md:min-h-[120px] tab:min-h-[120px] lg:min-h-[120px] xl:min-h-[120px] bg-[#020a19]/5">
                    <p className="text-center tab:text-left lg:text-left xl:text-left w-full mx-auto text-[14px] leading-[11px] md:text-[20px] tab:text-[20px] lg:text-[20px] xl:text-[20px] tab:leading-[33px] lg:leading-[33px] xl:leading-[33px] pb-[5px] md:pb-0 text-[#020a19] font-bold ">
                      {res.name}
                    </p>

                    <small className="text-center tab:text-left lg:text-left xl:text-left w-full mx-auto tab:mr-auto tab:ml-[unset] lg:mr-auto lg:ml-[unset] xl:mr-auto xl:ml-[unset] text-[12px] leading-[16px] tab:text-[14px] lg:text-[14px] xl:text-[14px] tab:leading-[18px] text-[#020a19] font-normal max-w-[294px] opacity-70 ">
                      {res.designation}
                    </small>

                    {res.company && (
                      <small className="text-center tab:text-left lg:text-left xl:text-left mx-auto tab:mr-auto tab:ml-[unset] lg:mr-auto lg:ml-[unset] xl:mr-auto xl:ml-[unset] text-[12px] leading-[16px] tab:text-[14px] lg:text-[14px] xl:text-[14px] tab:leading-[18px] text-[#020a19] font-normal max-w-[294px] opacity-70 ">
                        {res.company}
                      </small>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        disabled={currentSlide === customers.length - 1}
        onClick={goToNext}
        className="cursor-pointer tab:bottom-0 md:bottom-[-20px] sm:bottom-0 disabled:cursor-not-allowed bottom-[-80px] absolute leading-[0px] left-[50%] w-[56px] h-[56px] rounded-[12px] bg-[#F7F7F7] lg:bottom-[50%] xl:bottom-[50%] group translate-x-[8px] lg:translate-x-[50%] lg:translate-y-[50%] lg:left-[unset] lg:right-[-60px] xl:translate-x-[50%] xl:translate-y-[50%] xl:left-[unset] xl:right-[-60px]"
      >
        <img
          alt="next"
          className={`mx-auto ${
            currentSlide === customers.length - 1
              ? "opacity-25"
              : "opacity-75 group-hover:opacity-100"
          }`}
          src="/icons/next-arrow-icon-black.svg"
        />
      </button>
    </div>
  );
};

export default CustomerSlider;
