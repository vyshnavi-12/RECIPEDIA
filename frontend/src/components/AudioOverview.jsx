// src/components/AudioOverview.jsx
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoPlaySkipForwardSharp, IoPlaySkipBackSharp } from "react-icons/io5";
import { IoMdSettings, IoMdPause } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const AudioOverview = ({
  contentPartsRef,
  speechRate,
  setSpeechRate,
  spokenChars,
  setSpokenChars,
  speechIndex,
  setSpeechIndex,
  isSpeaking,
  setIsSpeaking,
}) => {
  const [showSettings, setShowSettings] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  // Speak function
  const speak = (index) => {
    if (index >= contentPartsRef.current.length) return;
    const utterance = new SpeechSynthesisUtterance(contentPartsRef.current[index]);
    utterance.rate = speechRate;

    utterance.onboundary = (e) => {
      if (e.name === "word") {
        const totalSpoken =
          contentPartsRef.current.slice(0, index).join(" ").length + e.charIndex;
        setSpokenChars(totalSpoken);
      }
    };

    utterance.onend = () => {
      if (index + 1 < contentPartsRef.current.length) {
        setSpeechIndex((prev) => prev + 1);
      } else {
        setIsSpeaking(false);
        setSpeechIndex(0);
        setSpokenChars(0);
      }
    };

    window.speechSynthesis.speak(utterance);
  };

  // Play handler
  const handlePlay = () => {
    if (!isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(true);
      speak(speechIndex);
    }
  };

  // Pause handler
  const handlePause = () => {
    window.speechSynthesis.pause();
    setIsSpeaking(false);
  };

  // Cancel speech synthesis
  const handleCancel = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  // Skip forward
  const handleSkipForward = () => {
    const newIndex = Math.min(speechIndex + 1, contentPartsRef.current.length - 1);
    if (newIndex !== speechIndex) {
      handleCancel();
      setSpeechIndex(newIndex);
      setIsSpeaking(true);
      speak(newIndex);
    }
  };

  // Skip backward
  const handleSkipBack = () => {
    const newIndex = Math.max(speechIndex - 1, 0);
    if (newIndex !== speechIndex) {
      handleCancel();
      setSpeechIndex(newIndex);
      setIsSpeaking(true);
      speak(newIndex);
    }
  };

  // Seeking
  const handleSeek = (e) => {
    const newCharIndex = parseInt(e.target.value, 10);
    setSpokenChars(newCharIndex);
    let accumulated = 0;
    for (let i = 0; i < contentPartsRef.current.length; i++) {
      if (accumulated + contentPartsRef.current[i].length >= newCharIndex) {
        setSpeechIndex(i);
        break;
      }
      accumulated += contentPartsRef.current[i].length;
    }
  };

  // When user releases seek bar
  const handleSeekRelease = () => {
    if (isDragging) {
      window.speechSynthesis.cancel();
      setIsSpeaking(true);
      speak(speechIndex);
      setIsDragging(false);
    }
  };

  // Toggle collapse / expand with auto-play on expand
  const toggleCollapse = () => {
    if (collapsed) {
      // Expanding: auto-start playing
      setCollapsed(false);
      handlePlay();
    } else {
      // Collapsing: pause speech
      window.speechSynthesis.pause();
      setIsSpeaking(false);
      setCollapsed(true);
    }
  };

  return (
    <>
      {collapsed ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center mx-auto my-4"
        >
          <motion.button
            onClick={toggleCollapse}
            whileHover={{ scale: 1.1, boxShadow: "0 0 10px #ef4444" }}
            className="p-3 rounded-full bg-red-500 text-white shadow-lg cursor-pointer flex items-center justify-center"
            aria-label="Listen to audio overview"
            style={{ width: 52, height: 52, minWidth: 52 }}
          >
            <FaPlay size={22} />
          </motion.button>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-1 select-none">
            Listen
          </span>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-lg mx-auto my-8 px-5 py-4 rounded-2xl shadow-xl flex flex-col items-center gap-5 
          bg-gradient-to-br from-white via-red-50 to-pink-100 
          dark:from-gray-800 dark:via-gray-700 dark:to-gray-800"
          style={{ minWidth: 300 }}
        >
          <button
            onClick={toggleCollapse}
            className="self-end text-red-600 hover:text-red-800 font-bold mb-2 select-none"
            aria-label="Close audio overview"
          >
            ✕
          </button>

          {/* Title and Settings */}
          <div className="flex items-center justify-between w-full px-2">
            <h3 className="text-lg sm:text-xl md:text-xl font-bold bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent select-none">
              🎧 Audio Overview
            </h3>
            <div
              onClick={() => setShowSettings((p) => !p)}
              className="text-xl md:text-2xl text-green-600 hover:text-green-800 cursor-pointer select-none"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setShowSettings((p) => !p);
              }}
              aria-label="Toggle speed settings"
            >
              <IoMdSettings />
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-5 px-2">
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={handleSkipBack}
              className="p-2 rounded-full shadow-lg bg-white dark:bg-gray-700 hover:bg-red-500 hover:text-white transition"
              aria-label="Skip backward"
              type="button"
              style={{ width: 40, height: 40 }}
            >
              <IoPlaySkipBackSharp size={20} />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={isSpeaking ? handlePause : handlePlay}
              className="p-4 rounded-full shadow-lg bg-gradient-to-br from-red-500 to-pink-500 text-white flex items-center justify-center"
              aria-label={isSpeaking ? "Pause audio" : "Play audio"}
              type="button"
              style={{ width: 56, height: 56 }}
            >
              {isSpeaking ? <IoMdPause size={24} /> : <FaPlay size={20} />}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={handleSkipForward}
              className="p-2 rounded-full shadow-lg bg-white dark:bg-gray-700 hover:bg-red-500 hover:text-white transition"
              aria-label="Skip forward"
              type="button"
              style={{ width: 40, height: 40 }}
            >
              <IoPlaySkipForwardSharp size={20} />
            </motion.button>
          </div>

          {/* Seek Bar */}
          <motion.input
            type="range"
            min={0}
            step={1}
            max={contentPartsRef.current.reduce((a, b) => a + b.length, 0)}
            value={spokenChars}
            onChange={(e) => {
              setIsDragging(true);
              handleSeek(e);
            }}
            onMouseUp={handleSeekRelease}
            onTouchEnd={handleSeekRelease}
            className="w-full h-1 rounded-full cursor-pointer"
            style={{
              accentColor: "#ef4444",
            }}
            whileHover={{ scale: 1.02 }}
            aria-label="Seek audio progress"
          />

          {/* Speed Control */}
          <AnimatePresence>
            {showSettings && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex w-full items-center justify-between px-2"
              >
                <label
                  htmlFor="rate"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 select-none"
                >
                  Speed:
                </label>
                <input
                  id="rate"
                  type="range"
                  min="0.25"
                  max="3"
                  step="0.1"
                  value={speechRate}
                  onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                  className="w-36"
                  style={{ accentColor: "#d110f3ff" }}
                  aria-valuemin={0.25}
                  aria-valuemax={3}
                  aria-valuenow={speechRate}
                  aria-label="Adjust speech speed"
                />
                <span className="text-sm font-semibold select-none">{speechRate}x</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Subtitles */}
          <motion.div
            key={spokenChars}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full text-center text-gray-700 dark:text-white text-sm font-medium min-h-[36px] select-text px-2"
            aria-live="polite"
          >
            {(() => {
              const fullText = contentPartsRef.current.join(" ");
              const currentIndex = spokenChars;
              const previewLength = 60;
              const start = Math.max(0, currentIndex - 30);
              const end = Math.min(fullText.length, currentIndex + previewLength);
              return fullText.slice(start, end);
            })()}
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default AudioOverview;
