import React from 'react';
import './BackgroundVideo.css';

const BackgroundVideo = () => {
    const poster = "https://tesla-cdn.thron.com/delivery/public/image/tesla/f856f6e9-31dc-4a59-91f2-ab7bdfd189b6/bvlatuR/std/0x0/hero-poster";
    const videoSource = "https://tesla-cdn.thron.com/delivery/public/video/tesla/93545640-2ce8-4483-ba72-8f6949a41b47/bvlatuR/WEBHD/hero";
    return (
        <div id="safety" className="container-bg-video w-background-video">
            <video poster={poster} autoPlay="autoplay" loop="loop" muted>
                <source src={videoSource} type="video/mp4"/>
            </video>
        </div>
    )
}

export default BackgroundVideo