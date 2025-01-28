import { Fragment, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VerticalTab = ({ tab }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: (currentSlide, nextSlide) => {
      setActiveIndex(nextSlide);
    },
    afterChange: (currentSlide) => {
      setActiveIndex(currentSlide);
    },
  };

  const handleTabClick = (index) => {
    setActiveIndex(index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <section className="py-[60px] lg:py-[80px] bg-[#f7f7f7] relative">
      <div id="platforms" className="main_width">
        <h2 className="antialiased text-[32px] tab:text-[40px] lg:text-[40px] xl:text-[40px] leading-[40px] md:leading-[1.3] text-center font-bold text-[#020a19] pb-[10px] tab:pb-[20px] lg:pb-[20px] xl:pb-[20px] max-w-[800px] mx-auto">
          {tab.title}
        </h2>

        <p className="hidden tab:block lg:block xl:block text-[#333] text-[16px] tab:text-[18px] lg:text-[18px] xl:text-[18px] leading-[28px] text-center font-regular ">
          {tab.sub_title}
        </p>

        <div className="tab:pt-[50px] lg:pt-[50px] xl:pt-[50px] flex flex-col tab:flex-row lg:flex-row xl:flex-row items-start justify-between">
          <div className="slider-container  tab:!block lg:!block xl:!block  hidden tab:w-[46%] lg:w-[46%] xl:w-[46%] tab:max-[600px] max-h-[565px]">
            <Slider {...settings} className="h-[565px]" ref={sliderRef}>
              {tab.data &&
                tab.data.length > 0 &&
                tab.data.map((item, i) => (
                  <div
                    key={`${item.title}_${i}`}
                    className="rounded-[20px] overflow-hidden transition-all duration-300 ease-out inline-block opacity-100  outline-none"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className=" max-h-[565px] relative"
                    />
                  </div>
                ))}
            </Slider>
          </div>

          <div className="shrink-0 w-full relative tab:w-[54%] tab:pl-10 tab:max-w-[700px] lg:w-[54%] lg:pl-10 lg:max-w-[700px] xl:w-[54%] xl:pl-10 xl:max-w-[700px]">
            {tab.data &&
              tab.data.length > 0 &&
              tab.data.map((item, i) =>  (
                  <Fragment key={item + i}>
                    {activeIndex === i && (
                      <div className="tab:hidden lg:hidden xl:hidden w-[88%] mx-auto max-w-[340px] my-5">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-[340px] max-h-[320px]"
                        />
                      </div>
                    )}

                    <div
                      className={`relative group border-[#d7d7d7] ${
                        activeIndex - 1 === i ? "!border-b-[0px]" : ""
                      }  ${
                        activeIndex === i
                          ? "rounded-[15px] m-[0px]  bg-[#fff] border-[1px] px-[30px]"
                          : " border-b mx-[30px]"
                      }`}
                      onClick={() => handleTabClick(i)}
                    >
                      <h3
                        className={`cursor-pointer text-[24px] leading-[32px] font-bold text-left transition-all duration-300 ease-in-out ${
                          activeIndex === i ? "pt-[30px]" : "py-[20px]"
                        }  `}
                      >
                        {item.title}
                      </h3>
                      <div
                        className={`block relative ${
                          activeIndex === i
                            ? "md:min-h-[184px] block lg:min-h-[124px] xl:min-h-[124px]"
                            : "hidden"
                        }  overflow-hidden transition-all duration-300 ease-out`}
                      >
                        <div className="pb-[30px]">
                          <p
                            className={`text-[18px] transform ${
                              activeIndex === i ? "translate-y-0" : ""
                            } translate-y-[5px]  leading-[28px] font-normal delay-300 transition-all duration-300 ease-out pt-2.5 pb-[10px]`}
                          >
                            {item.description}
                          </p>

                          <a
                            className="text-[18px] text-[#dd0735] md:text-[20px] lg:text-[20px] xl:text-[20px] leading-[28px] font-semibold md:inline-block mt-5 "
                            href={item.route}
                          >
                            {item.link}
                          </a>
                        </div>
                      </div>
                    </div>
                  </Fragment>
                )
              )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerticalTab;
