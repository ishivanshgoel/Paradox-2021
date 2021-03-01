import React from 'react'
import './Playarea.css'
import demo from './demo.jpg';
import youtube from './youtube.jpg'

const Playarea = ()=>{
    return(
        <section className="Playarea_heading">
            <section className="play">
                <section className="play_profile">
                    <div className="profile_name">
                        saniikakulkarni
                    </div>
                    <div className="profile_level">
                        Level:10
                    </div>
                </section>
                <section className="play_question">
                    <div className="play_img img-fluid">
                        <img src={demo} alt=""/>
                    </div>
                    <div className="play_para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsam iure quae facilis, rerum dolore perferendis vel nulla. Obcaecati saepe maxime nostrum dolores eum. Soluta vero ut quis ullam amet?
                    </div>
                </section>
            </section>
                <section className="play_answer">
                    <div className="input_div input-effect">
                        <input className="play_input" type="text" placeholder=""/>
                        <label>Your Answer Here</label>
                        <span className="focus-border"></span>
                    </div>
                    <button className="play_btn" type="submit">Submit</button>
                </section>      
        </section>
    );
}
export default Playarea;