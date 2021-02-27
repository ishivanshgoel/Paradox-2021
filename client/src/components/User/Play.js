import React from 'react'
import Countdown from './Countdown';
import Playarea from './Playarea';
/**
 * Level 2 Route - /user/play
 */
function Play() {
        const countdownDate=new Date('February 28, 2021 00:00:00').getTime();
        const now =new Date().getTime();
        const distance=countdownDate-now;
        if(distance<0){
            return (
                <div>
                    <Playarea/>
                </div>
            );
        }
        else{
            return(
            <div>
                <Countdown/>
            </div>
        );
    }
} 

export default Play;
