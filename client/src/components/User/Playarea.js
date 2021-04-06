import React, { useState, useEffect } from 'react'

import './Playarea.css'
import demo from '../../Static/demo.jpg';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import Completelevels from './Completelevels'

import { useSelector, useDispatch } from 'react-redux'
import { REMOVEUSER } from '../../Reducers/ActionTypes'

// Request
import GET_Request from '../../Helper/GetRequest'
import POST_Request from '../../Helper/PostRequest'

// loading screen
import LoaderHook from '../../components/Loader/LoaderHook'

// Notification
import Notification from '../Notifications/Notification'

// local storage
import { removeItem } from '../../Helper/LocalStorage'

/**
 * @author ishivanshgoel, sanikakulkarni 
 * @LoaderHook const [loadingscreen, showLoadingScreen, hideLoadingScreen] = LoaderHook()
 * @Notificaton Notification('Wonderfull', 'you have crossed the level', 'success')
 */
const Playarea = () => {
    const [loading, setloading] = useState(false)
    const [imageUrl, setImageUrl] = useState(null)
    const [level, setLevel] = useState(null)
    const [answer, setAnswer] = useState(null)
    const [isComplete, setComplete] = useState(null)


    const username = useSelector((state)=>state.username)
    const dispatch = useDispatch()
    // loading screen
    const [loadingscreen, showLoadingScreen, hideLoadingScreen] = LoaderHook()
    useEffect(async () => {
        const response = await GET_Request('nextlevel')
        if (response.data) {
            const { imageUrl, levelNumber } = response.data
            setImageUrl(imageUrl)
            setLevel(levelNumber)
        }
        else if(response==="No Question found for this level."){
          setComplete(true)
          Notification("Congratulations", "You have crossed all the levels", "info")
        }
            
        setloading(true)
    },[])

    // handle answer submission
    let handleSubmit = async (event) => {
        event.preventDefault()

        if(!answer){
          Notification("Warning", "Please type something", "warning")
          return
        }

        showLoadingScreen()
        const response = await POST_Request('evaluate', { answer })

        if (response.data && response.data.message) {
            if (response.data.message === "correct"){
                setAnswer(null)
                Notification("Success", "Correct Answer", "success")

                // update level locally
                setLevel(level+1)

                // next question
                setloading(false)
                const response = await GET_Request('nextlevel')
               
                if (response.data) {
                    const { imageUrl } = response.data
                    setImageUrl(imageUrl)
                }
                else if(response==="No Question found for this level."){
                  setComplete(true)
                  Notification("Congratulations", "You have crossed all the levels", "info")
                }
                    
                setloading(true)
            }
                
            else Notification("Try Again", "Wrong Answer", "danger")
        } else {
            Notification("Error", "Some Error Occured", "danger")
        }
        
        hideLoadingScreen()
    }

    let handleSubmitEnterkey = async (event) => {
        if (event.keyCode === 13)
        {
            handleSubmit(event);
        }
    };

    // logout
    let handleLogout = (event)=>{
        event.preventDefault()
        removeItem('token')
        dispatch({
            type: REMOVEUSER
        })
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

    // JSX
    return (
      <div>
        {loadingscreen}
        { loading && isComplete ? <Completelevels/> :  loading ? (
          <section className="Playarea_heading">
            <section className="play">
              <div className="editor-field-playarea editor-field__textbox">
                <div className="editor-field__label-container">
                  <label className="editor-field__label">Level</label>
                </div>
                <div className="editor-field__container-playarea">
                  <p className="editor-field__input"> {level} </p>
                </div>
              </div>
              <div className="dropdown playarea-btn dropleft">
                <div
                  className="dropdown-menu dropback"
                  aria-labelledby="dropdownMenuButton"
                >
                  <form onSubmit={handleLogout}>
                    <button
                      type="submit"
                      className="dropdown-item logout-button"
                    >
                      Logout
                    </button>
                  </form>
                </div>
                <button
                  className="btn btn-secondary dropdown-toggle playarea-btn-back"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {username}
                </button>
              </div>
            </section>
            <div className="play_img">
              <img
                width="100%"
                height="100%"
                src={imageUrl || demo}
                alt="paradox-level"
              />
            </div>
            <section className="play_answer">
              <div className="input_div input-effect" onBlur={add_class}>
                <input
                  className="play_input"
                  type="text"
                  onKeyDown={handleSubmitEnterkey}
                  onChange={(event) => setAnswer(event.target.value)}
                  style={{ textTransform: "lowercase" }}
                  required
                />
                <label className="Playarea-placeholder">Your Answer Here</label>
                <span className="focus-border"></span>
              </div>
              <form onSubmit={handleSubmit}>
                <button className="play_btn" type="submit">
                  Submit
                </button>
              </form>
            </section>
          </section>
        ) : (
          <SkeletonTheme color="#202020" highlightColor="#444">
            <p style={{ margin: "50px" }}>
              <Skeleton count={12} />
            </p>
          </SkeletonTheme>
        )}
      </div>
    );
}
export default Playarea;