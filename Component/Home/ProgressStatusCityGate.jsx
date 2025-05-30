import React from "react";

import Image from "next/image";
import Gal1 from '@/public/img/gal-01.jpeg';
import Gal2 from '@/public/img/gal-2.jpeg';
import Gal3 from '@/public/img/gal-3.jpeg';
import Gal4 from '@/public/img/gal-4.jpeg';
import Gal5 from '@/public/img/gallery-05.jpg';
import Gal6 from '@/public/img/gal-6.jpeg';
import Gal7 from '@/public/img/gal-7.jpeg';
import Gal8 from '@/public/img/gal-8.jpeg';
import Gal9 from '@/public/img/gal-9.jpeg';
import Gal10 from '@/public/img/gal-10.jpeg';
import Gal11 from '@/public/img/gal-11.jpeg';
import Gal12 from '@/public/img/gal-12.jpeg';
import Gal13 from '@/public/img/gal-13.jpeg';
import Gal14 from '@/public/img/gal-14.jpeg';
import Gal15 from '@/public/img/gal-15.jpeg';
import Gal16 from '@/public/img/gal-16.jpeg';
import Gal17 from '@/public/img/gal-17.jpg';
import Gal18 from '@/public/img/gal-18.jpg';
import Gal19 from '@/public/img/gallery-08.jpg';

import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));




  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
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
              position: 'absolute',
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
    const [openS, setOpenS] = React.useState(false);

    const [openT, setOpenT] = React.useState(false);
    const [openU, setOpenU] = React.useState(false);
    const [openV, setOpenV] = React.useState(false);
    const [openW, setOpenW] = React.useState(false);



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
    const ProgressP = () => setOpenP(true);
    const handleCloseP = () => setOpenP(false);
    const ProgressQ = () => setOpenQ(true);
    const handleCloseQ = () => setOpenQ(false);
   

    const ProgressR = () => setOpenR(true);
    const handleCloseR = () => setOpenR(false);
    const ProgressS = () => setOpenS(true);
    const handleCloseS = () => setOpenS(false);
    const ProgressT = () => setOpenT(true);
    const handleCloseT = () => setOpenT(false);

    const ProgressU = () => setOpenU(true);
    const handleCloseU = () => setOpenU(false);
    const ProgressV = () => setOpenV(true);
    const handleCloseV = () => setOpenV(false);
    const ProgressW = () => setOpenW(true);
    const handleCloseW = () => setOpenW(false);


  return (



    <Swiper
    modules={[Navigation]}
    spaceBetween={20}
    slidesPerView={3}
    loop={true}
    navigation
    onSlideChange={() => console.log('slide change')}
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

        <div className="slider-content citygate-progress-image-block">
            <SwiperSlide className="relative">
                <Image onClick={ProgressA} className="slider-img  w-full " src={Gal1} />

                <BootstrapDialog className='testimony-modal'
                        open={openA}
                        onClose={handleCloseA}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseA}>
                        </BootstrapDialogTitle>
                        <DialogContent dividers>
                            <Image className="slider-img" src={Gal1} />
                        </DialogContent>
                </BootstrapDialog>
            </SwiperSlide>


            <SwiperSlide className="relative">
                <Image onClick={ProgressB} className="slider-img  w-full " src={Gal5} />

                <BootstrapDialog className='testimony-modal'
                        open={openB}
                        onClose={handleCloseB}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseB}>
                        </BootstrapDialogTitle>
                        <DialogContent dividers>
                            <Image className="slider-img" src={Gal5} />
                        </DialogContent>
                </BootstrapDialog>

            </SwiperSlide>

            <SwiperSlide className="relative">
                <Image onClick={ProgressC} className="slider-img  w-full " src={Gal7} />

                <BootstrapDialog className='testimony-modal'
                        open={openC}
                        onClose={handleCloseC}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseC}>
                        </BootstrapDialogTitle>
                        <DialogContent dividers>
                            <Image className="slider-img" src={Gal7} />
                        </DialogContent>
                </BootstrapDialog>

            </SwiperSlide>


            <SwiperSlide className="relative">
                <Image onClick={ProgressD} className="slider-img  w-full " src={Gal8} />

                <BootstrapDialog className='testimony-modal'
                        open={openD}
                        onClose={handleCloseD}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseD}>
                        </BootstrapDialogTitle>
                        <DialogContent dividers>
                            <Image className="slider-img" src={Gal8} />
                        </DialogContent>
                </BootstrapDialog>

            </SwiperSlide>


            <SwiperSlide className="relative">
                <Image onClick={ProgressE} className="slider-img  w-full " src={Gal9} />

                <BootstrapDialog className='testimony-modal'
                        open={openE}
                        onClose={handleCloseE}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseE}>
                        </BootstrapDialogTitle>
                        <DialogContent dividers>
                            <Image className="slider-img" src={Gal9} />
                        </DialogContent>
                </BootstrapDialog>

            </SwiperSlide>

            
            <SwiperSlide className="relative">
                <Image onClick={ProgressF} className="slider-img  w-full " src={Gal2} />

                <BootstrapDialog className='testimony-modal'
                        open={openF}
                        onClose={handleCloseF}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseF}>
                        </BootstrapDialogTitle>
                        <DialogContent dividers>
                            <Image className="slider-img" src={Gal2} />
                        </DialogContent>
                </BootstrapDialog>

            </SwiperSlide>

            
            <SwiperSlide className="relative">
                <Image onClick={ProgressG} className="slider-img  w-full " src={Gal3} />

                <BootstrapDialog className='testimony-modal'
                        open={openG}
                        onClose={handleCloseG}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseG}>
                        </BootstrapDialogTitle>
                        <DialogContent dividers>
                            <Image className="slider-img" src={Gal3} />
                        </DialogContent>
                </BootstrapDialog>

            </SwiperSlide>
     
     
            <SwiperSlide className="relative">
                <Image onClick={ProgressH} className="slider-img  w-full " src={Gal4} />

                <BootstrapDialog className='testimony-modal'
                        open={openH}
                        onClose={handleCloseH}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseH}>
                        </BootstrapDialogTitle>
                        <DialogContent dividers>
                            <Image className="slider-img" src={Gal4} />
                        </DialogContent>
                </BootstrapDialog>

            </SwiperSlide>

           
            <SwiperSlide className="relative">
                <Image onClick={ProgressI} className="slider-img  w-full " src={Gal6} />

                <BootstrapDialog className='testimony-modal'
                        open={openI}
                        onClose={handleCloseI}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseI}>
                        </BootstrapDialogTitle>
                        <DialogContent dividers>
                            <Image className="slider-img" src={Gal6} />
                        </DialogContent>
                </BootstrapDialog>

            </SwiperSlide>
            
            
            <SwiperSlide className="relative">
                <Image onClick={ProgressJ} className="slider-img  w-full " src={Gal7} />

                <BootstrapDialog className='testimony-modal'
                        open={openJ}
                        onClose={handleCloseJ}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseJ}>
                        </BootstrapDialogTitle>
                        <DialogContent dividers>
                            <Image className="slider-img" src={Gal7} />
                        </DialogContent>
                </BootstrapDialog>

            </SwiperSlide>

            <SwiperSlide className="relative">
                <Image onClick={ProgressK} className="slider-img  w-full " src={Gal8} />

                <BootstrapDialog className='testimony-modal'
                        open={openK}
                        onClose={handleCloseK}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseK}>
                        </BootstrapDialogTitle>
                        <DialogContent dividers>
                            <Image className="slider-img" src={Gal8} />
                        </DialogContent>
                </BootstrapDialog>

            </SwiperSlide>

            <SwiperSlide className="relative">
                <Image onClick={ProgressL} className="slider-img  w-full " src={Gal9} />

                <BootstrapDialog className='testimony-modal'
                        open={openL}
                        onClose={handleCloseL}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseL}>
                        </BootstrapDialogTitle>
                        <DialogContent dividers>
                            <Image className="slider-img" src={Gal9} />
                        </DialogContent>
                </BootstrapDialog>

            </SwiperSlide>
            
            <SwiperSlide className="relative">
                <Image onClick={ProgressM} className="slider-img  w-full " src={Gal10} />

                <BootstrapDialog className='testimony-modal'
                        open={openM}
                        onClose={handleCloseM}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseM}>
                        </BootstrapDialogTitle>
                        <DialogContent dividers>
                            <Image className="slider-img" src={Gal10} />
                        </DialogContent>
                </BootstrapDialog>

            </SwiperSlide>
            
            <SwiperSlide className="relative">
                <Image onClick={ProgressN} className="slider-img  w-full " src={Gal11} />

                <BootstrapDialog className='testimony-modal'
                        open={openN}
                        onClose={handleCloseN}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseN}>
                        </BootstrapDialogTitle>
                        <DialogContent dividers>
                            <Image className="slider-img" src={Gal11} />
                        </DialogContent>
                </BootstrapDialog>

            </SwiperSlide>
            
            
            <SwiperSlide className="relative">
                <Image onClick={ProgressO} className="slider-img  w-full " src={Gal12} />

                <BootstrapDialog className='testimony-modal'
                        open={openO}
                        onClose={handleCloseO}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseO}>
                        </BootstrapDialogTitle>
                        <DialogContent dividers>
                            <Image className="slider-img" src={Gal12} />
                        </DialogContent>
                </BootstrapDialog>
            </SwiperSlide>
            
            <SwiperSlide className="relative">
                <Image onClick={ProgressP} className="slider-img  w-full " src={Gal13} />

                <BootstrapDialog className='testimony-modal'
                        open={openP}
                        onClose={handleCloseP}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseP}>
                        </BootstrapDialogTitle>
                        <DialogContent dividers>
                            <Image className="slider-img" src={Gal13} />
                        </DialogContent>
                </BootstrapDialog>

            </SwiperSlide>

            <SwiperSlide className="relative">
                <Image onClick={ProgressQ} className="slider-img  w-full " src={Gal14} />

                <BootstrapDialog className='testimony-modal'
                        open={openQ}
                        onClose={handleCloseQ}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseQ}>
                        </BootstrapDialogTitle>
                        <DialogContent dividers>
                            <Image className="slider-img" src={Gal14} />
                        </DialogContent>
                </BootstrapDialog>

            </SwiperSlide>


            <SwiperSlide className="relative">
                <Image onClick={ProgressR} className="slider-img  w-full " src={Gal15} />

                <BootstrapDialog className='testimony-modal'
                        open={openR}
                        onClose={handleCloseR}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseR}>
                        </BootstrapDialogTitle>
                        <DialogContent dividers>
                            <Image className="slider-img" src={Gal15} />
                        </DialogContent>
                </BootstrapDialog>

            </SwiperSlide>

            <SwiperSlide className="relative">
                <Image onClick={ProgressS} className="slider-img  w-full " src={Gal16} />

                <BootstrapDialog className='testimony-modal'
                        open={openS}
                        onClose={handleCloseS}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseS}>
                        </BootstrapDialogTitle>
                        <DialogContent dividers>
                            <Image className="slider-img" src={Gal16} />
                        </DialogContent>
                </BootstrapDialog>

            </SwiperSlide>

            <SwiperSlide className="relative">
                <Image onClick={ProgressT} className="slider-img  w-full " src={Gal17} />

                <BootstrapDialog className='testimony-modal'
                        open={openT}
                        onClose={handleCloseT}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseT}>
                        </BootstrapDialogTitle>
                        <DialogContent dividers>
                            <Image className="slider-img" src={Gal17} />
                        </DialogContent>
                </BootstrapDialog>

            </SwiperSlide>

            <SwiperSlide className="relative">
                <Image onClick={ProgressU} className="slider-img  w-full " src={Gal18} />

                <BootstrapDialog className='testimony-modal'
                        open={openU}
                        onClose={handleCloseU}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseU}>
                        </BootstrapDialogTitle>
                        <DialogContent dividers>
                            <Image className="slider-img" src={Gal18} />
                        </DialogContent>
                </BootstrapDialog>

            </SwiperSlide>
        </div>
      
    </Swiper>
  );




  
};