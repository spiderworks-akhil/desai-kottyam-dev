import React from "react"

import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"

export default () => (
  <Tabs className="Project-tab-block">
    <TabList>
      <Tab>2 BHK</Tab>
      <Tab>3 BHK</Tab>
    </TabList>

    <TabPanel>
      <div className="pricing-block flex m-[15px_0_0_0] items-center justify-between ">
        <div className="">
          <div className="pricing-block-title">
            <h6 className="text-[14px] lg:text-[20px] text-[#3C3C3C] font-[600]">
              Ready To Occupy
            </h6>
            {/* <h6 className="text-[12px] lg:text-[14px] text-[#3C3C3C] font-[500]"> 829 sq. ft to 951 sq. ft </h6> */}
          </div>
        </div>

        <div className=" ">
          <div className="pricing-block-price text-[18px] lg:text-[22px] rounded-[4px] font-[700] text-[#fff] p-[2px_15px]">
            44* Lakhs
          </div>
        </div>
      </div>

      <div className="aminities-list">
        <ul className="">
          <li>Prime location</li>
          <li>Health club</li>
          <li>Indoor games</li>
          <li>Children's play area with equipments</li>
          <li>Budget friendly</li>
        </ul>
      </div>
    </TabPanel>

    <TabPanel>
      <div className="pricing-block flex m-[15px_0_0_0] items-center justify-between ">
        <div className="">
          <div className="pricing-block-title">
            <h6 className="text-[14px] lg:text-[18px] text-[#3C3C3C] font-[600]">
              Ready To Occupy
            </h6>
            {/* <h6 className="text-[12px] lg:text-[14px] text-[#3C3C3C] font-[500]"> 829 sq. ft to 951 sq. ft </h6> */}
          </div>
        </div>

        <div className=" ">
          <div className="pricing-block-price text-[18px] lg:text-[22px] rounded-[4px] font-[700] text-[#fff] p-[2px_15px]">
            49.75* Lakhs
          </div>
        </div>
      </div>

      <div className="aminities-list">
        <ul className="">
          <li>Prime location</li>
          <li>Health club</li>
          <li>Indoor games</li>
          <li>Children's play area with equipments</li>
          <li>Budget friendly</li>
        </ul>
      </div>
    </TabPanel>
  </Tabs>
)
