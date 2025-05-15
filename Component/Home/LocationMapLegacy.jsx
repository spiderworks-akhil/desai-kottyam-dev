import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Image from "next/image";
import Mapbtn from '@/public/img/project-area-map-btn.svg';
import MapLocation from '@/public/img/legacy-heights-location.jpg';



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
  




    



  const LocationMap = () =>{


    const [openA, setOpenA] = React.useState(false);




    const FlooPlanA = () => setOpenA(true);
    const handleCloseA = () => setOpenA(false);
   




    return(


        <div className='location-block lg:flex gap-5 md:flex md:flex-row sm:flex-col '>
            <div className="location-map w-[100%] md:w-[50%] m-[0px_0px_20px]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d695.4070495841236!2d76.53445779807824!3d9.61107854723848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMzYnMzkuNyJOIDc2wrAzMicwNS40IkU!5e0!3m2!1sen!2sin!4v1700719134741!5m2!1sen!2sin" width="100%" height="420" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


            
                
                <div class="location-map-btn">
                    
                    <a href="#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6L9 3L15 6L21 3V18L15 21L9 18L3 21V6Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 3V18" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 6V21" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path></svg>View on Google Map</a>
                    
                </div>
            </div>



            <div className="location-map w-[100%] md:w-[50%] m-[0px_0px_20px]">
                <div className="location-map-dt">
                    <Image  onClick={FlooPlanA} className="" src={MapLocation} />
                </div>


                <Modal
                        open={openA}
                        onClose={handleCloseA}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                            
                        <Box sx={style} className="">
                        <Image className="slider-img" src={MapLocation} />
                        </Box>
                    </Modal>

            </div>
           
        </div>



        );
    };
    
    export default LocationMap;