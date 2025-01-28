import { memo, useEffect, useMemo, useRef, useState } from "react";

const Navbar = () => {
  const navLinks = [
    { text: "Why Hexnode", link: "#why-hexnode" },
    { text: "Features", link: "#features" },
    { text: "Platforms", link: "#platforms" },
    { text: "Customers", link: "#customers" },
  ];

  
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); //Side menu
  const [showBtn, setShowBtn] = useState(false); //Show trail btn

  const [isScrolled, setIsScrolled] = useState(false); //Change navbar bg color
  const [lastScrollTop, setLastScrollTop] = useState(0); //Sticky

  // Function to handle scroll
  const handleScroll = () => {
    const distanceFromTop =
      window.scrollY || document.documentElement.scrollTop;

    setIsScrolled(distanceFromTop > 0);

    const targetElement = document.getElementById("hero-sec");
    if (targetElement) {
      const rect = targetElement.getBoundingClientRect();
      const isInView = rect.top <= -720 && rect.bottom <= 0;
      setShowBtn(isInView);
    }

    const el = document.getElementById("sticky-mob-head");
    if (distanceFromTop > lastScrollTop) {
      // Scrolling down
      // console.log("down");
      el && el.classList.add("nav-top");
    } else if (distanceFromTop < lastScrollTop) {
      // Scrolling up
      // console.log("up");
      el && el.classList.remove("nav-top");
    }

    setLastScrollTop(distanceFromTop); // Update the last scroll position
  };

  useEffect(() => {
    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const boxRef = useRef(null);

  const handleClickOutside = (event) => {
    if (isMobileMenuOpen && boxRef.current && !boxRef.current.contains(event.target) ) {
      toggleMenu();
    }
  };

  useEffect(() => {
    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMenu = () => {
    setMobileMenuOpen(prev=> !prev);
  };

  useMemo(() => {
    if(typeof window !== "undefined"){
      document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    }

  }, [isMobileMenuOpen]);

  return (
    <>
      {/*  Header */}
      <header
        className={`w-full z-[9999] h-[65px]  xl:border-b-[none] sticky top-0 left-[0px] transition-all duration-500 ease-in xl:pt-[2px] xl:pb-[2px] group xl:hover:bg-white ${
          isScrolled
            ? "nav-head xl:h-[79px] border-b-[1px] border-b-[#dbd9d2]"
            : "primary_bg xl:h-[74px]"
        }`}
      >
        <div className="relative h-full">
          <div className="main_width xl:grid h-full">
            <nav
              className={`flex items-center navbar-container justify-between py-[8px] min-h-[65px] transition-all duration-[0.3s] ease-linear xl:min-h-[unset]`}
            >
              {/* Logo */}
              <a
                className="inline-block max-w-[121px] relative z-[100] xl:z-[102] xl:mb-[10px]"
                aria-label="Hexnode"
                href="https://www.hexnode.com/"
              >
                <svg
                  version="1.1"
                  className={`${
                    isScrolled ? "fill-black" : "fill-white"
                  }  xl:group-hover:fill-black w-[121px] nav-fill-svg`}
                  x="0px"
                  y="0px"
                  viewBox="0 0 120.9 25"
                >
                  {" "}
                  <g > </g>{" "}
                  <g >
                    {" "}
                    <g >
                      {" "}
                      <g>
                        {" "}
                        <path
                          className="hex__logo_st0"
                          d="M8.3,8.7C7.9,8.6,6.9,8.5,5.8,8.8c-0.4,0.1-1.2,0.3-2,0.7l0-7.3c0-1.1-0.9-1.9-1.9-1.9S0,1.2,0,2.2L0,23                    c0,1.1,0.9,1.9,1.9,1.9C3,24.9,3.8,24,3.8,23l0-7.5v0c0.2-0.7,0.4-1.2,0.8-1.7c0.2-0.3,0.9-1,2-1.1c1.6-0.2,2.7,0.7,2.9,0.9                    c1.2,1.1,1.2,2.5,1.2,2.7l0,7.1c0,0.9,0.8,1.7,1.8,1.7h0c1,0,1.8-0.8,1.8-1.7l0-7.5c0-1.5-0.5-2.6-0.8-3.1                    C12.6,10.5,10.5,9,8.3,8.7z"
                        ></path>{" "}
                        <path
                          className="hex__logo_st0"
                          d="M78.2,8.5c-0.3,0-0.8-0.1-1.3,0c-2.8,0.2-4.8,2-5.2,2.4c-2.3,2.3-2.4,5.2-2.4,5.7c0,0.9,0.1,3.3,1.9,5.4                    c1.3,1.5,3.3,2.5,5.7,2.7c0.3,0,0.6,0.1,1.1,0.1l0,0c0,0,0,0,0,0v0c3.4-0.1,5.7-2.6,5.8-2.7c0.3-0.3,1.9-2.4,1.9-5.4                    C85.8,12.4,82.5,8.8,78.2,8.5z M81.7,16.8c-0.1,2.3-2.1,4.1-4.4,4c-2.3-0.1-4.2-2-4.1-4.3c0.1-2.3,2.1-4.1,4.4-4                    C80,12.5,81.8,14.5,81.7,16.8z"
                        ></path>{" "}
                        <path
                          className="hex__logo_st0"
                          d="M59.8,8.7c-1.5,0-2.9,0.4-4.1,1.2c-0.3-0.8-1-1.3-1.9-1.3c-1.1,0-2,0.9-2,2l0,12.2c0,1.1,0.9,2,2,2                    c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c0.9,0,1.7-0.7,1.7-1.7l0-6.9c0-0.1,0.1-0.3,0.2-0.6c0-0.1,0.2-0.7,0.3-1                    c0.4-0.9,1.1-1.4,1.3-1.5c0.8-0.5,1.5-0.6,1.7-0.6c0.6,0,1,0.1,1.3,0.1c0.2,0.1,1,0.3,1.6,0.9c1,1,1.2,2.3,1.2,2.6                    c0,2.3,0,4.6,0,6.9c0,0.2,0.1,0.7,0.6,1.1c0.6,0.5,1.2,0.5,1.3,0.5h0c0.9,0,1.7-0.7,1.7-1.7l0-7.3c-0.1-0.8-0.3-2.1-1.1-3.4                    C65.8,12,63.7,8.8,59.8,8.7z"
                        ></path>{" "}
                        <path
                          className="hex__logo_st0"
                          d="M118.2,10.3c-1.9-1.5-4.1-1.6-4.4-1.6c-0.3,0-1.4,0-2.8,0.4c-1.7,0.6-2.8,1.5-3.1,1.8                    c-2.4,2.2-2.5,5.2-2.6,5.7c0,0.7-0.1,3.2,1.7,5.5c1.9,2.3,4.4,2.7,5.1,2.8c1.1,0.2,2.2,0.1,2.5,0c0.5-0.1,1.3-0.2,2.4-0.6                    c1.4-0.6,2.3-1.4,2.9-2.1c0.3-0.8,0.3-1.6-0.2-2.1c-0.4-0.4-0.9-0.6-1-0.6c-0.9-0.2-1.7,0.3-1.8,0.4c-0.2,0.2-0.5,0.5-0.9,0.7                    c-0.8,0.5-1.6,0.5-2.1,0.5c-0.4,0-1.8,0.1-3-0.9c-1.1-0.8-1.5-1.8-1.7-2.2l11.7,0C121.3,15,120.3,12,118.2,10.3z M110.8,13.4                    c1.1-0.7,2.1-0.8,2.6-0.8c0.4,0,1.4,0,2.4,0.7c0.6,0.4,0.9,0.9,1.2,1.3l-7.3,0C109.9,14.2,110.3,13.8,110.8,13.4z"
                        ></path>{" "}
                        <path
                          className="hex__logo_st0"
                          d="M38.2,16.1c1-1,1.9-2,2.9-3c-1.2-1.2-2.4-2.4-3.7-3.6c-0.8-0.8-2.1-0.8-2.9,0c-0.8,0.8-0.8,2.1,0,2.9                    C35.7,13.6,36.9,14.8,38.2,16.1z"
                        ></path>{" "}
                        <path
                          className="hex__logo_st0"
                          d="M49.1,9.1c-0.8-0.8-2.1-0.7-2.8,0.1L34.5,21.5c-0.8,0.8-0.7,2.1,0.1,2.8c0.8,0.8,2.1,0.7,2.8-0.1l4.3-4.5                    l4.4,4.4c0.8,0.8,2.1,0.8,2.9,0c0.8-0.8,0.8-2.1,0-2.9l-4.4-4.5l4.6-4.8C50,11.1,49.9,9.9,49.1,9.1z"
                        ></path>{" "}
                        <path
                          className="hex__logo_st0"
                          d="M101.7,0c-1.1,0-2,0.9-2,2l0,8c-1.1-0.8-2.5-1.3-3.9-1.4v0c-0.3,0-0.8-0.1-1.3,0c-2.8,0.2-4.7,2-5.1,2.4                    C87,13.2,87,16.1,87,16.6c0,0.9,0.1,3.3,1.9,5.4c1.3,1.5,3.2,2.5,5.6,2.7c0.3,0,0.6,0.1,1.1,0.1l0,0c0,0,0,0,0,0l0,0                    c1.8-0.1,3.2-0.8,4.2-1.5c0.2,0.8,1,1.4,1.9,1.4c1.1,0,2-0.9,2-2l0-20.8C103.6,0.9,102.7,0,101.7,0z M99.4,16.8                    c-0.1,2.4-2.1,4.3-4.5,4.2c-2.4-0.1-4.2-2.1-4.1-4.5c0.1-2.4,2.1-4.3,4.5-4.2C97.7,12.4,99.5,14.4,99.4,16.8z"
                        ></path>{" "}
                        <path
                          className="hex__logo_st0"
                          d="M29.3,10.4c-1.9-1.5-4.1-1.6-4.4-1.6c-0.3,0-1.4,0-2.8,0.4c-1.7,0.6-2.8,1.5-3.1,1.8                    c-2.4,2.2-2.5,5.2-2.6,5.7c0,0.7-0.1,3.2,1.7,5.5c1.9,2.3,4.4,2.7,5.1,2.8c1.1,0.2,2.2,0.1,2.5,0c0.5-0.1,1.3-0.2,2.4-0.6                    c1.4-0.6,2.3-1.4,2.9-2.1c0.3-0.8,0.3-1.6-0.2-2.1c-0.4-0.4-0.9-0.6-1-0.6c-0.9-0.2-1.7,0.3-1.8,0.4c-0.2,0.2-0.5,0.5-0.9,0.7                    c-0.8,0.5-1.6,0.5-2.1,0.5c-0.4,0-1.8,0.1-3-0.9c-1.1-0.8-1.5-1.8-1.7-2.2l11.7,0C32.4,15,31.4,12.1,29.3,10.4z M21.9,13.5                    c1.1-0.7,2.1-0.8,2.6-0.8c0.4,0,1.4,0,2.4,0.7c0.6,0.4,0.9,0.9,1.2,1.3l-7.3,0C21,14.3,21.4,13.8,21.9,13.5z"
                        ></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </svg>
              </a>

              {/* NavLinks */}
              <div
                className={`w-full ${
                  isMobileMenuOpen
                    ? "navbar-container-menu_open !opacity-100"
                    : ""
                } navbar-container-menu xl:flex justify-between items-center opacity-0 xl:opacity-100`}
              >
                <div
                  ref={isMobileMenuOpen ? boxRef : null}
                  className={`w-full flex justify-start ${
                    isMobileMenuOpen
                      ? "navbar-container-menu-inner !opacity-100"
                      : ""
                  } navbar-container-menu-sidebar items-center opacity-0 ml-[30px] xl:justify-between xl:opacity-100 `}
                >
                  <div
                    className="text-[18px] leading-[24px] border-b-[1px] border-solid border-[#dbd9d2] bg-white flex items-center max-w-full px-[30px] mt-0 ml-auto sticky top-0 z-[104] w-full xl:hidden py-[32px]"
                  ></div>
                  <ul
                    className="text-[16px] text-[#BFC0C1] leading-[13px] list-none flex justify-between m-0 px-0 flex-col w-full xl:flex-row xl:w-[unset] "
                    role="menubar"
                    aria-label="Navigation drawer"
                  >
                    {navLinks.map((res) => (
                      <li
                        key={res.text}
                        className="xl:group text-[15px] text-[#101420] leading-[24px] border-b-[1px] border-solid border-[#f3f3f3] flex items-start px-[30px] py-[20px] cursor-pointer xl:text-[#fff] xl:border-0 xl:pl-[0px] xl:pr-[3px] xl:pt-[0px] xl:pb-[0px] xl:even:mx-[25px] xl:cursor-default "
                        role="none"
                        onClick={() => {
                          const targetElement = document.getElementById(res.link.slice(1,res.link.length)); 
                          if (targetElement) {
                            targetElement.scrollIntoView({ behavior: "smooth" });
                            if(isMobileMenuOpen){
                              toggleMenu()
                            }
                            setTimeout(() => {
                              window.location.replace('/'+res.link)
                            }, 500);
                          }
                        }}
                      >
                        <a
                          target="_self"
                          className="text-[15px] group-hover:text-black leading-[24px] cursor-pointer w-full nav-link xl:leading-[20px]"
                          // href={res.link}
                        >
                          {res.text}
                        </a>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-white max-w-[100%] ml-auto px-[30px] pt-[30px] pb-[20px] w-full xl:max-w-[unset] xl:w-[unset] xl:ml-[unset] xl:bg-[transparent] xl:p-[unset]">
                    <a
                      target="_self"
                      role="link"
                      aria-label="14 Day Free Trial"
                      className={`text-[16px] ${
                        isMobileMenuOpen ? "block w-full text-center" : ""
                      } xl:h-full xl:block p-[12px_22px] rounded-[3px] leading-[20px] uppercase !text-white font-normal bg-[#dd0735] transition duration-[0.2s] ease-linear cursor-pointer hover:text-white hover:bg-[#bb022a] hover:no-underline focus:text-white focus:bg-[#bb022a] focus:no-underline hover:decoration-[none]`}
                      href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
                    >
                      14 Day Free Trial
                    </a>
                    <div className="flex justify-center items-center mt-[20px] mb-[10px] xl:hidden">
                      <a
                        target="_self"
                        rel="nofollow"
                        role="link"
                        aria-label="Login"
                        className="inline-block nav-bar_login-btn-ctrl__4QBMi  "
                        href="https://www.hexnode.com/mobile-device-management/sign-in/"
                      >
                        Login
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu */}
              <div className="flex justify-between items-center xl:hidden">
                <div
                  id="sticky-mob-head"
                  className={`w-full border-b-[1px] transition-all ease-linear duration-300 delay-300 border-solid border-[#dbd9d2] bg-[#fff] ${
                    showBtn
                      ? "xs:visible xs:opacity-100 sm:visible sm:opacity-100 border-[#dbd9d2] border-t-[1px]"
                      : ""
                  } opacity-0 invisible fixed translate-y-[-10px] left-[0px] top-[67px] z-[-1]  xl:hidden `}
                >
                  <div className="w-[88%] mx-auto py-[13px] text-right xs:justify-end sm:justify-end xs:flex sm:flex">
                    <a
                      target="_self"
                      rel="nofollow"
                      role="link"
                      aria-label="14 Day Free Trial"
                      className={`${
                        isMobileMenuOpen
                          ? " md:w-full md:block md:text-center tab:w-full tab:block tab:text-center lg:w-full lg:block lg:text-center p-[14px]"
                          : ""
                      }  flex xs:w-fit sm:w-fit btn btn-common justify-center items-center btn-nav text-[15px] leading-[24px] !text-[#fff] uppercase whitespace-nowrap min-w-[unset] min-h-[unset] rounded-[3px] p-[10px_26px] sm:p-[8px_21px] xs:p-[8px_21px] m-0 transition duration-[0.2s] ease-linear relative z-[1] bg-[#bb022a] hover:decoration-[none] active:bg-[#bb022a] active:text-[#fff] active:decoration-[none] focus:bg-[#bb022a] focus:text-[#fff] target:bg-[#bb022a] target:text-[#fff] target:decoration-[none] `}
                      href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
                    >
                      14 Day Free Trial
                    </a>
                  </div>
                </div>

                <div
                  className={`${
                    showBtn ? "flex items-center xs:block sm:block" : ""
                  }`}
                >
                  <div className="xs:hidden sm:hidden">
                    <a
                      target="_self"
                      rel="nofollow"
                      role="link"
                      aria-label="14 Day Free Trial"
                      className={` justify-center ${
                        showBtn
                          ? "md:!flex md:!opacity-100 md:mr-[50px] tab:mr-[50px] lg:mr-[50px] tab:!flex tab:!opacity-100 lg:!flex lg:!opacity-100"
                          : ""
                      } hidden opacity-0 items-center text-[15px] leading-[24px] !text-[#fff] uppercase whitespace-nowrap min-w-[unset] min-h-[unset] rounded-[3px] p-[8px_21px] m-0 transition delay-300 duration-[0.4s] ease-linear relative z-[1] bg-[#bb022a]  hover:decoration-[none] active:bg-[#bb022a] active:text-[#fff] active:decoration-[none] focus:bg-[#bb022a] focus:text-[#fff] target:bg-[#bb022a] target:text-[#fff] target:decoration-[none] `}
                      href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
                    >
                      14 Day Free Trial
                    </a>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMenu();
                    }}
                    className={`${
                      isMobileMenuOpen
                        ? "before:rotate-[-45deg] before:bottom-1/2 before:-mb-[2px] before:bg-[#020a19] before:transition-all before:duration-200 before:ease-linear before:delay-[300ms] before:w-full before:h-full z-[9999]"
                        : ""
                    } hamburger--btn relative z-[101] ${
                      showBtn
                        ? "tab:self-center md:self-center lg:self-center"
                        : ""
                    } self-end sm:self-center`}
                  >
                    <span
                      className={`border-0 w-[24px] h-[18px] bg-[transparent] flex relative z-[199] m-0 cursor-pointer before:absolute  before:content-[''] before:w-[100%] before:h-[3px] before:rounded-[100px] before:left-[0px] ${
                        isMobileMenuOpen
                          ? "before:bg-[#000] before:rotate-[-140deg]"
                          : isScrolled
                          ? "before:bg-[#000]"
                          : "before:bg-[#fff]"
                      }  after:absolute after:content-[''] after:w-[100%] after:h-[3px] after:rounded-[100px] after:left-[0px] ${
                        isMobileMenuOpen
                          ? "after:bg-[#000] after:hidden"
                          : isScrolled
                          ? "after:bg-[#000]"
                          : "after:bg-[#fff]"
                      }  before:bottom-[0px] after:top-[0px] after:mt-[0px] `}
                    >
                      <span
                        className={`w-[100%] h-[3px] ${
                          isMobileMenuOpen
                            ? "bg-[#000] !mt-[4px] rotate-[-45deg]"
                            : isScrolled
                            ? "bg-[#000]"
                            : "bg-[#fff]"
                        }  rounded-[100px] visible mb-[0px] mt-[-2px] opacity-[1] absolute left-[0px] top-[50%] translate-y-[25%]`}
                      ></span>
                    </span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default memo(Navbar);
