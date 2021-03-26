import React, { useState, useEffect } from 'react'
import './Playarea.css'
import demo from './demo.jpg';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

// Request
import GET_Request from '../../Helper/GetRequest'
import POST_Request from '../../Helper/PostRequest'

// loading screen
import LoaderHook from '../../components/Loader/LoaderHook'

// Notification
import Notification from '../Notifications/Notification'

/**
 * @author ishivanshgoel, sanikakulkarni 
 * @LoaderHook const [loadingscreen, showLoadingScreen, hideLoadingScreen] = LoaderHook()
 * @Notificaton Notification('Wonderfull', 'you have crossed the level', 'success')
 */

const Playarea = () => {

    const [loading, setloading] = useState(false)
    const [imageUrl, setImageUrl] = useState(null)
    const [answer, setAnswer] = useState(null)

    // loading screen
    const [loadingscreen, showLoadingScreen, hideLoadingScreen] = LoaderHook()

    useEffect(async () => {
        const response = await GET_Request('nextlevel')
        if (response.data) {
            const { imageUrl } = response.data
            setImageUrl(imageUrl)
        }
        setloading(true)
    })

    // handle answer submission
    let handleSubmit = async (event) => {
        event.preventDefault()
        showLoadingScreen()
        const response = await POST_Request('evaluate', { answer })

        if (response.data && response.data.message) {
            if (response.data.message == "correct")
                Notification("Success", "Correct Answer", "success")
            else Notification("Try Again", "Wrong Answer", "danger")
        } else {
            Notification("Error", "Some Error Occured", "danger")
        }
        
        hideLoadingScreen()
    }

    // static js
    function add_class() {
        let input_tag = document.getElementsByClassName("play_input")[0];
        let input_value = input_tag.value;

        if (input_value !== "") {
            input_tag.classList.add("has-content");
        }
        else {
            input_tag.classList.remove("has-content");
        }
    }
    return (
        <div>
            {loadingscreen}
            {
                loading ? (
                    <section className="Playarea_heading">
                        <section className="play">
                            <div className="profile_level">
                                Level: 10
                            </div>

                            <section className="play_question">
                                <div className="play_img img-fluid">
                                    <img src={imageUrl || demo} alt="paradox-level" />
                                </div>
                            </section>

                            <div className="profile_rank">
                                Rank: 20
                            </div>
                        </section>

                        <section className="play_answer">
                            <div className="input_div input-effect" onBlur={add_class}>
                                <input className="play_input" type="text" onChange={(event) => setAnswer(event.target.value)} style={{ textTransform: "lowercase" }} required />
                                <label>Your Answer Here</label>
                                <span className="focus-border"></span>
                            </div>
                            <button className="play_btn" type="submit" onClick={handleSubmit}>Submit</button>
                        </section>
                    </section>
                ) : (
                    <SkeletonTheme color="#202020" highlightColor="#444">
                        <p style={{ margin: "50px" }}>
                            <Skeleton count={12} />
                        </p>
                    </SkeletonTheme >
                )
            }
        </div >
    );
}
export default Playarea;