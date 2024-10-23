/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { SongData } from "../context/Song";
import { GrChapterNext, GrChapterPrevious } from "react-icons/gr";
import { FaPause, FaPlay } from "react-icons/fa";

const Player = () => {
  const {
    isPlaying,
    setIsPlaying,
    nextMusic,
    prevMusic,
  } = SongData();


  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const [volume, setVolume] = useState(1);

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handleLoadedMetaData = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setProgress(audio.currentTime);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetaData);
    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetaData);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const handleProgressChange = (e) => {
    const newTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = newTime;
    setProgress(newTime);
  };
  return (
    <div>
      {(
        <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
          <div className="lg:flex items-center gap-4">
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx1iJOYYV7RiH6nI9Q6HmMnwQ-ZdfaX_DOmA&s"
              }
              className="w-12"
              alt=""
            />
            <div className="hidden md:block">
              <p>Song Title</p>
              <p>Song Description..</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-1 m-auto">
            {
              <>
                {isPlaying ? (
                  <audio ref={audioRef} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx1iJOYYV7RiH6nI9Q6HmMnwQ-ZdfaX_DOmA&s"} autoPlay />
                ) : (
                  <audio ref={audioRef} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx1iJOYYV7RiH6nI9Q6HmMnwQ-ZdfaX_DOmA&s"} />
                )}
              </>
            }

            <div className="w-full flex items-center font-thin text-green-400">
              <input
                type="range"
                min={"0"}
                max={"100"}
                className="progress-bar w-[120px] md:w-[300px]"
                value={duration ? (progress / duration) * 100 : 0} 
                onChange={handleProgressChange}
              />
            </div>

            <div className="flex justify-center items-center gap-4">
              <span className="cursor-pointer" onClick={prevMusic}>
                <GrChapterPrevious />
              </span>
              <button
                className="bg-white text-black rounded-full p-2"
                onClick={handlePlayPause}
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <span className="cursor-pointer" onClick={nextMusic}>
                <GrChapterNext />
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="range"
              className="w-16 md:w-32"
              min={"0"}
              max={"1"}
              step={"0.01"}
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Player;
