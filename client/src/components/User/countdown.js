import React, {useEffect,useRef,useState} from 'react'

//CSS
import './countdown.css'

/**
 * @author Sanika
 */
const Countdown = ({countdownDate}) => {
    const [timerDays,setTimerDays]=useState('00');
    const[timerHours,setTimerHours]=useState('00');
    const[timerMinutes,setTimerMinutes]=useState('00');
    const[timerSeconds,setTimerSeconds]=useState('00');
    let interval=useRef();
    const startTimer= () => {
        interval=setInterval(()=>{
            const now =new Date().getTime();
            const distance=countdownDate-now;
            const days=Math.floor(distance/(1000*60*60*24));
            const hours=Math.floor((distance%(1000*60 *60*24)/(1000*60*60)));
            const minutes=Math.floor((distance%(1000*60 *60))/(1000*60));
            const seconds=Math.floor((distance%(1000*60))/1000);
            if(distance<0){
                //stop timer and load Play Area
                clearInterval(interval.current);
                window.location.reload();
            }
            else
            {
                //update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        },1000);
    }
    useEffect(()=>{
        startTimer();
        return ()=>{
            clearInterval(interval.current);
        };
    })
    return (
        <section className="Countdown_heading">
            <section className="timer">
                <div>
                    <h2>Paradox is coming soon...</h2>
                    <p>Just few more days left!</p>
                </div>
                <div>
                    <section className="timer_section">
                        <p>{timerDays}</p>
                        <p><small>Days</small></p>
                    </section>
                    <span>:</span>
                    <section className="timer_section">
                        <p>{timerHours}</p>
                        <p><small>Hours</small></p>
                    </section>

                    <span>:</span>
                    <section className="timer_section">
                        <p>{timerMinutes}</p>
                        <p><small>Minutes</small></p>
                    </section>

                    <span>:</span>
                    <section className="timer_section">
                        <p>{timerSeconds}</p>
                        <p><small>Seconds</small></p>
                    </section>
                </div>
            </section>
        </section>
    )
}
export default Countdown;