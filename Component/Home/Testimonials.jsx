import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

import Image from "next/image";
import Testimony1 from "@/public/img/testimony-img.jpg";
import Testimony2 from "@/public/img/testimony-img-08.jpg";
import Testimony3 from "@/public/img/testimony-img-02.jpg";
import Testimony4 from "@/public/img/testimony-img-03.jpg";
import Testimony5 from "@/public/img/testimony-img-04.jpg";
import Testimony6 from "@/public/img/testimony-img-05.jpg";
import Testimony7 from "@/public/img/testimony-img-06.jpg";
import Testimony8 from "@/public/img/testimony-img-07.jpg";
import Testimony9 from "@/public/img/testimony-img-09.png";
import Testimony10 from "@/public/img/testimony-img-10.png";
import TestimonyNew01 from "@/public/img/testi-new-01.png";
import TestimonyNew02 from "@/public/img/testi-new-02.png";
import TestimonyNew03 from "@/public/img/testi-new-03.png";
import TestimonyNew04 from "@/public/img/testi-new-04.png";
import TestimonyNew05 from "@/public/img/testi-new-05.png";
import TestimonyNew06 from "@/public/img/testi-new-06.png";
import TestimonyNew07 from "@/public/img/testi-new-07.png";
import TestimonyNew08 from "@/public/img/testi-new-08.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 0,
};

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);
  const [open8, setOpen8] = React.useState(false);
  const [open9, setOpen9] = React.useState(false);
  const [open10, setOpen10] = React.useState(false);
  const [open11, setOpen11] = React.useState(false);
  const [open12, setOpen12] = React.useState(false);
  const [open13, setOpen13] = React.useState(false);
  const [open14, setOpen14] = React.useState(false);
  const [open15, setOpen15] = React.useState(false);
  const [open16, setOpen16] = React.useState(false);
  const [open17, setOpen17] = React.useState(false);
  const [open18, setOpen18] = React.useState(false);

  const TestimonyA = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const TestimonyB = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const TestimonyC = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const TestimonyD = () => setOpen4(true);
  const handleClose4 = () => setOpen4(false);
  const TestimonyE = () => setOpen5(true);
  const handleClose5 = () => setOpen5(false);
  const TestimonyF = () => setOpen6(true);
  const handleClose6 = () => setOpen6(false);
  const TestimonyG = () => setOpen7(true);
  const handleClose7 = () => setOpen7(false);
  const TestimonyH = () => setOpen8(true);
  const handleClose8 = () => setOpen8(false);
  const TestimonyI = () => setOpen9(true);
  const handleClose9 = () => setOpen9(false);
  const TestimonyJ = () => setOpen10(true);
  const handleClose10 = () => setOpen10(false);
  const TestimonyK = () => setOpen11(true);
  const handleClose11 = () => setOpen11(false);
  const TestimonyL = () => setOpen12(true);
  const handleClose12 = () => setOpen12(false);




  const TestimonyM = () => setOpen13(true);
  const handleClose13 = () => setOpen13(false);
  const TestimonyN = () => setOpen14(true);
  const handleClose14 = () => setOpen14(false);
  const TestimonyO = () => setOpen15(true);
  const handleClose15 = () => setOpen15(false);
  const TestimonyP = () => setOpen16(true);
  const handleClose16 = () => setOpen16(false);
  const TestimonyQ = () => setOpen17(true);
  const handleClose17 = () => setOpen17(false);
  const TestimonyR = () => setOpen18(true);
  const handleClose18 = () => setOpen18(false);

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      navigation
      breakpoints={{
        320: {
          // width: 576,
          slidesPerView: 1,
        },

        400: {
          // width: 576,
          slidesPerView: 1,
        },
        768: {
          // width: 768,
          slidesPerView: 1,
        },
      }}
    >
      <div className="slider-content ">
        <SwiperSlide className="relative rounded-[10px] cursor-pointer">
          <Image
            onClick={TestimonyA}
            className="slider-img rounded-[10px]  w-full cursor-pointer"
            src={Testimony1}
          />

          <div
            className="testimony-text absolute left-[20px] bottom-[20px] flex gap-2 "
            onClick={TestimonyA}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_223_210)">
                <rect width="28" height="28" rx="7" fill="#16CC70" />
              </g>
              <path
                d="M10 9.75245C10 8.97815 10.8421 8.49761 11.5087 8.89152L19.543 13.6391C20.1981 14.0261 20.1981 14.9739 19.543 15.3609L11.5087 20.1085C10.8421 20.5024 10 20.0219 10 19.2476V9.75245Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_b_223_210"
                  x="-9"
                  y="-9"
                  width="46"
                  height="46"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.5" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_223_210"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_223_210"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            {/* <h4 className="text-[16px] font-[700] text-[#fff] ">
              Suresh & Family
            </h4> */}
          </div>

          <BootstrapDialog
            className="testimony-modal"
            open={open1}
            onClose={handleClose1}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose1}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
              <iframe
                width="100%"
                height="450"
                src="https://www.youtube.com/embed/OUv5Y5U9oyk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>

        <SwiperSlide className="relative rounded-[10px] cursor-pointer">
          <Image
            onClick={TestimonyB}
            className="slider-img rounded-[10px]  w-full cursor-pointer"
            src={Testimony2}
          />

          <div
            className="testimony-text absolute left-[20px] bottom-[20px] flex gap-2 "
            onClick={TestimonyB}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_223_210)">
                <rect width="28" height="28" rx="7" fill="#16CC70" />
              </g>
              <path
                d="M10 9.75245C10 8.97815 10.8421 8.49761 11.5087 8.89152L19.543 13.6391C20.1981 14.0261 20.1981 14.9739 19.543 15.3609L11.5087 20.1085C10.8421 20.5024 10 20.0219 10 19.2476V9.75245Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_b_223_210"
                  x="-9"
                  y="-9"
                  width="46"
                  height="46"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.5" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_223_210"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_223_210"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            {/* <h4 className="text-[16px] font-[700] text-[#fff] ">
              Suresh & Family
            </h4> */}
          </div>

          <BootstrapDialog
            className="testimony-modal"
            open={open2}
            onClose={handleClose2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose2}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
              <iframe
                width="100%"
                height="450"
                src="https://www.youtube.com/embed/EPGQyj8a1fE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>

        <SwiperSlide className="relative rounded-[10px] cursor-pointer">
          <Image
            onClick={TestimonyC}
            className="slider-img rounded-[10px]  w-full cursor-pointer"
            src={Testimony3}
          />

          <div
            className="testimony-text absolute left-[20px] bottom-[20px] flex gap-2 "
            onClick={TestimonyC}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_223_210)">
                <rect width="28" height="28" rx="7" fill="#16CC70" />
              </g>
              <path
                d="M10 9.75245C10 8.97815 10.8421 8.49761 11.5087 8.89152L19.543 13.6391C20.1981 14.0261 20.1981 14.9739 19.543 15.3609L11.5087 20.1085C10.8421 20.5024 10 20.0219 10 19.2476V9.75245Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_b_223_210"
                  x="-9"
                  y="-9"
                  width="46"
                  height="46"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.5" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_223_210"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_223_210"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            {/* <h4 className="text-[16px] font-[700] text-[#fff] ">
              Suresh & Family
            </h4> */}
          </div>

          <BootstrapDialog
            className="testimony-modal"
            open={open3}
            onClose={handleClose3}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose3}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
              <iframe
                width="100%"
                height="450"
                src="https://www.youtube.com/embed/2Zl6qNCaAIg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>

        <SwiperSlide className="relative rounded-[10px] cursor-pointer">
          <Image
            onClick={TestimonyD}
            className="slider-img rounded-[10px]  w-full cursor-pointer"
            src={Testimony4}
          />

          <div
            className="testimony-text absolute left-[20px] bottom-[20px] flex gap-2 "
            onClick={TestimonyD}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_223_210)">
                <rect width="28" height="28" rx="7" fill="#16CC70" />
              </g>
              <path
                d="M10 9.75245C10 8.97815 10.8421 8.49761 11.5087 8.89152L19.543 13.6391C20.1981 14.0261 20.1981 14.9739 19.543 15.3609L11.5087 20.1085C10.8421 20.5024 10 20.0219 10 19.2476V9.75245Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_b_223_210"
                  x="-9"
                  y="-9"
                  width="46"
                  height="46"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.5" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_223_210"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_223_210"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            {/* <h4 className="text-[16px] font-[700] text-[#fff] ">
              Suresh & Family
            </h4> */}
          </div>

          <BootstrapDialog
            className="testimony-modal"
            open={open4}
            onClose={handleClose4}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose4}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
              <iframe
                width="100%"
                height="450"
                src="https://www.youtube.com/embed/a7oOjm0kXVk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>

        <SwiperSlide className="relative rounded-[10px] cursor-pointer">
          <Image
            onClick={TestimonyE}
            className="slider-img rounded-[10px]  w-full cursor-pointer"
            src={Testimony5}
          />

          <div
            className="testimony-text absolute left-[20px] bottom-[20px] flex gap-2 "
            onClick={TestimonyE}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_223_210)">
                <rect width="28" height="28" rx="7" fill="#16CC70" />
              </g>
              <path
                d="M10 9.75245C10 8.97815 10.8421 8.49761 11.5087 8.89152L19.543 13.6391C20.1981 14.0261 20.1981 14.9739 19.543 15.3609L11.5087 20.1085C10.8421 20.5024 10 20.0219 10 19.2476V9.75245Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_b_223_210"
                  x="-9"
                  y="-9"
                  width="46"
                  height="46"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.5" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_223_210"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_223_210"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            {/* <h4 className="text-[16px] font-[700] text-[#fff] ">
              Suresh & Family
            </h4> */}
          </div>

          <BootstrapDialog
            className="testimony-modal"
            open={open5}
            onClose={handleClose5}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose5}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
              <iframe
                width="100%"
                height="450"
                src="https://www.youtube.com/embed/ChTMd7aPMfg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>

        <SwiperSlide className="relative rounded-[10px] cursor-pointer">
          <Image
            onClick={TestimonyF}
            className="slider-img rounded-[10px]  w-full cursor-pointer"
            src={Testimony6}
          />

          <div
            className="testimony-text absolute left-[20px] bottom-[20px] flex gap-2 "
            onClick={TestimonyF}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_223_210)">
                <rect width="28" height="28" rx="7" fill="#16CC70" />
              </g>
              <path
                d="M10 9.75245C10 8.97815 10.8421 8.49761 11.5087 8.89152L19.543 13.6391C20.1981 14.0261 20.1981 14.9739 19.543 15.3609L11.5087 20.1085C10.8421 20.5024 10 20.0219 10 19.2476V9.75245Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_b_223_210"
                  x="-9"
                  y="-9"
                  width="46"
                  height="46"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.5" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_223_210"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_223_210"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            {/* <h4 className="text-[16px] font-[700] text-[#fff] ">
              Suresh & Family
            </h4> */}
          </div>

          <BootstrapDialog
            className="testimony-modal"
            open={open6}
            onClose={handleClose6}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose6}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
              <iframe
                width="100%"
                height="450"
                src="https://www.youtube.com/embed/vQ7A0hAQQ-c"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>

        <SwiperSlide className="relative rounded-[10px] cursor-pointer">
          <Image
            onClick={TestimonyG}
            className="slider-img rounded-[10px]  w-full cursor-pointer"
            src={Testimony7}
          />

          <div
            className="testimony-text absolute left-[20px] bottom-[20px] flex gap-2 "
            onClick={TestimonyG}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_223_210)">
                <rect width="28" height="28" rx="7" fill="#16CC70" />
              </g>
              <path
                d="M10 9.75245C10 8.97815 10.8421 8.49761 11.5087 8.89152L19.543 13.6391C20.1981 14.0261 20.1981 14.9739 19.543 15.3609L11.5087 20.1085C10.8421 20.5024 10 20.0219 10 19.2476V9.75245Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_b_223_210"
                  x="-9"
                  y="-9"
                  width="46"
                  height="46"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.5" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_223_210"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_223_210"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            {/* <h4 className="text-[16px] font-[700] text-[#fff] ">
              Suresh & Family
            </h4> */}
          </div>

          <BootstrapDialog
            className="testimony-modal"
            open={open7}
            onClose={handleClose7}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose7}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
              <iframe
                width="100%"
                height="450"
                src="https://www.youtube.com/embed/xdubEmGuxuA?si=QsOCIe1RYWs3DJCc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>


        <SwiperSlide className="relative rounded-[10px] cursor-pointer">
          <Image
            onClick={TestimonyI}
            className="slider-img rounded-[10px]  w-full cursor-pointer"
            src={Testimony9}
          />

          <div
            className="testimony-text absolute left-[20px] bottom-[20px] flex gap-2 "
            onClick={TestimonyI}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_223_210)">
                <rect width="28" height="28" rx="7" fill="#16CC70" />
              </g>
              <path
                d="M10 9.75245C10 8.97815 10.8421 8.49761 11.5087 8.89152L19.543 13.6391C20.1981 14.0261 20.1981 14.9739 19.543 15.3609L11.5087 20.1085C10.8421 20.5024 10 20.0219 10 19.2476V9.75245Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_b_223_210"
                  x="-9"
                  y="-9"
                  width="46"
                  height="46"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.5" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_223_210"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_223_210"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            {/* <h4 className="text-[16px] font-[700] text-[#fff] ">
              Suresh & Family
            </h4> */}
          </div>

          <BootstrapDialog
            className="testimony-modal"
            open={open9}
            onClose={handleClose9}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose9}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
             <iframe width="100%" height="450" src="https://www.youtube.com/embed/5nlRGcDxkBE?si=9TzYDtWjSxdsI282" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>

        <SwiperSlide className="relative rounded-[10px] cursor-pointer">
          <Image
            onClick={TestimonyJ}
            className="slider-img rounded-[10px]  w-full cursor-pointer"
            src={Testimony10}
          />

          <div
            className="testimony-text absolute left-[20px] bottom-[20px] flex gap-2 "
            onClick={TestimonyJ}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_223_210)">
                <rect width="28" height="28" rx="7" fill="#16CC70" />
              </g>
              <path
                d="M10 9.75245C10 8.97815 10.8421 8.49761 11.5087 8.89152L19.543 13.6391C20.1981 14.0261 20.1981 14.9739 19.543 15.3609L11.5087 20.1085C10.8421 20.5024 10 20.0219 10 19.2476V9.75245Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_b_223_210"
                  x="-9"
                  y="-9"
                  width="46"
                  height="46"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.5" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_223_210"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_223_210"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            {/* <h4 className="text-[16px] font-[700] text-[#fff] ">
              Suresh & Family
            </h4> */}
          </div>

          <BootstrapDialog
            className="testimony-modal"
            open={open10}
            onClose={handleClose10}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose10}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
             <iframe width="100%" height="450" src="https://www.youtube.com/embed/IhdyIe7GP2o?si=Ot4B07DBryQwqic3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>














          <SwiperSlide className="relative rounded-[10px] cursor-pointer">
          <Image
            onClick={TestimonyK}
            className="slider-img rounded-[10px]  w-full cursor-pointer"
            src={TestimonyNew01}
          />

          <div
            className="testimony-text absolute left-[20px] bottom-[20px] flex gap-2 "
            onClick={TestimonyK}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_223_210)">
                <rect width="28" height="28" rx="7" fill="#16CC70" />
              </g>
              <path
                d="M10 9.75245C10 8.97815 10.8421 8.49761 11.5087 8.89152L19.543 13.6391C20.1981 14.0261 20.1981 14.9739 19.543 15.3609L11.5087 20.1085C10.8421 20.5024 10 20.0219 10 19.2476V9.75245Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_b_223_210"
                  x="-9"
                  y="-9"
                  width="46"
                  height="46"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.5" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_223_210"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_223_210"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            {/* <h4 className="text-[16px] font-[700] text-[#fff] ">
              Suresh & Family
            </h4> */}
          </div>

          <BootstrapDialog
            className="testimony-modal"
            open={open11}
            onClose={handleClose11}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose11}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
             <iframe width="100%" height="450" src="https://www.youtube.com/embed/sKCrGyU365Y?si=I6g3H5XZiiGxuf3s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>


          <SwiperSlide className="relative rounded-[10px] cursor-pointer">
          <Image
            onClick={TestimonyL}
            className="slider-img rounded-[10px]  w-full cursor-pointer"
            src={TestimonyNew02}
          />

          <div
            className="testimony-text absolute left-[20px] bottom-[20px] flex gap-2 "
            onClick={TestimonyL}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_223_210)">
                <rect width="28" height="28" rx="7" fill="#16CC70" />
              </g>
              <path
                d="M10 9.75245C10 8.97815 10.8421 8.49761 11.5087 8.89152L19.543 13.6391C20.1981 14.0261 20.1981 14.9739 19.543 15.3609L11.5087 20.1085C10.8421 20.5024 10 20.0219 10 19.2476V9.75245Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_b_223_210"
                  x="-9"
                  y="-9"
                  width="46"
                  height="46"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.5" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_223_210"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_223_210"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            {/* <h4 className="text-[16px] font-[700] text-[#fff] ">
              Suresh & Family
            </h4> */}
          </div>

          <BootstrapDialog
            className="testimony-modal"
            open={open12}
            onClose={handleClose12}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose12}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
           <iframe width="100%" height="450" src="https://www.youtube.com/embed/usNIHQYiJXw?si=4debm_DOfazhs0_4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>



          <SwiperSlide className="relative rounded-[10px] cursor-pointer">
          <Image
            onClick={TestimonyM}
            className="slider-img rounded-[10px]  w-full cursor-pointer"
            src={TestimonyNew03}
          />

          <div
            className="testimony-text absolute left-[20px] bottom-[20px] flex gap-2 "
            onClick={TestimonyM}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_223_210)">
                <rect width="28" height="28" rx="7" fill="#16CC70" />
              </g>
              <path
                d="M10 9.75245C10 8.97815 10.8421 8.49761 11.5087 8.89152L19.543 13.6391C20.1981 14.0261 20.1981 14.9739 19.543 15.3609L11.5087 20.1085C10.8421 20.5024 10 20.0219 10 19.2476V9.75245Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_b_223_210"
                  x="-9"
                  y="-9"
                  width="46"
                  height="46"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.5" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_223_210"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_223_210"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            {/* <h4 className="text-[16px] font-[700] text-[#fff] ">
              Suresh & Family
            </h4> */}
          </div>

          <BootstrapDialog
            className="testimony-modal"
            open={open13}
            onClose={handleClose13}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose13}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
            <iframe width="100%" height="450" src="https://www.youtube.com/embed/YGaGJo5zEqg?si=RH2vSqJf5KuOyhYH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>

          <SwiperSlide className="relative rounded-[10px] cursor-pointer">
          <Image
            onClick={TestimonyN}
            className="slider-img rounded-[10px]  w-full cursor-pointer"
            src={TestimonyNew04}
          />

          <div
            className="testimony-text absolute left-[20px] bottom-[20px] flex gap-2 "
            onClick={TestimonyN}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_223_210)">
                <rect width="28" height="28" rx="7" fill="#16CC70" />
              </g>
              <path
                d="M10 9.75245C10 8.97815 10.8421 8.49761 11.5087 8.89152L19.543 13.6391C20.1981 14.0261 20.1981 14.9739 19.543 15.3609L11.5087 20.1085C10.8421 20.5024 10 20.0219 10 19.2476V9.75245Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_b_223_210"
                  x="-9"
                  y="-9"
                  width="46"
                  height="46"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.5" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_223_210"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_223_210"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            {/* <h4 className="text-[16px] font-[700] text-[#fff] ">
              Suresh & Family
            </h4> */}
          </div>

          <BootstrapDialog
            className="testimony-modal"
            open={open14}
            onClose={handleClose14}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose14}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
             <iframe width="100%" height="450" src="https://www.youtube.com/embed/XCmCGKAV68Q?si=IjBx9DU98kjhMqfc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>

          <SwiperSlide className="relative rounded-[10px] cursor-pointer">
          <Image
            onClick={TestimonyO}
            className="slider-img rounded-[10px]  w-full cursor-pointer"
            src={TestimonyNew05}
          />

          <div
            className="testimony-text absolute left-[20px] bottom-[20px] flex gap-2 "
            onClick={TestimonyO}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_223_210)">
                <rect width="28" height="28" rx="7" fill="#16CC70" />
              </g>
              <path
                d="M10 9.75245C10 8.97815 10.8421 8.49761 11.5087 8.89152L19.543 13.6391C20.1981 14.0261 20.1981 14.9739 19.543 15.3609L11.5087 20.1085C10.8421 20.5024 10 20.0219 10 19.2476V9.75245Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_b_223_210"
                  x="-9"
                  y="-9"
                  width="46"
                  height="46"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.5" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_223_210"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_223_210"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            {/* <h4 className="text-[16px] font-[700] text-[#fff] ">
              Suresh & Family
            </h4> */}
          </div>

          <BootstrapDialog
            className="testimony-modal"
            open={open15}
            onClose={handleClose15}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose15}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
            <iframe width="100%" height="450" src="https://www.youtube.com/embed/1oEVNY2_u3Y?si=lZ2dnAxf0ThkyNGj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>

          <SwiperSlide className="relative rounded-[10px] cursor-pointer">
          <Image
            onClick={TestimonyP}
            className="slider-img rounded-[10px]  w-full cursor-pointer"
            src={TestimonyNew06}
          />

          <div
            className="testimony-text absolute left-[20px] bottom-[20px] flex gap-2 "
            onClick={TestimonyP}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_223_210)">
                <rect width="28" height="28" rx="7" fill="#16CC70" />
              </g>
              <path
                d="M10 9.75245C10 8.97815 10.8421 8.49761 11.5087 8.89152L19.543 13.6391C20.1981 14.0261 20.1981 14.9739 19.543 15.3609L11.5087 20.1085C10.8421 20.5024 10 20.0219 10 19.2476V9.75245Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_b_223_210"
                  x="-9"
                  y="-9"
                  width="46"
                  height="46"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.5" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_223_210"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_223_210"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            {/* <h4 className="text-[16px] font-[700] text-[#fff] ">
              Suresh & Family
            </h4> */}
          </div>

          <BootstrapDialog
            className="testimony-modal"
            open={open16}
            onClose={handleClose16}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose16}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
             <iframe width="100%" height="450" src="https://www.youtube.com/embed/n6Gwv6W4HfM?si=IhQy918ADY4HX4Pu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>

          <SwiperSlide className="relative rounded-[10px] cursor-pointer">
          <Image
            onClick={TestimonyQ}
            className="slider-img rounded-[10px]  w-full cursor-pointer"
            src={TestimonyNew07}
          />

          <div
            className="testimony-text absolute left-[20px] bottom-[20px] flex gap-2 "
            onClick={TestimonyQ}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_223_210)">
                <rect width="28" height="28" rx="7" fill="#16CC70" />
              </g>
              <path
                d="M10 9.75245C10 8.97815 10.8421 8.49761 11.5087 8.89152L19.543 13.6391C20.1981 14.0261 20.1981 14.9739 19.543 15.3609L11.5087 20.1085C10.8421 20.5024 10 20.0219 10 19.2476V9.75245Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_b_223_210"
                  x="-9"
                  y="-9"
                  width="46"
                  height="46"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.5" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_223_210"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_223_210"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            {/* <h4 className="text-[16px] font-[700] text-[#fff] ">
              Suresh & Family
            </h4> */}
          </div>

          <BootstrapDialog
            className="testimony-modal"
            open={open17}
            onClose={handleClose17}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose17}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
             <iframe width="100%" height="450" src="https://www.youtube.com/embed/FgzijG881ec?si=o4v4sqP-DDdOiMLy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>


         <SwiperSlide className="relative rounded-[10px] cursor-pointer">
          <Image
            onClick={TestimonyR}
            className="slider-img rounded-[10px]  w-full cursor-pointer"
            src={TestimonyNew08}
          />

          <div
            className="testimony-text absolute left-[20px] bottom-[20px] flex gap-2 "
            onClick={TestimonyR}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_223_210)">
                <rect width="28" height="28" rx="7" fill="#16CC70" />
              </g>
              <path
                d="M10 9.75245C10 8.97815 10.8421 8.49761 11.5087 8.89152L19.543 13.6391C20.1981 14.0261 20.1981 14.9739 19.543 15.3609L11.5087 20.1085C10.8421 20.5024 10 20.0219 10 19.2476V9.75245Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_b_223_210"
                  x="-9"
                  y="-9"
                  width="46"
                  height="46"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.5" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_223_210"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_223_210"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            {/* <h4 className="text-[16px] font-[700] text-[#fff] ">
              Suresh & Family
            </h4> */}
          </div>

          <BootstrapDialog
            className="testimony-modal"
            open={open18}
            onClose={handleClose18}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose18}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
            <iframe width="100%" height="450" src="https://www.youtube.com/embed/6KR9_IXJFz4?si=FBn8rgZ5b_JofRqC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>
      </div>
    </Swiper>
  );
}
