import React from "react"

import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"

import Image from "next/image"
import FloorPlan1 from "@/public/img/Majestic-type-a-updated.webp"
import FloorPlan2 from "@/public/img/Majestic-type-b-updated.webp"
import FloorPlan3 from "@/public/img/Majestic-type-c-updated.webp"
import FloorPlan4 from "@/public/img/Majestic-type-d-updated.webp"
import FloorPlan5 from "@/public/img/Majestic-type-e-updated.webp"
import FloorPlan6 from "@/public/img/Majestic-type-f-updated.webp"
import FloorPlan7 from "@/public/img/Majestic-type-g-updated.webp"
import FloorPlan8 from "@/public/img/Majestic-type-h-updated.webp"
import FloorPlan9 from "@/public/img/Majestic-typical-updated.webp"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxwidth: "500px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 0,
}

export default function BasicModal() {
  const [openA, setOpenA] = React.useState(false)
  const [openB, setOpenB] = React.useState(false)
  const [openC, setOpenC] = React.useState(false)
  const [openD, setOpenD] = React.useState(false)
  const [openE, setOpenE] = React.useState(false)
  const [openF, setOpenF] = React.useState(false)
  const [openG, setOpenG] = React.useState(false)
  const [openH, setOpenH] = React.useState(false)
  const [openI, setOpenI] = React.useState(false)
  const [openJ, setOpenJ] = React.useState(false)
  const [openK, setOpenK] = React.useState(false)
  const [openL, setOpenL] = React.useState(false)
  const [openSitePlan, setOpenSitePlan] = React.useState(false)

  const FlooPlanA = () => setOpenA(true)
  const handleCloseA = () => setOpenA(false)
  const FlooPlanB = () => setOpenB(true)
  const handleCloseB = () => setOpenB(false)
  const FlooPlanC = () => setOpenC(true)
  const handleCloseC = () => setOpenC(false)
  const FlooPlanD = () => setOpenD(true)
  const handleCloseD = () => setOpenD(false)
  const FlooPlanE = () => setOpenE(true)
  const handleCloseE = () => setOpenE(false)
  const FlooPlanF = () => setOpenF(true)
  const handleCloseF = () => setOpenF(false)
  const FlooPlanG = () => setOpenG(true)
  const handleCloseG = () => setOpenG(false)
  const FlooPlanH = () => setOpenH(true)
  const handleCloseH = () => setOpenH(false)
  const FlooPlanI = () => setOpenI(true)
  const handleCloseI = () => setOpenI(false)
  const FlooPlanJ = () => setOpenJ(true)
  const handleCloseJ = () => setOpenJ(false)
  const FlooPlanK = () => setOpenK(true)
  const handleCloseK = () => setOpenK(false)
  const FlooPlanL = () => setOpenL(true)
  const handleCloseL = () => setOpenL(false)
  const FlooPlanSitePlan = () => setOpenSitePlan(true)
  const handleCloseSitePlan = () => setOpenSitePlan(false)

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      breakpoints={{
        320: {
          // width: 576,
          slidesPerView: 1,
        },

        400: {
          // width: 576,
          slidesPerView: 2,
        },
        768: {
          // width: 768,
          slidesPerView: 3,
        },
      }}
    >
      <div className="slider-content ">
        <SwiperSlide className="relative">
          <Image className="slider-img  w-full " src={FloorPlan1} />

          <div className="floor-plan-text ">
            <h4 className="text-[14px] font-[700] text-[#fff] text-center absolute left-[50%] top-[50%] ">
              Floor Plan A
            </h4>

            <span onClick={FlooPlanA} className="pop-icon">
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="13.5" cy="13.5" r="13.5" fill="#16CC70" />
                <path
                  d="M13.1332 17.8288C15.7265 17.8288 17.8288 15.7265 17.8288 13.1332C17.8288 10.5398 15.7265 8.4375 13.1332 8.4375C10.5398 8.4375 8.4375 10.5398 8.4375 13.1332C8.4375 15.7265 10.5398 17.8288 13.1332 17.8288Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.003 19.0027L16.6552 16.6548"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.1329 11.3723V14.8941"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.3716 13.1331H14.8933"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>

            <Modal
              open={openA}
              onClose={handleCloseA}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} className="">
                <Image className="slider-img" src={FloorPlan1} />
              </Box>
            </Modal>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image className="slider-img  w-full " src={FloorPlan2} />

          <div className="floor-plan-text ">
            <h4 className="text-[14px] font-[700] text-[#fff] text-center absolute left-[50%] top-[50%] ">
              Floor Plan B
            </h4>

            <span onClick={FlooPlanB} className="pop-icon">
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="13.5" cy="13.5" r="13.5" fill="#16CC70" />
                <path
                  d="M13.1332 17.8288C15.7265 17.8288 17.8288 15.7265 17.8288 13.1332C17.8288 10.5398 15.7265 8.4375 13.1332 8.4375C10.5398 8.4375 8.4375 10.5398 8.4375 13.1332C8.4375 15.7265 10.5398 17.8288 13.1332 17.8288Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.003 19.0027L16.6552 16.6548"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.1329 11.3723V14.8941"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.3716 13.1331H14.8933"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>

            <Modal
              open={openB}
              onClose={handleCloseB}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} className="">
                <Image className="slider-img" src={FloorPlan2} />
              </Box>
            </Modal>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image className="slider-img  w-full " src={FloorPlan3} />

          <div className="floor-plan-text ">
            <h4 className="text-[14px] font-[700] text-[#fff] text-center absolute left-[50%] top-[50%] ">
              Floor Plan C
            </h4>

            <span onClick={FlooPlanC} className="pop-icon">
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="13.5" cy="13.5" r="13.5" fill="#16CC70" />
                <path
                  d="M13.1332 17.8288C15.7265 17.8288 17.8288 15.7265 17.8288 13.1332C17.8288 10.5398 15.7265 8.4375 13.1332 8.4375C10.5398 8.4375 8.4375 10.5398 8.4375 13.1332C8.4375 15.7265 10.5398 17.8288 13.1332 17.8288Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.003 19.0027L16.6552 16.6548"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.1329 11.3723V14.8941"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.3716 13.1331H14.8933"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>

            <Modal
              open={openC}
              onClose={handleCloseC}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} className="">
                <Image className="slider-img" src={FloorPlan3} />
              </Box>
            </Modal>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image className="slider-img  w-full " src={FloorPlan4} />

          <div className="floor-plan-text ">
            <h4 className="text-[14px] font-[700] text-[#fff] text-center absolute left-[50%] top-[50%] ">
              Floor Plan D
            </h4>

            <span onClick={FlooPlanD} className="pop-icon">
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="13.5" cy="13.5" r="13.5" fill="#16CC70" />
                <path
                  d="M13.1332 17.8288C15.7265 17.8288 17.8288 15.7265 17.8288 13.1332C17.8288 10.5398 15.7265 8.4375 13.1332 8.4375C10.5398 8.4375 8.4375 10.5398 8.4375 13.1332C8.4375 15.7265 10.5398 17.8288 13.1332 17.8288Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.003 19.0027L16.6552 16.6548"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.1329 11.3723V14.8941"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.3716 13.1331H14.8933"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>

            <Modal
              open={openD}
              onClose={handleCloseD}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} className="">
                <Image className="slider-img" src={FloorPlan4} />
              </Box>
            </Modal>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image className="slider-img  w-full " src={FloorPlan5} />
          <div className="floor-plan-text ">
            <h4 className="text-[14px] font-[700] text-[#fff] text-center absolute left-[50%] top-[50%] ">
              Floor Plan E
            </h4>

            <span onClick={FlooPlanE} className="pop-icon">
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="13.5" cy="13.5" r="13.5" fill="#16CC70" />
                <path
                  d="M13.1332 17.8288C15.7265 17.8288 17.8288 15.7265 17.8288 13.1332C17.8288 10.5398 15.7265 8.4375 13.1332 8.4375C10.5398 8.4375 8.4375 10.5398 8.4375 13.1332C8.4375 15.7265 10.5398 17.8288 13.1332 17.8288Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.003 19.0027L16.6552 16.6548"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.1329 11.3723V14.8941"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.3716 13.1331H14.8933"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>

            <Modal
              open={openE}
              onClose={handleCloseE}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} className="">
                <Image className="slider-img" src={FloorPlan5} />
              </Box>
            </Modal>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image className="slider-img  w-full " src={FloorPlan6} />
          <div className="floor-plan-text ">
            <h4 className="text-[14px] font-[700] text-[#fff] text-center absolute left-[50%] top-[50%] ">
              Floor Plan F
            </h4>

            <span onClick={FlooPlanF} className="pop-icon">
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="13.5" cy="13.5" r="13.5" fill="#16CC70" />
                <path
                  d="M13.1332 17.8288C15.7265 17.8288 17.8288 15.7265 17.8288 13.1332C17.8288 10.5398 15.7265 8.4375 13.1332 8.4375C10.5398 8.4375 8.4375 10.5398 8.4375 13.1332C8.4375 15.7265 10.5398 17.8288 13.1332 17.8288Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.003 19.0027L16.6552 16.6548"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.1329 11.3723V14.8941"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.3716 13.1331H14.8933"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>

            <Modal
              open={openF}
              onClose={handleCloseF}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} className="">
                <Image className="slider-img" src={FloorPlan6} />
              </Box>
            </Modal>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image className="slider-img  w-full " src={FloorPlan7} />
          <div className="floor-plan-text ">
            <h4 className="text-[14px] font-[700] text-[#fff] text-center absolute left-[50%] top-[50%] ">
              Floor Plan G
            </h4>

            <span onClick={FlooPlanG} className="pop-icon">
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="13.5" cy="13.5" r="13.5" fill="#16CC70" />
                <path
                  d="M13.1332 17.8288C15.7265 17.8288 17.8288 15.7265 17.8288 13.1332C17.8288 10.5398 15.7265 8.4375 13.1332 8.4375C10.5398 8.4375 8.4375 10.5398 8.4375 13.1332C8.4375 15.7265 10.5398 17.8288 13.1332 17.8288Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.003 19.0027L16.6552 16.6548"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.1329 11.3723V14.8941"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.3716 13.1331H14.8933"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>

            <Modal
              open={openG}
              onClose={handleCloseG}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} className="">
                <Image className="slider-img" src={FloorPlan7} />
              </Box>
            </Modal>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image className="slider-img  w-full " src={FloorPlan8} />
          <div className="floor-plan-text ">
            <h4 className="text-[14px] font-[700] text-[#fff] text-center absolute left-[50%] top-[50%] ">
              Floor Plan H
            </h4>

            <span onClick={FlooPlanH} className="pop-icon">
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="13.5" cy="13.5" r="13.5" fill="#16CC70" />
                <path
                  d="M13.1332 17.8288C15.7265 17.8288 17.8288 15.7265 17.8288 13.1332C17.8288 10.5398 15.7265 8.4375 13.1332 8.4375C10.5398 8.4375 8.4375 10.5398 8.4375 13.1332C8.4375 15.7265 10.5398 17.8288 13.1332 17.8288Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.003 19.0027L16.6552 16.6548"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.1329 11.3723V14.8941"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.3716 13.1331H14.8933"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>

            <Modal
              open={openH}
              onClose={handleCloseH}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} className="">
                <Image className="slider-img" src={FloorPlan8} />
              </Box>
            </Modal>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image className="slider-img  w-full " src={FloorPlan9} />
          <div className="floor-plan-text ">
            <h4 className="text-[14px] font-[700] text-[#fff] text-center absolute left-[50%] top-[50%] ">
              Typical Floor Plan
            </h4>

            <span onClick={FlooPlanI} className="pop-icon">
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="13.5" cy="13.5" r="13.5" fill="#16CC70" />
                <path
                  d="M13.1332 17.8288C15.7265 17.8288 17.8288 15.7265 17.8288 13.1332C17.8288 10.5398 15.7265 8.4375 13.1332 8.4375C10.5398 8.4375 8.4375 10.5398 8.4375 13.1332C8.4375 15.7265 10.5398 17.8288 13.1332 17.8288Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.003 19.0027L16.6552 16.6548"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.1329 11.3723V14.8941"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.3716 13.1331H14.8933"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>

            <Modal
              open={openI}
              onClose={handleCloseI}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} className="">
                <Image className="slider-img" src={FloorPlan9} />
              </Box>
            </Modal>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  )
}
