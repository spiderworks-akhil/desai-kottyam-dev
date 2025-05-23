import React from "react";

import Image from "next/image";
import Progress1 from "@/public/img/progress-img-01.jpeg";
import Progress2 from "@/public/img/progress-img-02.jpeg";
import Progress3 from "@/public/img/progress-img-03.jpeg";
import Progress4 from "@/public/img/progress-img-04.jpeg";
import Progress5 from "@/public/img/progress-img-05.jpeg";
import Progress6 from "@/public/img/progress-img-06.jpeg";
import Progress7 from "@/public/img/progress-img-07.jpeg";
import Progress8 from "@/public/img/progress-img-08.jpeg";
import Progress9 from "@/public/img/progress-img-09.jpeg";
import Progress10 from "@/public/img/progress-img-10.jpeg";
import Progress11 from "@/public/img/progress-img-11.jpeg";
import Progress12 from "@/public/img/progress-img-12.jpeg";
import Progress13 from "@/public/img/progress-img-13.jpeg";
import Progress14 from "@/public/img/progress-img-14.jpeg";
import Progress15 from "@/public/img/progress-img-15.jpeg";
import Progress16 from "@/public/img/progress-img-16.jpeg";
import Progress17 from "@/public/img/progress-img-17.jpeg";
import PlayIcon from "@/public/img/play-icon.svg";

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
  const [openA, setOpenA] = React.useState(false);
  const [openB, setOpenB] = React.useState(false);
  const [openC, setOpenC] = React.useState(false);
  const [openD, setOpenD] = React.useState(false);
  const [openE, setOpenE] = React.useState(false);
  const [openF, setOpenF] = React.useState(false);
  const [openG, setOpenG] = React.useState(false);
  const [openH, setOpenH] = React.useState(false);
  const [openI, setOpenI] = React.useState(false);
  const [openJ, setOpenJ] = React.useState(false);
  const [openK, setOpenK] = React.useState(false);
  const [openL, setOpenL] = React.useState(false);
  const [openM, setOpenM] = React.useState(false);
  const [openN, setOpenN] = React.useState(false);
  const [openO, setOpenO] = React.useState(false);
  const [openP, setOpenP] = React.useState(false);
  const [openQ, setOpenQ] = React.useState(false);
  const [openR, setOpenR] = React.useState(false);
  const ProgressA = () => setOpenA(true);
  const handleCloseA = () => setOpenA(false);
  const ProgressB = () => setOpenB(true);
  const handleCloseB = () => setOpenB(false);
  const ProgressC = () => setOpenC(true);
  const handleCloseC = () => setOpenC(false);
  const ProgressD = () => setOpenD(true);
  const handleCloseD = () => setOpenD(false);
  const ProgressE = () => setOpenE(true);
  const handleCloseE = () => setOpenE(false);
  const ProgressF = () => setOpenF(true);
  const handleCloseF = () => setOpenF(false);
  const ProgressG = () => setOpenG(true);
  const handleCloseG = () => setOpenG(false);
  const ProgressH = () => setOpenH(true);
  const handleCloseH = () => setOpenH(false);
  const ProgressI = () => setOpenI(true);
  const handleCloseI = () => setOpenI(false);
  const ProgressJ = () => setOpenJ(true);
  const handleCloseJ = () => setOpenJ(false);
  const ProgressK = () => setOpenK(true);
  const handleCloseK = () => setOpenK(false);
  const ProgressL = () => setOpenL(true);
  const handleCloseL = () => setOpenL(false);
  const ProgressM = () => setOpenM(true);
  const handleCloseM = () => setOpenM(false);
  const ProgressN = () => setOpenN(true);
  const handleCloseN = () => setOpenN(false);
  const ProgressO = () => setOpenO(true);
  const handleCloseO = () => setOpenO(false);
  const handleCloseP = () => setOpenP(false);
  const handleCloseQ = () => setOpenQ(false);
  const handleCloseR = () => setOpenR(false);
  const ProgressR = () => setOpenR(true);
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={3}
      loop={true}
      navigation
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
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
          <Image
            onClick={ProgressR}
            className="slider-img  w-full "
            src={Progress17}
          />

          <svg
            onClick={ProgressR}
            width="82"
            height="64"
            viewBox="0 0 82 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.9" filter="url(#filter0_b_407_677)">
              <circle cx="59" cy="24" r="23" fill="white" fill-opacity="0.61" />
            </g>
            <circle cx="58.9596" cy="23.8238" r="18.7701" fill="white" />
            <g filter="url(#filter1_d_407_677)">
              <path
                d="M53 17.8864C53 16.2596 54.8387 15.3134 56.1625 16.2589L66.3811 23.5579C67.5874 24.4196 67.4698 26.2483 66.1631 26.9484L55.9444 32.4226C54.6121 33.1364 53 32.1711 53 30.6597V17.8864Z"
                fill="url(#paint0_linear_407_677)"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_407_677"
                x="32"
                y="-3"
                width="54"
                height="54"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_407_677"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_407_677"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_407_677"
                x="0"
                y="0.882812"
                width="67.2188"
                height="62.7795"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="4"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect1_dropShadow_407_677"
                />
                <feOffset dx="-30" dy="8" />
                <feGaussianBlur stdDeviation="13.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.376471 0 0 0 0 0.443137 0 0 0 0.01 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_407_677"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_407_677"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_407_677"
                x1="25.6125"
                y1="59.5627"
                x2="76.6443"
                y2="25.4286"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CFFFE7" />
                <stop offset="1" stop-color="#16CC70" />
              </linearGradient>
            </defs>
          </svg>

          <BootstrapDialog
            className="testimony-modal"
            open={openR}
            onClose={handleCloseR}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleCloseR}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
             <iframe width="100%" height="450" src="https://www.youtube.com/embed/pMxb4X1CloU?si=z0E4YKRaJOrCPtui" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image
            onClick={ProgressA}
            className="slider-img  w-full "
            src={Progress1}
          />

          <BootstrapDialog
            className="testimony-modal"
            open={openA}
            onClose={handleCloseA}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleCloseA}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
              <Image className="slider-img" src={Progress1} />
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Image
            onClick={ProgressB}
            className="slider-img  w-full "
            src={Progress2}
          />

          <BootstrapDialog
            className="testimony-modal"
            open={openB}
            onClose={handleCloseB}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleCloseB}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
              <Image className="slider-img" src={Progress2} />
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Image
            onClick={ProgressC}
            className="slider-img  w-full "
            src={Progress3}
          />

          <BootstrapDialog
            className="testimony-modal"
            open={openC}
            onClose={handleCloseC}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleCloseC}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
              <Image className="slider-img" src={Progress3} />
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Image
            onClick={ProgressD}
            className="slider-img  w-full "
            src={Progress4}
          />

          <BootstrapDialog
            className="testimony-modal"
            open={openD}
            onClose={handleCloseD}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleCloseD}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
              <Image className="slider-img" src={Progress4} />
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image
            onClick={ProgressE}
            className="slider-img  w-full "
            src={Progress5}
          />

          <BootstrapDialog
            className="testimony-modal"
            open={openE}
            onClose={handleCloseE}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleCloseE}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
              <Image className="slider-img" src={Progress5} />
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image
            onClick={ProgressG}
            className="slider-img  w-full "
            src={Progress6}
          />

          <BootstrapDialog
            className="testimony-modal"
            open={openG}
            onClose={handleCloseG}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleCloseG}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
              <Image className="slider-img" src={Progress7} />
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image
            onClick={ProgressH}
            className="slider-img  w-full "
            src={Progress7}
          />

          <BootstrapDialog
            className="testimony-modal"
            open={openH}
            onClose={handleCloseH}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleCloseH}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
              <Image className="slider-img" src={Progress8} />
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image
            onClick={ProgressI}
            className="slider-img  w-full "
            src={Progress8}
          />

          <BootstrapDialog
            className="testimony-modal"
            open={openI}
            onClose={handleCloseI}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleCloseI}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
              <Image className="slider-img" src={Progress9} />
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image
            onClick={ProgressJ}
            className="slider-img  w-full "
            src={Progress9}
          />

          <BootstrapDialog
            className="testimony-modal"
            open={openJ}
            onClose={handleCloseJ}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleCloseJ}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
              <Image className="slider-img" src={Progress10} />
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image
            onClick={ProgressK}
            className="slider-img  w-full "
            src={Progress10}
          />

          <BootstrapDialog
            className="testimony-modal"
            open={openK}
            onClose={handleCloseK}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleCloseK}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
              <Image className="slider-img" src={Progress10} />
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image
            onClick={ProgressL}
            className="slider-img  w-full "
            src={Progress11}
          />

          <BootstrapDialog
            className="testimony-modal"
            open={openL}
            onClose={handleCloseL}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleCloseL}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
              <Image className="slider-img" src={Progress11} />
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image
            onClick={ProgressM}
            className="slider-img  w-full "
            src={Progress12}
          />

          <BootstrapDialog
            className="testimony-modal"
            open={openM}
            onClose={handleCloseM}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleCloseM}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
              <Image className="slider-img" src={Progress12} />
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image
            onClick={ProgressN}
            className="slider-img  w-full "
            src={Progress13}
          />

          <BootstrapDialog
            className="testimony-modal"
            open={openN}
            onClose={handleCloseN}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleCloseN}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
              <Image className="slider-img" src={Progress13} />
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image
            onClick={Progress15}
            className="slider-img  w-full "
            src={Progress15}
          />

          <BootstrapDialog
            className="testimony-modal"
            open={openP}
            onClose={handleCloseP}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleCloseP}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
              <Image className="slider-img" src={Progress15} />
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image className="slider-img  w-full " src={Progress16} />

          <BootstrapDialog
            className="testimony-modal"
            open={openQ}
            onClose={handleCloseQ}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleCloseQ}
            ></BootstrapDialogTitle>
            <DialogContent dividers>
              <Image className="slider-img" src={Progress16} />
            </DialogContent>
          </BootstrapDialog>
        </SwiperSlide>
      </div>
    </Swiper>
  );
}
