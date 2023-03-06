import { useEffect, useState ,useRef } from "react";
import MyVideo from "./Moive.mp4"


function Comp6(){
    const [time,setTime] = useState(0);
    const videoRef = useRef(null);
    const handlePlayVideo=()=>{
        const video = videoRef.current;
        video.play();
    }
    useEffect(()=>{
        const video = videoRef.current;
        setTimeout(()=>{
            console.log(parseInt(video.currentTime)+"  "+time);
            setTime(time+1)
            if(parseInt(video.currentTime)==6){
                // setTime(video.pause(),20000)
                video.pause();
                window.alert("You have reached the interval now !!")
                video.currentTime = video.currentTime+1;
            }
            else if(parseInt(video.currentTime)==7){
                
                video.play();

            }
            
        },1000)
        
    })
    return(
        <>
        <video width="1000px" controls="true" ref={videoRef}>
            <source src={MyVideo}></source>
        </video>
        </>
    )

}


export default Comp6;

