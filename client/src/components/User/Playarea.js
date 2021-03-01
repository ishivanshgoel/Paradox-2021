import React from 'react'
import './Playarea.css'
import demo from './demo.jpg';

const Playarea =()=>{
    return(
        <section className="Playarea_heading">
            <section className="play">
                <section className="play_question col-8">
                    <div class_Name="play_img">
                        <img src={demo} alt=""/>
                    </div>
                    <div className="play_para">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsam iure quae facilis, rerum dolore perferendis vel nulla. Obcaecati saepe maxime nostrum dolores eum. Soluta vero ut quis ullam amet?</p>
                    </div>
                </section>
                <section className="play_answer">
                    <div>
                        <input type="text" placeholder="Your answer here"/>
                        <button type="submit">Submit</button>
                    </div>
                </section>
            </section>        
        </section>
    );
}
export default Playarea;