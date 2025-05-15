import React from "react"

import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"

export default () => (
  <Tabs className="Project-tab-block">
    <TabList>
      <Tab>2 BHK</Tab>
      <Tab>3 BHK Terrace Garden Apartment</Tab>
    </TabList>

    <TabPanel>
      <div className="pricing-block flex m-[15px_0_0_0] items-center justify-between ">
        <div className="">
          <div className="pricing-block-title">
            <h6 className="text-[14px] lg:text-[18px] text-[#3C3C3C] font-[600]">
              Ready To Occupy
            </h6>
            {/* <h6 className="text-[12px] lg:text-[14px] text-[#3C3C3C] font-[500]"> 1122 sq. ft to 1459 sq. ft </h6> */}
          </div>
        </div>

        <div className=" ">
          <div className="pricing-block-price text-[18px] lg:text-[22px] rounded-[4px] font-[700] text-[#fff] p-[2px_15px]">
            59* Lakhs
          </div>
        </div>
      </div>

      <div className="aminities-list">
        <ul className="">
          <li>Swimming pool with kid’s pool</li>
          <li>Health club & indoor games</li>
          <li>A/c home theatre cum hall</li>
          <li>Children's play area with equipments</li>
          <li>Landscaped garden</li>
        </ul>
      </div>
    </TabPanel>

    <TabPanel>
      <div className="pricing-block flex m-[15px_0_0_0] items-center justify-between ">
        <div className="">
          <div className="pricing-block-title">
            <h6 className="text-[14px] lg:text-[20px] text-[#3C3C3C] font-[600]">
              Ready To Occupy
            </h6>
            {/* <h6 className="text-[12px] lg:text-[14px] text-[#3C3C3C] font-[500]"> 1122 sq. ft to 1459 sq. ft </h6> */}
          </div>
        </div>

        <div className=" ">
          <div className="pricing-block-price text-[18px] lg:text-[22px] rounded-[4px] font-[700] text-[#fff] p-[2px_15px]">
            83* Lakhs
          </div>
        </div>
      </div>

      <div className="aminities-list">
        <ul className="">
          <li>Swimming pool with kid’s pool</li>
          <li>Health club & indoor games</li>
          <li>A/c home theatre cum hall</li>
          <li>Children's play area with equipments</li>
          <li>Landscaped garden</li>
        </ul>
      </div>
    </TabPanel>
  </Tabs>
)
