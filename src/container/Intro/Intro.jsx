import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const refVideo = useRef();

  return (
    <div className="app__video">
      <video
        className="app__video-footage"
        ref={refVideo}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      ></video>
      <div
        className="app__video-overlay flex__center"
        onClick={() => {
          setPlayVideo((prevState) => !prevState);
          if(playVideo){
            refVideo.current.pause()
          }else{
            refVideo.current.play()
          }
        }}
      >
        <div className="app__video-overlay_circle flex__center">
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Intro;
