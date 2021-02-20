import React from 'react'
import './countdown.css'
const CountDown = () =>{
    return (
        <main>
            <script src="./countdown.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
            <h1>Paradox is coming soon ...</h1>
            <div className="countdown">
            <div className="countdown-block">
                <span className="days time-elem">
                <span className="top">00</span>
                <span className="top-back">
                    <span>00</span>
                </span>
                <span className="bottom">00</span>
                <span className="bottom-back">
                    <span>00</span>
                </span>
                </span>
                <span className="title">Days</span>
            </div>
            <div className="countdown-block">
                <span className="hours time-elem">
                <span className="top">00</span>
                <span className="top-back">
                    <span>00</span>
                </span>
                <span className="bottom">00</span>
                <span className="bottom-back">
                    <span>00</span>
                </span>
                </span>
                <span className="title">Hours</span>
            </div>
            <div className="countdown-block">
                <span className="minutes time-elem">
                <span className="top">00</span>
                <span className="top-back">
                    <span>00</span>
                </span>
                <span className="bottom">00</span>
                <span className="bottom-back">
                    <span>00</span>
                </span>
                </span>
                <span className="title">Minutes</span>
            </div>
            <div className="countdown-block">
                <span className="seconds time-elem">
                <span className="top">00</span>
                <span className="top-back">
                    <span>00</span>
                </span>
                <span className="bottom">00</span>
                <span className="bottom-back">
                    <span>00</span>
                </span>
                </span>
                <span className="title">Seconds</span>
            </div>
            </div>
            <ul className="social">
            <li>
                <a href="https://www.instagram.com/comsoc.vitcc/?hl=en"  target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#8385A9" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>IEEE Computer Society VIT Chennai</svg>
                </a>
            </li>
            </ul>
        </main>
    );
}

    
export default CountDown;