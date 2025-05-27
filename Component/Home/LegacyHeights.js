import React, { useState } from 'react'
import LegacyHeightsImg from "@/public/img/Legacy Heights.jpg";
import LegacyHeightsQr from "@/public/img/Legacy-Heights-qr.png";
import Image from 'next/image';
import EnquiryModal from '../common/EnquiryModal';
function LegacyHeights() {
      const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  return (
          <div className="flex justify-center mt-[120px]">
          <div className="lg:w-10/12 w-full">
            <div className="relative project-list-block flex justify-between items-stretch md:flex-row flex-col-reverse flex-wrap bg-[#f2f4f4] p-[20px] rounded-[10px]">
              <div className="md:w-6/12 w-full">
                <div className="project-list-block-item md:pr-[30px] md:pl-[20px] relative">
                  <div className="hidden items-start justify-between gap-[5px] mb-[10px] md:flex lg:flex-row flex-col">
                    <div>
                      <h2 className="sm:text-[30px] text-[20px] font-[600] text-[#1E1E1E]">
                        DD Legacy Heights
                      </h2>
                    </div>

                    {/* <Image
                      src={MajesticMountLogo}
                      alt="MajesticMountLogo"
                      width={300}
                      height={200}
                      className="project-logo"
                    /> */}

                    <h4 className="sm:text-[26px] text-[20px] leading-[34px] font-[600] text-[#1E1E1E]">
                      49.5* Lakhs
                    </h4>
                  </div>

                  <p>
                    Are you looking for a luxury apartment in Kottayam that fits
                    your budget? Then check out our latest project, DD Legacy
                    Heights!
                  </p>

                  <h5 className="block text-[#1E1E1E] text-[16px] mt-[15px] font-[600]">
                    Chavittuvary, Kottayam
                    <span className="text-[#1E1E1E]">
                      &nbsp;&nbsp;|&nbsp;&nbsp;
                    </span>{" "}
                    2&3 BHK
                  </h5>

                  <div className="border-[#aaaaaa] border-t mt-[15px] pt-[15px]"></div>

                  <ul className="">
                    <li className="py-[3px]">Swimming Pool with Kid’s Pool</li>
                    <li className="py-[3px]">
                      Children's Play Area with Equipment
                    </li>
                    <li className="py-[3px]">Health Club</li>
                    <li className="py-[3px]">Indoor Games & Pool Table</li>
                    <li className="py-[3px]">Multi Purpose Hall</li>
                  </ul>

                  <div className="flex items-center justify-between">
                    <h6 className="mt-[15px] font-[600] text-[14px]">
                      RERA No: K-RERA/PRJ/KTM/114/2022
                    </h6>

                    <div className="qr-code">
                      <Image
                        src={LegacyHeightsQr}
                        alt="qr"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-6/12 w-full">
                <div className="project-list-block-item-img rounded-[10px] relative md:mb-[0] mb-[25px]">
                  <div className="flex md:flex-row flex-col md:items-center items-start justify-between gap-[20px] mb-[10px] md:hidden ">
                    <div>
                      <h2 className="sm:text-[30px] text-[20px] font-[600] text-[#1E1E1E]">
                        DD Legacy Heights
                      </h2>
                    </div>

                    {/* <Image
                      src={MajesticMountLogo}
                      alt="MajesticMountLogo"
                      width={300}
                      height={200}
                      className="project-logo"
                    /> */}

                    <h4 className="sm:text-[26px] text-[20px] leading-[34px] font-[600] text-[#1E1E1E]">
                      49.5* Lakhs
                    </h4>
                  </div>
                  <Image
                    src={LegacyHeightsImg}
                    alt="MajesticMountImg"
                    width={500}
                    height={600}
                    className="w-full rounded-[10px]"
                  />
                  <button
                    className="download-br-btn"
                    onClick={() => setIsEnquiryOpen(true)}
                  >
                    Download Brochure
                  </button>
                </div>
              </div>

              <div className="pr-status">Nearing Completion</div>
            </div>
          </div>
                {isEnquiryOpen && (
        <EnquiryModal onClose={() => setIsEnquiryOpen(false)} frm="legacy_heights"/>
      )}
        </div>
  )
}

export default LegacyHeights
