import React, {useEffect,useRef,useState} from 'react'
import './countdown.css'
// import FOG from 'vanta/dist/vanta.fog.min'
// import * as THREE from "three"
const Countdown = () => {
    const [timerDays,setTimerDays]=useState('00');
    const[timerHours,setTimerHours]=useState('00');
    const[timerMinutes,setTimerMinutes]=useState('00');
    const[timerSeconds,setTimerSeconds]=useState('00');
    let interval=useRef();
    const startTimer= () => {
        const countdownDate=new Date('March 1, 2021 00:00:00').getTime();
        interval=setInterval(()=>{
            var now =new Date().getTime();
            var distance=countdownDate-now;
            var days=String(Math.floor(distance/(1000*60*60*24)));
            var hours=String(Math.floor((distance%(1000*60 *60*24)/(1000*60*60))));
            var minutes=String(Math.floor((distance%(1000*60 *60))/(1000*60)));
            var seconds=String(Math.floor((distance%(1000*60))/1000));
            if(days.length==1)
            days="0"+days;
            if(hours.length==1)
            hours="0"+hours;
            if(minutes.length==1)
            minutes="0"+minutes;
            if(seconds.length==1)
            seconds="0"+seconds;
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
    // const[vantaEffect, setVantaEffect]=useState(0);
    // const vantaRef = useRef(null);
    // useEffect(() => {
    //     if(!vantaEffect){
    //         setVantaEffect(
    //             FOG({
    //                 el:vantaRef.current,
    //                 THREE,
    //             })
    //         );
    //     }
    //     return () => {
    //         if(vantaEffect) {vantaEffect.destroy();}
    //     };
    // }, [vantaEffect]);
    return (
        <section className="Countdown_heading">
            <section className="timer">
                <div>
                    <h2>Paradox is coming soon...</h2>
                </div>
                <div>
                    <section className="timer_section">
                        <p>{timerDays}</p>
                        <p><small className="timer_label">Days</small></p>
                    </section>
                    <span>:</span>
                    <section className="timer_section">
                        <p>{timerHours}</p>
                        <p><small className="timer_label">Hours</small></p>
                    </section>

                    <span>:</span>
                    <section className="timer_section">
                        <p>{timerMinutes}</p>
                        <p><small className="timer_label">Minutes</small></p>
                    </section>

                    <span>:</span>
                    <section className="timer_section">
                        <p>{timerSeconds}</p>
                        <p><small className="timer_label">Seconds</small></p>
                    </section>
                </div>
            </section>
        </section>
    )
}
export default Countdown;