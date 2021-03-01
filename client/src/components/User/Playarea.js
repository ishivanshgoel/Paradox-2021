import React from 'react'
import './Playarea.css'
import demo from './demo.jpg';
import youtube from './youtube.jpg'

const Playarea = ()=>{
    function add_class()
    {
        let input_tag=document.getElementsByClassName("play_input")[0];
        let input_value=input_tag.value;

        if(input_value!=="")
        {
            input_tag.classList.add("has-content");
        }
        else{
            input_tag.classList.remove("has-content");
        }
    }
    return(
        <section className="Playarea_heading">
            <section className="play">
                <div className="profile_level">
                    Level: 10
                </div>
                <section className="play_question">
                    <div className="play_img img-fluid">
                        <img src={demo} alt=""/>
                    </div>
                </section>
                <div className="profile_rank">
                    Rank: 20
                </div>
            </section>
                <section className="play_answer">
                    <div className="input_div input-effect" onBlur={add_class}>
                        <input className="play_input" type="text" placeholder="" />
                        <label>Your Answer Here</label>
                        <span className="focus-border"></span>
                    </div>
                    <button className="play_btn" type="submit">Submit</button>
                </section>      
        </section>
    );
}
export default Playarea;