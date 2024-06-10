import React, { useEffect, useRef, useState } from "react";
import Music from "../../assets/music.mp3";
export default function ChatMusic() {
  const audioRef = useRef(null);
  const timeoutRef = useRef(null);
  const playTime = useState(0);

  useEffect(() => {
    const handleKeyDown = () => {
      // playTime++;
      if (audioRef.current) {
        audioRef.current.play();
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
          audioRef.current.pause();
        }, 5000);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener and timer on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <figure>
      <audio ref={audioRef} src={Music} preload="auto" loop controls />
    </figure>
  );
}
