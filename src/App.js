import { lazy, Suspense } from "react";
import HeroSection from "./components/HeroSection";
import Layout from "./layout/Layout"; //Layout
import Loader from "./components/Loader"; //Loader

// JSON
import endPoint from "./libs/endpoint.json";
import tab from "./libs/verticaltab.json";
import heroSection from "./libs/herosection.json";

// Lazy Components
const WhyHexnode = lazy(() => import('./components/WhyHexnode'))
const CustomerSlider = lazy(() => import('./components/CustomerSlider'))
const VerticalTab = lazy(() => import('./components/VerticalTab'))
const CompanySlider = lazy(() => import('./components/CompanySlider'))

function App() {

  const customers = [
    {
      title: `"Hexnode is of great value. Works great with Android and iOS!"`,
      image: "/customers/justin-modrak.webp",
      name: "Justin Modrak",
      designation: "Technology Coordinator",
      company: "East Troy Community School District"
    },
    {
      title: `"Most complete MDM solution I found, and I tested many of them, including major names"`,
      image: "/customers/dalibor-kruljac.webp",
      name: "Dalibor Kruljac",
      designation: "KAMELEYA LTD",
    },
    {
      title: `"It seemed to be in-line with everything we were looking at."`,
      image: "/customers/chris-robinson.webp",
      name: "Chris Robinson",
      designation: "Executive Account Manager, NCS",
    },
  ]


  return (
    <>

      <Layout>

        {/* Hero section */}
        {heroSection && <HeroSection data={heroSection} />}

        {/* Why Hexnode section */}
        <Suspense fallback={<div className="main_width"><Loader /></div>}>
          <WhyHexnode />
        </Suspense>

        {/* Powerful Endpoint management section */}
        <section className="py-[60px] lg:py-[80px] relative">
          <div id="features" className="main_width">
            {endPoint.title && (
              <h2 className="antialiased text-[32px] md:text-[40px] leading-[40px] md:leading-[1.3] text-center font-bold text-[#020a19] pb-[40px] md:pb-[60px] max-w-[800px] mx-auto">
                {endPoint.title}
              </h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 tab:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[40px] xl:gap-[80px]">
              {endPoint.data && endPoint.data.length > 0 &&
                endPoint.data.map((item, i) => (
                    <div
                      key={`${item.title}_${i}`}
                      className="max-w-[340px] md:max-w-[380px] mx-auto"
                    >
                      <div className="rounded-[10px] bg-[#F7F7F7] overflow-hidden w-full max-w-[380px] max-h-[240px]">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-[380px] h-[240px] relative"
                        />
                      </div>
                      <h2 className="antialiased text-[24px] xl:text-[32px] leading-[26px] xl:leading-[40px] text-center md:text-left font-bold text-[#020a19] pb-[15px] pt-[20px] md:pb-[20px] md:pt-[40px]">
                        {item.title}
                      </h2>
                      <p className="text-[16px] xl:text-[18px] leading-[24px] xl:leading-[28px] text-center md:text-left font-regular text-[#333333]">
                        {item.description}
                      </p>
                    </div>
                  )
                )}
            </div>
          </div>
        </section>

        {/* Multiplatform Endpoint management section */}
        {tab &&
          <Suspense fallback={<div className="main_width"><Loader /></div>}>
            <VerticalTab tab={tab} />
          </Suspense>}

        {/* Customers section */}
        <section className="pt-[60px] pb-[20px] lg:pt-[80px] lg:pb-[30px] bg-[#FFFFFF] relative">
          <div className="absolute top-[-65px] xl:top-[-74px] opacity-0 w-[0px] h-[0px] m-0" id="customers">
          </div>
          <div className="main_width">
            <h2 className="antialiased text-[32px] md:text-[40px] leading-[40px] md:leading-[1.3] text-center font-bold text-[#020a19] pb-0 md:pb-[20px]">What our customers say</h2>
            <Suspense fallback={<div className="main_width"><Loader /></div>}>
              <CustomerSlider customers={customers} />
            </Suspense>
          </div>
        </section>

        {/* Company section */}
        <Suspense fallback={<div className="main_width"><Loader /></div>}>
          <CompanySlider />
        </Suspense>

        {/* Try Hexnode */}
        <section className="bg-[#020a19] flex justify-center items-center md:h-[330px] tab:h-[330px] lg:h-[330px] xl:h-[330px]  py-[50px] md:py-0 tab:py-0 lg:py-0 xl:py-0">
          <div className="absolute top-[-65px] xl:top-[-74px] opacity-0 size-0 m-0"></div>
          <div className="main_width">
            <div className="w-full text-center max-w-[1000px] mx-auto">
              <h3 className="text-[30px] text-[#fff] font-bold leading-[38px] text-center mb-[20px] md:text-[42px] md:leading-[1.3] tab:text-[42px] tab:leading-[1.3] lg:text-[42px] lg:leading-[1.3] xl:text-[42px] xl:leading-[1.3]">Get Hexnode UEM and start securing your endpoints</h3>
            </div>
            <div className="max-w-[325px] md:max-w-[302px] tab:max-w-[302px] lg:max-w-[302px] xl:max-w-[302px] mx-auto">
              <a className="bg-[#DD0735] hover:bg-[#AA232F] flex items-center justify-center py-[15px] transition-all duration-300 ease-out rounded-[3px]" href="https://www.hexnode.com/mobile-device-management/cloud/signup/"><span className="uppercase font-normal text-[14px] leading-[20px] text-[#FFFFFF] md:text-[17px] md:leading-[24px]">TRY HEXNODE FOR FREE</span></a>
            </div>
          </div>
        </section>

      </Layout >
    </>
  );
}

export default App;
