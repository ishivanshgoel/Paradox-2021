import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { REMOVEUSER } from "../../Reducers/ActionTypes";
// local storage
import { removeItem } from "../../Helper/LocalStorage";
//CSS
import './countdown.css'
/**
 * @author Sanika
 */
const Countdown = ({ countdownDate }) => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');
    let interval = useRef();
    const startTimer = () => {
        interval = setInterval(() => {
            var now = new Date().getTime();
            var distance = countdownDate - now;
            var days = String(Math.floor(distance / (1000 * 60 * 60 * 24)));
            var hours = String(Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))));
            var minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            var seconds = String(Math.floor((distance % (1000 * 60)) / 1000));
            if (days.length === 1)
                days = "0" + days;
            if (hours.length === 1)
                hours = "0" + hours;
            if (minutes.length === 1)
                minutes = "0" + minutes;
            if (seconds.length === 1)
                seconds = "0" + seconds;
            if (distance < 0) {
                //stop timer and load Play Area
                clearInterval(interval.current);
                window.location.reload();
            }
            else {
                //update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    }
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    },[])

    const dispatch = useDispatch()
    const history = useHistory()

    let handleLogout = (event)=>{
            event.preventDefault()
            removeItem('token')
            dispatch({
                type: REMOVEUSER
            })
            history.push("/user")
        }
    return (
        <section className="Countdown_heading">
            <section className="timer">
                <div className="Countdown-txt">
                    Almost There
                </div>
                <div className="clock-timer">
                    <section className="timer_section">
                        <p>{timerDays}</p>
                        <p><small className="timer_label">Days</small></p>
                    </section>
                    <section className="timer_section">
                        <p>{timerHours}</p>
                        <p><small className="timer_label">Hours</small></p>
                    </section>
                    <section className="timer_section">
                        <p>{timerMinutes}</p>
                        <p><small className="timer_label">Minutes</small></p>
                    </section>
                    <section className="timer_section">
                        <p>{timerSeconds}</p>
                        <p><small className="timer_label">Seconds</small></p>
                    </section>
                </div>
                <div className="complete">
                    <form onSubmit={handleLogout}>
                        <button className="complete_btn ">
                            Logout
                        </button>
                    </form>       
                </div>
            </section>    
        </section>
    )
}
export default Countdown;