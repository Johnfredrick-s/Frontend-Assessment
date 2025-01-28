import { Fragment } from "react";

const HeroSection = ({ data }) => {

  const signUpMail = () => {
    const email = document.getElementById('signup-email').value;
    const errTxt = document.getElementById('error-msg')

    if(email){
      if(validateEmail(email)){
        errTxt.innerText = ""
        errTxt.classList.remove('text-animate-add')
        errTxt.classList.add('text-animate-remove')
      }else{
        errTxt.innerText = 'Invalid email format'
        errTxt.classList.add('text-animate-add')
        errTxt.classList.remove('text-animate-remove')
      }
    }else{
      errTxt.innerText = "Please enter your work email!"
      errTxt.classList.add('text-animate-add')
      errTxt.classList.remove('text-animate-remove')
    }

    setTimeout(() => {
      errTxt.innerText = ""
      errTxt.classList.remove('text-animate-add')
      errTxt.classList.add('text-animate-remove')
    }, 2000);
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  


  return (
    <>
      <section  className="bg-[#020A19] p-[60px_0_45px]">
        <div id="hero-sec" className="main_width">
          <div className="flex items-center justify-between flex-col xl:flex-row">
            <div className=" flex flex-col w-full sm:max-w-full max-w-[554px] order-1 ">
              <div className="xl:relative">
                <h1 className="text-[#bfc1c599] text-[16px] text-center leading-[20px] xl:text-left font-semibold mb-[10px]">
                  {data.title1}
                </h1>
                <h2 className="text-white text-[34px] leading-[44px] text-center xl:text-[42px] xl:leading-[53px] xl:text-left font-bold antialiased">
                  {" "}
                  {data.title2}
                </h2>
                <p className="text-[#ffffffbf] md:my-5 sm:my-4 lg:my-5 xl:my-5 tab:my-5 font-normal text-[18px] leading-[28px] text-center xl:text-left">
                  {data.description}
                </p>
                <div className="flex items-center gap-2 md:justify-center tab:justify-center lg:justify-center xl:justify-start lg:pb-[20px]  tab:pb-[20px] md:pb-[20px] sm:flex-col md:flex-row sm:gap-5 sm:pb-[20px]">
                  <input
                    placeholder="Email"
                    type="text"
                    name="email"
                    id="signup-email"
                    className="text-[16px] xs:max-w-full max-w-[280px] leading-[20px] w-full shadow-none transition-all duration-300 ease-in-out h-[52px] rounded-[3px] px-[10px] focus:outline-none"
                  />
                  <button
                    role="button"
                    onClick={signUpMail}
                    className="text-[16px] xs:max-w-full h-[52px] rounded-[3px] sm:max-w-[260px] max-w-[210px] leading-[20px] uppercase text-white font-normal bg-[#dd0735] w-full border-0 flex justify-center items-center transition-all ease-in-out cursor-pointer hover:text-white hover:bg-[#bb022a] hover:no-underline focus:text-white focus:bg-[#bb022a] focus:no-underline "
                  >
                    {data.btn_text}
                    <span className="overflow-hidden animate-spin flex justify-center items-center max-w-0 w-0 h-0">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        version="1.1"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 2c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM12.359 8c0 0 0 0 0 0 0-0.906 0.735-1.641 1.641-1.641s1.641 0.735 1.641 1.641c0 0 0 0 0 0 0 0.906-0.735 1.641-1.641 1.641s-1.641-0.735-1.641-1.641zM10.757 12.243c0-0.821 0.665-1.486 1.486-1.486s1.486 0.665 1.486 1.486c0 0.821-0.665 1.486-1.486 1.486s-1.486-0.665-1.486-1.486zM6.654 14c0-0.743 0.603-1.346 1.346-1.346s1.346 0.603 1.346 1.346c0 0.743-0.603 1.346-1.346 1.346s-1.346-0.603-1.346-1.346zM2.538 12.243c0-0.673 0.546-1.219 1.219-1.219s1.219 0.546 1.219 1.219c0 0.673-0.546 1.219-1.219 1.219s-1.219-0.546-1.219-1.219zM0.896 8c0-0.61 0.494-1.104 1.104-1.104s1.104 0.494 1.104 1.104c0 0.61-0.494 1.104-1.104 1.104s-1.104-0.494-1.104-1.104zM2.757 3.757c0 0 0 0 0 0 0-0.552 0.448-1 1-1s1 0.448 1 1c0 0 0 0 0 0 0 0.552-0.448 1-1 1s-1-0.448-1-1zM14.054 3.757c0 1-0.811 1.811-1.812 1.811s-1.812-0.811-1.812-1.811c0-1.001 0.811-1.811 1.812-1.811s1.812 0.811 1.812 1.811z"></path>
                      </svg>
                    </span>
                  </button>
                </div>

                <div className="text-center w-full xl:absolute xl:bottom-[-30px] ">
                  <span id="error-msg" className="error_text text-animate-remove"></span>
                </div>
              </div>
            </div>

            <div className="w-full max-w-full md:max-w-[610px] tab:max-w-[610px] lg:max-w-[610px] order-2 tab:order-2 sm:order-2 ">
              <div className="w-full max-w-[610px] relative mx-auto xl:mr-[unset]">
                <div className="w-full h-full max-w-[610px]">
                  {/*  */}
                  <img
                    alt="Hexnode UEM"
                    width="610"
                    height="465"
                    className="w-full h-full"
                    src="/hero-section/banner.webp"
                  />
                </div>
                <div className="absolute w-full h-full top-[0px] z-[100] pointer-events-none">
                  <img
                    alt="Hexnode UEM"
                    width="393"
                    height="753"
                    className="w-full h-full"
                    src="/hero-section/baner.webp"
                  />
                </div>

                {data.pills.map((res,i) => (
                  <div
                    key={res.id}
                    className={`group flex ${ i=== 0 ? 'bg-[#FCD598] top-[14%] left-[5%] sm:left-[13%] md:left-[6%] tab:left-[6%] lg:left-[6%] xl:left-[6%]' : i===1 ? 'bg-[#C3E1E7] top-[40%] right-[-2%] sm:right-[-1%] md:right-[-6%] tab:right-[-6%] lg:right-[-6%] xl:right-[-6%]' : i === data.pills.length - 1 ? 'bg-[#BCDCBE] bottom-[13%] right-[26%] z-[1000]' : res.style} rounded-[21px] sm:p-[5px_10px_5px_25px] p-[10px_20px_10px_45px] absolute overflow-hidden`}
                  >
                    <div className="sm:size-[19px] size-[33px] duration-1000 flex items-center bg-[#FFFFFF] rounded-[21px] absolute left-[2%] translate-x-[-2%] md:left-[3%] tab:left-[3%] lg:left-[3%] xl:left-[3%] top-[50%] md:top-[51%] tab:top-[51%] xl:top-[51%] lg:top-[51%] md:translate-x-[-3%] tab:translate-x-[-3%] lg:translate-x-[-3%] xl:translate-x-[-3%] translate-y-[-50%] md:translate-y-[-51%] tab:translate-y-[-51%] lg:translate-y-[-51%] xl:translate-y-[-51%] group-hover:scale-[20] "></div>
                    <div className="sm:size-[19px] size-[33px] absolute flex items-center justify-center left-[2%] translate-x-[-2%] md:left-[3%] tab:left-[3%] lg:left-[3%] xl:left-[3%] top-[50%] md:top-[51%] lg:top-[51%] tab:top-[51%] xl:top-[51%] md:translate-x-[-3%] tab:translate-x-[-3%] lg:translate-x-[-3%] xl:translate-x-[-3%] translate-y-[-50%] md:translate-y-[-51%] tab:translate-y-[-51%] lg:translate-y-[-51%] xl:translate-y-[-51%]" >
                      <div className="sm:w-[8px] sm:h-[4px] w-[14px] h-[8px] justify-center items-center flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16.188"
                          height="11.021"
                          viewBox="0 0 16.188 11.021"
                          className=""
                        >
                          <path
                            id="Path_4891"
                            data-name="Path 4891"
                            d="M-1939.354-218.176l5.416,5.14,9.4-8.917"
                            transform="translate(1940.042 222.678)"
                            fill="none"
                            stroke={res.stroke}
                            strokeWidth="2"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <span className="text-[8px] z-10 leading-[11px] xs:text-[11px] xs:leading-[14px] text-[#020A19] font-normal sm:text-[16px] sm:leading-[18px] md:text-[20px] md:leading-[21px] tab:text-[20px] tab:leading-[21px] xl:text-[20px] xl:leading-[21px] lg:text-[20px] lg:leading-[21px] text-left ">
                      {res.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div  className="bg-[#1A1C2B] md:py-[30px] tab:py-[30px]">
        <div className="main_width">
          <div className="flex flex-col md:items-center sm:items-center xl:items-center tab:flex-row tab:justify-between lg:justify-between xl:flex-row lg:flex-row  justify-center xl:justify-between mx-0 md:justify-between md:mx-[-10px] lg:mx-[-25px] xl:mx-[-45px]">
            {data.contents.map((res) => (
              <Fragment key={res.id}>
                <Contents content={res} />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Contents = ({ content }) => {
  return (
    <>
      <a
        target="_blank"
        className="group max-w-[340px] tab:max-w-[27%] lg:max-w-[27%] xl:max-w-[27%] flex-[0_0_100%] tab:flex-[0_0_27%] lg:flex-[0_0_27%] xl:flex-[0_0_27%] px-0 py-[40px] tab:py-0 tab:px-[10px] lg:px-[25px] xl:px-[45px] "
        href={content.link}
      >
        <div className="flex flex-col items-center tab:items-baseline lg:items-baseline xl:items-baseline group-hover:translate-y-[-5px] translate-y-0 transition-transform duration-500 ease-out">
          <div className="flex mb-[15px]">
            <div className="flex items-center min-w-[82px] max-w-[156px] max-h-[25px] w-full h-full">
              <img
                alt="IDC"
                className="w-full max-w-full h-[25px] object-cover"
                src={content.image}
              />
            </div>
          </div>
          <div className="">
            <p className="text-[14px] leading-[22px] text-[rgb(255,255,255,60%)] text-center md:text-left tab:text-left lg:text-left xl:text-left">
              {content.text}
            </p>
          </div>
        </div>
      </a>
      <div className="w-[107px] tab:w-[1px] lg:w-[1px] xl:h-[106px] xl:w-[1px] bg-[rgb(255,255,255,20%)] basis-[1px] last:hidden"></div>
    </>
  );
};

export default HeroSection;
