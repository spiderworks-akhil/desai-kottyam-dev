import React, { useState } from 'react'
import CityGateQr from "@/public/img/City-gate-qr.jpg";
import CityGateImg from "@/public/img/City-Gate.jpg";
import EnquiryModal from '../common/EnquiryModal';
import Image from 'next/image';
function CityGate() {
      const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
     <div className="flex justify-center mt-[120px] flex-row-reverse">
          <div className="lg:w-10/12 w-full">
            <div className="relative project-list-block flex justify-between items-stretch md:flex-row-reverse flex-col-reverse flex-wrap bg-[#f2f4f4] p-[20px] rounded-[10px]">
              <div className="md:w-6/12 w-full">
                <div className="project-list-block-item md:pr-[30px] md:pl-[20px] relative">
                  <div className="hidden items-start justify-between gap-[5px] mb-[10px] md:flex lg:flex-row flex-col">
                    <div>
                      <h2 className="sm:text-[30px] text-[20px] font-[600] text-[#1E1E1E]">
                        DD City Gate
                      </h2>
                    </div>

                    {/* <Image
                      src={MajesticMountLogo}
                      alt="MajesticMountLogo"
                      width={300}
                      height={200}
                      className="project-logo"
                    /> */}

                    <h4 className="sm:text-[26px] text-[20px] font-[600] leading-[34px] text-[#1E1E1E]">
                      44* Lakhs
                    </h4>
                  </div>

                  <p>
                    The comfort of city life with all the amenities and
                    facilities, all under your budget. That’s DD City Gate for
                    you!
                  </p>

                  <h5 className="block text-[#1E1E1E] text-[16px] mt-[15px] font-[600]">
                    S H Mount, Kottayam
                    <span className="text-[#1E1E1E]">
                      &nbsp;&nbsp;|&nbsp;&nbsp;
                    </span>{" "}
                    2&3 BHK
                  </h5>

                  <div className="border-[#aaaaaa] border-t mt-[15px] pt-[15px]"></div>

                  <ul className="">
                    <li className="py-[3px]">Prime Location</li>
                    <li className="py-[3px]">Health Club</li>
                    <li className="py-[3px]">Indoor Games & Pool Table</li>
                    <li className="py-[3px]">
                      Children's Play Area with Equipments
                    </li>
                    <li className="py-[3px]">Boutique Apartment</li>
                  </ul>

                  <div className="flex items-center justify-between">
                    <h6 className="mt-[15px] font-[600] text-[14px]">
                      RERA No: K-RERA/PRJ/122/2020.
                    </h6>

                    <div className="qr-code">
                      <Image
                        src={CityGateQr}
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
                        DD City Gate
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
                      44* Lakhs
                    </h4>
                  </div>
                  <Image
                    src={CityGateImg}
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

              <div className="pr-status">Ready To Occupy</div>
            </div>
          </div>
                {isEnquiryOpen && (
        <EnquiryModal onClose={() => setIsEnquiryOpen(false)} frm="city_gate"/>
      )}
        </div>

  )
}

export default CityGate
