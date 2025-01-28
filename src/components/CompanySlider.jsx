import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CompanySlider = () => {
  const options = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200, // For screens <= 1200px
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 768, // For screens <= 768px
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 640, // For screens <= 640px
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 300, // For screens <= 300px
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const slide_data_links = [
    {
      id: 1,
      image: "/company-slides/costco.svg",
      alt: "Costco",
    },
    {
      id: 2,
      image: "/company-slides/saic.svg",
      alt: "SAIC",
    },
    {
      id: 3,
      image: "/company-slides/hilton.svg",
      alt: "Hilton",
    },
    {
      id: 4,
      image: "/company-slides/lowes.svg",
      alt: 'Lowe"s',
    },
    {
      id: 5,
      image: "/company-slides/polaris.svg",
      alt: "polaris",
    },
    {
      id: 6,
      image: "/company-slides/gorillas.svg",
      alt: "Gorillas",
    },

    {
      id: 7,
      image: "/company-slides/wolt.svg",
      alt: "wolt",
    },
    {
      id: 8,
      image: "/company-slides/marriott-intl.svg",
      alt: "Marriott",
    },
    {
      id: 9,
      image: "/company-slides/merck.svg",
      alt: "Merck",
    },
  ];
  return (
    <>
      <section className="pt-[20px] pb-[60px] lg:pb-[80px] lg:pt-[30px] bg-[#FFFFFF]">
        <div className="main_width relative">
          <div className="w-[70px] md:w-[100px] h-[40px] md:h-[80px] absolute left-0 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-transparent z-[1]" />
          <div className="w-[70px] md:w-[100px] h-[40px] md:h-[80px] absolute right-0 bg-gradient-to-l from-[#FFFFFF] via-[#FFFFFF] to-transparent z-[1]" />
          <div className="slick-slider slick-initialized" dir="ltr">
            <Slider {...options}>
              {slide_data_links.map((res) => (
                <div key={res.id}>
                  <figure
                    className="block max-w-[130px] xs:max-w-[200px] w-full"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <img
                      alt={res.alt}
                      style={{ color: "transparent" }}
                      src={res.image}
                    />
                  </figure>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanySlider;
