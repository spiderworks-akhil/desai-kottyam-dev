import React, {useState} from 'react';

import SelectProjectTab from './SelectProjectTab';

import Sticky from "./Sticky";



const ProjectDetail = () => {
    return(

        <div className='project-details-block flex gap-10 relative '>
            <div className='project-detail-block-01 lg:w-[70%] w-full p-[0px_0px_0px_0px]'>
                <div className='project-detail-block-item'>
                    <h2 className='section-sub-title text-[#1E1E1E] text-[30px] font-[600] m-[0px_0px_20px_0px]'>Select Project</h2>

                    <SelectProjectTab />

                </div>
            </div>


            <Sticky />

            


            
        </div>

        );
    };



    export default ProjectDetail;

