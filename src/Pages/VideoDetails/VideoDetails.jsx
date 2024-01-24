import { NavLink, useParams } from 'react-router-dom';
import './VideoDetails.css'
import { useRef, useState } from 'react';

export default function VideoDetails() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);

  const videoRef = useRef(null);

  const { id } = useParams();
  const playVideo = () => {
    setIsPlaying(true);
    setShowThumbnail(false);
    videoRef.current.play();
  };
  const handleVideoPause = () => {
    setShowThumbnail(true);
  };
  const handleVideoPlay = () => {
    setShowThumbnail(false);
  };
  const handleThumbnailLoad = () => {
    setThumbnailLoaded(true);
  };
  return (
    <section className="video-details">
      <div>
        <h1>{id.slice(0,1).toUpperCase() + id.slice(1).split('-').join(' ')}</h1>
        
          <div>

            <video ref={videoRef} style={{width: '100%', aspectRatio: 1.3/1}} controls onPlay={handleVideoPlay} onPause={handleVideoPause}
            >
            <source src="https://kickear.com/wp-content/uploads/2024/01/video_2024-01-19_17-07-00.mp4?id=0" type="video/mp4" />
            
            </video>
            {
              (!isPlaying && showThumbnail) && 
              <div>
              <img alt="Miniatura del Video"
              onLoad={handleThumbnailLoad}
              src='https://ricoysuave.com/wp-content/uploads/2024/01/image.psd-15.webp%20%20' />

              </div>
            }
            {
              showThumbnail &&
              <button onClick={playVideo} type="button" title="Reproducir Vídeo" aria-disabled="false" >
                <div>
                ▶
                </div>
              </button>
            }
            <div style={{zIndex: thumbnailLoaded?'-1':'',position:'absolute', width:'100%', height:'100%', backgroundColor: thumbnailLoaded ? 'transparent' : 'black'}}>

            </div>
          </div>
        
      </div>
    </section>
        
  );
}