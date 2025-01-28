import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="bg-[#f2f2f2] xs:py-[30px] sm:py-[30px] py-[20px]">
          <div className="main_width">
            <div className="flex xs:flex-col sm:flex-col flex-wrap xs:justify-center sm:justify-center items-center w-full justify-between">
              <ul className="flex flex-row flex-wrap p-0 m-0 sm:mb-[20px]">
                <li className='inline-block leading-1 list-none after:content-["-"] after:text-[14px] after:leading-1 after:inline-flex after:p-[0_5px] after:opacity-8 last:after:hidden'>
                  <a
                    className="text-[12px] leading-[24px] text-[#8c8c8c] font-medium cursor-pointer transition-all duration-[0.3s] ease-in-out hover:text-[#020a19]"
                    role="link"
                    href="https://www.hexnode.com/legal/terms-of-use/"
                  >
                    Terms of Use
                  </a>
                </li>
                <li className='inline-block leading-1 list-none after:content-["-"] after:text-[14px] after:leading-1 after:inline-flex after:p-[0_5px] after:opacity-8 last:after:hidden'>
                  <a
                    className="text-[12px] leading-[24px] text-[#8c8c8c] font-medium cursor-pointer transition-all duration-[0.3s] ease-in-out hover:text-[#020a19]"
                    role="link"
                    href="https://www.hexnode.com/legal/privacy-policy/"
                  >
                    Privacy
                  </a>
                </li>
                <li className='inline-block leading-1 list-none after:content-["-"] after:text-[14px] after:leading-1 after:inline-flex after:p-[0_5px] after:opacity-8 last:after:hidden'>
                  <a
                    className="text-[12px] leading-[24px] text-[#8c8c8c] font-medium cursor-pointer transition-all duration-[0.3s] ease-in-out hover:text-[#020a19]"
                    role="link"
                    href="https://www.hexnode.com/legal/cookies-policy/"
                  >
                    Cookies
                  </a>
                </li>
              </ul>

              <div className="flex order-3">
                <p className="text-[12px] leading-[24px] text-[#8c8c8c] font-medium m-0">
                  Copyright © 2024 Mitsogo Inc. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
