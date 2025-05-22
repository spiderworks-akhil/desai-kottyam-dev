import React from "react";

import Specifications from "@/Component/Home/Specifications";
import SpecificationsCityGate from "@/Component/Home/SpecificationsCityGate";
import SpecificationsMajesticMount from "@/Component/Home/SpecificationsMajesticMount";
import HomeLoans from "@/Component/Home/HomeLoans";
import HomeLoansMajesticMount from "@/Component/Home/HomeLoansMajesticMount";
import HomeLoansCityGate from "@/Component/Home/HomeLoansCityGate";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProgressStatus from "@/Component/Home/ProgressStatus";
import ProgressStatusCityGate from "@/Component/Home/ProgressStatusCityGate";
import ProgressStatusMajesticMount from "@/Component/Home/ProgressStatusMajesticMount";

import Testimonials from "@/Component/Home/Testimonials";

import Image from "next/image";
import green from "@/public/img/green.svg";

import FloorPlanSliderLegacy from "@/Component/Home/FloorPlanSliderLegacy";
import FloorPlanSliderCityGate from "@/Component/Home/FloorPlanSliderCityGate";
import FloorPlanSliderMajesticMount from "@/Component/Home/FloorPlanSliderMajesticMount";

import LocationMapCityGate from "@/Component/Home/LocationMapCityGate";
import LocationMapLegacy from "@/Component/Home/LocationMapLegacy";
import LocationMapMajesticMount from "@/Component/Home/LocationMapMajesticMount";

export default () => (
  <Tabs className="select-project-tab-block">
    <TabList>
      <Tab>DD Majestic Mount</Tab>
      <Tab>DD City Gate</Tab>
      <Tab>DD Legacy Heights</Tab>
    </TabList>

    <TabPanel id="majestic-mount">
      <div className="project-floorplan-block m-[30px_0px_0px_0px]">
        <h2 className="section-sub-title text-[#1E1E1E] text-[30px] font-[600] m-[50px_0px_20px_0px]">
          Floor Type
        </h2>

        <FloorPlanSliderMajesticMount />
      </div>

      <div className="project-Specifications-block">
        <h2 className="section-sub-title text-[#1E1E1E] text-[30px] font-[600] m-[50px_0px_20px_0px]">
          Specifications
        </h2>

        <SpecificationsMajesticMount />
      </div>

      <div className="project-home-loans-block">
        <h2 className="section-sub-title text-[#1E1E1E] text-[30px] font-[600] m-[50px_0px_20px_0px]">
          Pre-approved Home Loan
        </h2>

        <HomeLoansMajesticMount />
      </div>

      {/* <OfferBanner /> */}

      <div className="project-progress-status-block">
        <h2 className="section-sub-title text-[#1E1E1E] text-[30px] font-[600] m-[50px_0px_20px_0px]">
          Progress Status
        </h2>

        <ProgressStatusMajesticMount />
      </div>

      <div className="project-location-map-block">
        <h2 className="section-sub-title text-[#1E1E1E] text-[30px] font-[600] m-[50px_0px_20px_0px]">
          Location Map
        </h2>

        <LocationMapMajesticMount />
      </div>

      <div className="project-testimonials-block">
        <h2 className="section-sub-title text-[#1E1E1E] text-[30px] font-[600] m-[50px_0px_20px_0px]">
          Testimonials
        </h2>

        <div className="project-testimonials-block-content flex gap-5">
          <div className="testimonial-slider-content w-[100%]">
            <Testimonials />
          </div>
        </div>
      </div>
    </TabPanel>

    <TabPanel id="city-gate">
      <div className="project-floorplan-block m-[30px_0px_0px_0px]">
        <h2 className="section-sub-title text-[#1E1E1E] text-[30px] font-[600] m-[50px_0px_20px_0px]">
          Floor Type
        </h2>

        <FloorPlanSliderCityGate />
      </div>

      <div className="project-Specifications-block">
        <h2 className="section-sub-title text-[#1E1E1E] text-[30px] font-[600] m-[50px_0px_20px_0px]">
          Specifications
        </h2>

        <SpecificationsCityGate />
      </div>

      <div className="project-home-loans-block">
        <h2 className="section-sub-title text-[#1E1E1E] text-[30px] font-[600] m-[50px_0px_20px_0px]">
          Pre-approved Home Loan
        </h2>

        <HomeLoansCityGate />
      </div>

      {/* <OfferBanner /> */}

      <div className="project-progress-status-block">
        <h2 className="section-sub-title text-[#1E1E1E] text-[30px] font-[600] m-[50px_0px_20px_0px]">
          Progress Status
        </h2>

        <ProgressStatusCityGate />
      </div>

      <div className="project-location-map-block">
        <h2 className="section-sub-title text-[#1E1E1E] text-[30px] font-[600] m-[50px_0px_20px_0px]">
          Location Map
        </h2>

        <LocationMapCityGate />
      </div>

      <div className="project-testimonials-block">
        <h2 className="section-sub-title text-[#1E1E1E] text-[30px] font-[600] m-[50px_0px_20px_0px]">
          Testimonials
        </h2>

        <div className="project-testimonials-block-content flex gap-5">
          <div className="testimonial-slider-content w-[100%]">
            <Testimonials />
          </div>

          {/* <div className="testimonial-right-block w-[35%]">
            <div className="testimonial-right-block-content flex justify-center flex-col">
              <div className="flex text-[#fff] text-[12px] font-[400] gap-2 text-left">
                <Image src={green}></Image>
                TESTIMONIALS
              </div>
              <h3 className="text-[#fff] font-[700] lg:text-[3rem] text-[2.5rem] lg:leading-[1] leading-[1.2]">
                6500 +
              </h3>
              <span className="text-[#D1DDFF] text-[14px] font-[500]">
                Happy Families
              </span>
              <p className="text-[11px] text-[#fff] leading[137%] font-[300] m-[8px_0_0_0]">
                Explore more projects with handy options. Let’s start to ping
                in.{" "}
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </TabPanel>

    <TabPanel classID="KingsSqure">
      <div className="project-floorplan-block m-[30px_0px_0px_0px]">
        <h2 className="section-sub-title text-[#1E1E1E] text-[30px] font-[600] m-[50px_0px_20px_0px]">
          Floor Type
        </h2>

        <FloorPlanSliderLegacy />
      </div>

      <div className="project-Specifications-block">
        <h2 className="section-sub-title text-[#1E1E1E] text-[30px] font-[600] m-[50px_0px_20px_0px]">
          Specifications
        </h2>

        <Specifications />
      </div>

      <div className="project-home-loans-block">
        <h2 className="section-sub-title text-[#1E1E1E] text-[30px] font-[600] m-[50px_0px_20px_0px]">
          Pre-approved Home Loan
        </h2>

        <HomeLoans />
      </div>

      {/* <OfferBanner /> */}

      <div className="project-progress-status-block">
        <h2 className="section-sub-title text-[#1E1E1E] text-[30px] font-[600] m-[50px_0px_20px_0px]">
          Progress Status
        </h2>

        <ProgressStatus />
      </div>

      <div className="project-location-map-block">
        <h2 className="section-sub-title text-[#1E1E1E] text-[30px] font-[600] m-[50px_0px_20px_0px]">
          Location Map
        </h2>

        <LocationMapLegacy />
      </div>

      <div className="project-testimonials-block">
        <h2 className="section-sub-title text-[#1E1E1E] text-[30px] font-[600] m-[50px_0px_20px_0px]">
          Testimonials
        </h2>

        <div className="project-testimonials-block-content flex gap-5">
          <div className="testimonial-slider-content w-[100%]">
            <Testimonials />
          </div>

          {/* <div className="testimonial-right-block w-[35%]">
            <div className="testimonial-right-block-content flex justify-center flex-col">
              <div className="flex text-[#fff] text-[12px] font-[400] gap-2 text-left">
                <Image src={green}></Image>
                TESTIMONIALS
              </div>
              <h3 className="text-[#fff] font-[700] lg:text-[3rem] text-[2.5rem] lg:leading-[1] leading-[1.2]">
                6500 +
              </h3>
              <span className="text-[#D1DDFF] text-[14px] font-[500]">
                Happy Families
              </span>
              <p className="text-[11px] text-[#fff] leading[137%] font-[300] m-[8px_0_0_0]">
                Explore more projects with handy options. Let’s start to ping
                in.{" "}
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </TabPanel>
  </Tabs>
);
