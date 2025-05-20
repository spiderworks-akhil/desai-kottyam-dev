import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Logo from "@/public/img/desai-logo.png";
import WhyusImg from "@/public/img/why-us-img.png";
import Image from "next/image";
import { BtnIcon, CallIcon } from "./Button";
import EnquiryModal from "@/Component/common/EnquiryModal"; // Adjust path if needed

const Layout = ({ children }) => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  return (
    <>
      <header id="header" className="py-[25px] ">
        <div className="container">
          <div className="flex">
            <div className="w-full">
              <div className="header-block flex items-center justify-between">
                <div className="logo-block">
                  <Image src={Logo} alt="logo" width={55} height={65} />
                </div>

                <div className="header-right-block flex items-center gap-[10px]">
                  <div className="btn-flex flex items-center justify-center gap-[15px]">
                    <a href="tel:+919847528000">
                      <button
                        className="cursor-pointer nearby-mobile-btn flex items-center gap-[5px] bg-white rounded-[12px] text-black px-4 py-2 "
                        id="scroll"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M18.9994 14.4765V17.1862C19.0005 17.4377 18.9488 17.6867 18.8479 17.9172C18.7469 18.1477 18.5988 18.3546 18.413 18.5247C18.2273 18.6947 18.008 18.8242 17.7693 18.9048C17.5305 18.9854 17.2775 19.0153 17.0265 18.9927C14.2415 18.6907 11.5664 17.7409 9.21601 16.2197C7.02929 14.8329 5.17534 12.9827 3.7858 10.8003C2.25627 8.44389 1.30442 5.76107 1.00735 2.96915C0.98473 2.71938 1.01447 2.46764 1.09468 2.22996C1.17489 1.99229 1.30381 1.77389 1.47323 1.58866C1.64265 1.40343 1.84885 1.25544 2.07872 1.15411C2.30858 1.05278 2.55707 1.00032 2.80837 1.00009H5.52347C5.96269 0.995773 6.3885 1.151 6.72152 1.43683C7.05455 1.72267 7.27207 2.11961 7.33354 2.55366C7.44814 3.42084 7.66067 4.27229 7.96707 5.09177C8.08883 5.41507 8.11519 5.76642 8.043 6.1042C7.97082 6.44198 7.80313 6.75203 7.5598 6.99761L6.41041 8.14473C7.69877 10.406 9.57482 12.2784 11.8406 13.5642L12.99 12.4171C13.2361 12.1742 13.5467 12.0069 13.8852 11.9348C14.2236 11.8628 14.5757 11.8891 14.8996 12.0106C15.7207 12.3164 16.5739 12.5285 17.4428 12.6429C17.8824 12.7048 18.2839 12.9258 18.5709 13.2639C18.858 13.6019 19.0105 14.0335 18.9994 14.4765Z"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <span>Call Now</span>
                      </button>
                    </a>
                    <button
                      onClick={() => setIsEnquiryOpen(true)}
                      className="cursor-pointer enquire-btn-mobile enquire-btn-modal bg-[#ff5a5f] text-white px-4 py-2 rounded"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {children}

      <div className="footer-call-to-action bg-[#1E1E1E] p-[50px_0_30px] m-[100px_0_0_0]">
        <div className="justify-between px-4 mx-auto lg:max-w-[1350px] md:items-center  md:px-8">
          <div className="call-to-action-block flex justify-between items-center">
            <div className="call-to-action-text-block w-[50%] lg:w-[50%]">
              <div className="text-[#F8F8F8] text-[20px] font-[500] flex gap-2 items-center">
                Find your perfect Flat in Kottayam
                <span className="bg-[#F8F8F8] w-[70px] h-[2px] flex"></span>
              </div>

              <h2 className="text-[40px] font-[700] text-[#fff] leading-[48px]">
                Turn the key into your heart with Comfort, Joy, and Love
              </h2>

              <p className="text-[#DFDFDF] text-[20px] leading-[30px] font-[400] m-[20px_0]">
                Hurry, book now to avail exciting limited period offers!
              </p>

              <button
                onClick={() => setIsEnquiryOpen(true)}
                className="cursor-pointer footer-cta-btn"
              >
                Enquire Now
              </button>
              {/* <ModalPopupFooter /> */}
            </div>

            <div className="call-to-action-img-block w-[40%] p-[0px_0]">
              <Image src={WhyusImg} alt="WhyusImg" width={400} height={400} />
            </div>
          </div>
        </div>

        <footer className="bg-[#1E1E1E] p-[20px_0]">
          <div className="justify-between px-4 mx-auto lg:max-w-[1350px] md:items-center  md:px-8">
            <div className="footer-content flex items-center justify-between">
              <div className="footer-copy-write text-[#fff] text-[13px] font-[300]">
                Desai Homes © All Rights Reserved
              </div>

              <ul className="footer-copy-write flex gap-5">
                <li>
                  <a
                    href="https://desaihomes.com/privacy-policy"
                    target="_blank"
                    className="text-[#fff] text-[13px] font-[300]"
                  >
                    Privacy Policy{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>

      {isEnquiryOpen && (
        <EnquiryModal onClose={() => setIsEnquiryOpen(false)} />
      )}
    </>
  );
};

export default Layout;
