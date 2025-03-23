import { useState, useRef } from 'react';
import './App.css';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying
    setIsPlaying(nextIsPlaying);

    if(nextIsPlaying)
      ref.current.play();
    else
      ref.current.pause();
  }

  return(
    <div className='App'>
      <video width="250" ref={ref} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)}>
        <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type='video/mp4' />
      </video>
      <button className='btn' onClick={handleClick}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
}