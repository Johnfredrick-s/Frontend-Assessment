import { useEffect } from "react";

const AlertModal = () => {

  const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Set expiration time in milliseconds
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  };

  const getCookie = (name) => {
    const nameEQ = `${name}=`;
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.indexOf(nameEQ) === 0) {
        return cookie.substring(nameEQ.length, cookie.length);
      }
    }
    return null;
  };

  const runOncePerDay = (key, callback) => {
    // Retrieve the stored date from the cookie
    const lastRunDate = getCookie(key);

    // today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split("T")[0];

    if (lastRunDate !== today) {
      callback('block');

      setCookie(key, today, 1);
    }
  };

  const alertOpen = (type) => {
    const modal = document.getElementById("modal");
    modal.style.display = type
  };

  useEffect(() => {
    // Run the task once per day
    runOncePerDay("alert", alertOpen);
  }, []);

  return (
    <>
      <div
        id="modal"
        className="w-full h-full hidden fixed top-0 left-0 z-[9999]"
      >
        <div className="popup_overlay bg-black/50 w-full h-full cursor-pointer absolute top-0 left-0 z-[200]" />
        <div
          className="popup_overlay absolute top-0 right-0 bottom-0 left-0 z-[202] mx-auto"
        >
          <div
            className="w-[90%] min_modal_h mx-auto my-[7rem] relative md:my-30 tab:my-30 lg:my-30 xl:my-30 max-w-[390px] tab:max-w-[512px] lg:max-w-[640px] xl:max-w-[640px]  h-[238px] sm:h-[238px] lg:h-[390px] tab:h-[312px] xl:h-[390px]"
            role="document"
          >
            <div style={{backgroundImage: `url(${'http://localhost:3000/trail_bg.jpeg'})`}} className="bg-white min-h-[200px] bg-cover w-full h-full border-0 rounded-[10px] shadow-[0_3px_9px_0px_rgba(0,0,0,0.5)] outline-0  overflow-y-visible overflow-x-auto ml-0 p-0 max-h-[750px] relative md:shadow-[0_5px_15px_0px_rgba(0,0,0,0.5)] tab:shadow-[0_5px_15px_0px_rgba(0,0,0,0.5)] lg:shadow-[0_5px_15px_0px_rgba(0,0,0,0.5)] xl:shadow-[0_5px_15px_0px_rgba(0,0,0,0.5)]">
              <img
                alt="Close icon"
                className="max-w-full w-[13px] h-auto cursor-pointer absolute right-[13px] top-[13px]"
                style={{ color: "transparent" }}
                src="/icons/close_icon_popup.svg"
                onClick={()=> alertOpen('none')}
              />
              <div className="w-[83.33%] relative p-[10px_0px_20px_20px] tab:w-[66.66%] lg:w-[66.66%] xl:w-[66.66%]  lg:p-[20px_0px_20px_35px] tab:p-[20px_0px_20px_35px] xl:p-[20px_0px_20px_35px] mt-[20px] pr-[40px] xs:mt-[25px] xs:pr-[60px] sm:mt-[25px] sm:pr-[60px] min-[380px]:pr-[95px] md:pr-[70px] md:mt-[45px] tab:mt-[35px] tab:pr-[25px] lg:mt-[70px] lg:pr-[25px] xl:mt-[70px] xl:pr-[25px]">
                <div className="popup_popup-title text-[18px] leading-none text-title-black font-bold mb-[5px] mt-0 relative xs:mb-3.5 sm:mb-3.5 md:text-[18px] md:mb-4 tab:mb-4 lg:mb-4 xl:mb-4 lg:text-[30px] tab:text-[24px] xl:text-[30px] opacity-0 ">
                  Get a free Hexnode UEM demo
                </div>
                <p className=" text-[10px] leading-[14px] text-[#515151] font-normal relative mb-[.28rem] subpixel-antialiased lg:text-[18px] lg:leading-[24px] tab:text-[14px] tab:leading-[18px] xl:text-[18px] xl:leading-[24px] ">
                  We'll personalize this session so you can gain deeper insights
                  and get started quickly.
                </p>
                <div className="popup-btn-wrapper relative opacity-0">
                  <a
                    className="exit-popup_btn text-[11px] leading-[15px] font-light uppercase text-white rounded-[5px] pointer bg-[#DD0735] border border-solid border-[#DD0735] inline-block p-[9px_17px] relative mt-[10px] sm:mt-[15px] md:mt-[15px] lg:mt-[25px] tab:mt-[25px] xl:mt-[25px]  tab:text-[18px] lg:text-[18px] xl:text-[18px] tab:p-[18px_24px] lg:p-[18px_24px] xl:p-[18px_24px] hover:bg-[#BB022A]"
                    href="https://www.hexnode.com/mobile-device-management/request-demo/"
                  >
                    Schedule DEMO
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlertModal;
