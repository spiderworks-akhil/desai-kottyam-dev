import React, {useState} from 'react';
import Image from "next/image";

import ProfileIcon from '@/public/img/profile-2user.svg'
import GraphIcon from '@/public/img/graph-bar.svg'
import StarIcon from '@/public/img/star.svg'
import BuildingsIcon from '@/public/img/buildings-2.svg'



const Status = () => {

    return(
        
        <>
            <div class="second-section">
                <div class="numbers-div flex items-center justify-between">
                    <div class="customers">
                        <div class="icon-number">
                            <Image src={ProfileIcon} alt='profile' width={50} height={50} />
                            <h6 class="numbers">6500+</h6>
                        </div>
                        <div class="numbers-description">Satisfied Customers</div>
                    </div>
                    <div class="customers">
                        <div class="icon-number">
                            <Image src={GraphIcon} alt='profile' width={50} height={50} />
                            <h6 class="numbers">61+</h6>
                        </div>
                        <div class="numbers-description">Completed And Ongoing Projects</div>
                    </div>
                    <div class="customers">
                        <div class="icon-number">
                            <Image src={StarIcon} alt='profile' width={50} height={50} />
                            <h6 class="numbers">32</h6>
                        </div>
                        <div class="numbers-description">Years Of Experience</div>
                    </div>
                    <div class="customers">
                        <div class="icon-number">
                            <Image src={BuildingsIcon} alt='profile' width={50} height={50} />
                            <h6 class="numbers">8.5</h6>
                        </div>
                        <div class="numbers-description">Million Sq.ft.Construction</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Status;