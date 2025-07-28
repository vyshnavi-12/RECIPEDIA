import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaHeart, FaRegHeart } from 'react-icons/fa';
import allRecipes from '../data/recipes.json';
import NotFoundPage from './NotFound.jsx'; // Updated import
import '../styles/RecipeDetail.css';
import { FaPlay } from "react-icons/fa";
import { IoPlaySkipForwardSharp } from "react-icons/io5";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { IoMdPause } from "react-icons/io";
import { v4 as uuidv4 } from 'uuid';

const RecipeDetailPage = () => {
  const { category, recipeId } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState(null);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
   const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechRate, setSpeechRate] = useState(1);
  const [speechIndex, setSpeechIndex] = useState(0);
  const utteranceRef = React.useRef(null);
  const contentPartsRef = React.useRef([]);
  const [spokenChars, setSpokenChars] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  let fullContent;
  const [error, setError] = useState("")

  useEffect(() => {
    const foundRecipe = allRecipes.find(r => r.id === recipeId && r.category === category);
    setRecipe(foundRecipe);
    if (foundRecipe) {
      fullContent =
        `${foundRecipe.name}.${foundRecipe.about}.` +
        `Ingredients Required , ${foundRecipe.ingredients.join(", ")}. ` +
        `Preparation Steps , ${foundRecipe.preparationSteps.join(". ")}.`;
      
      const parts = fullContent.split(".");
      
      contentPartsRef.current = parts;
      setSpeechIndex(0);
    }
    
  }, [recipeId, category]);


  useEffect(() => {
    if (isSpeaking && speechIndex < contentPartsRef.current.length) {
      speak(speechIndex);
    }
  }, [speechIndex, isSpeaking]);

  useEffect(() => {
  
  window.onbeforeunload = () => {
    window.speechSynthesis.cancel();
  };

  return () => {
   
  window.speechSynthesis.cancel();
  };
}, []);


  const handleLike = () => {
    setLiked(!liked);
  };

  const handleComment = (e) => {
    e.preventDefault();
    const username = localStorage.getItem('username') || 'Guest';
    if (!newComment.trim()) {
      setError("Comment cannot be empty!")
      return
    }
    setComments([...comments, { id: uuidv4(), text: newComment, user: username }]);
    setNewComment('');
    setError("")
  };

  if (!recipe) {
    return <NotFoundPage />;
  }

  const speak = (index) => {
    if (index >= contentPartsRef.current.length) return;

    const utterance = new SpeechSynthesisUtterance(
      contentPartsRef.current[index]
    );
    utterance.rate = speechRate;

    utterance.onboundary = (event) => {
      if (event.name === "word") {
        const cumulativeText =
          contentPartsRef.current.slice(0, index).join(" ") + " ";
        const totalSpoken = cumulativeText.length + event.charIndex;
        setSpokenChars(totalSpoken);
      }
    };

    utterance.onend = () => {
      if (index + 1 < contentPartsRef.current.length) {
        setSpeechIndex((prev) => prev + 1);
      } else {
        //  End of content
        setIsSpeaking(false);
        setSpeechIndex(0);
        setSpokenChars(0);   
      }
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };
  const handlePlay = () => {
    if (!isSpeaking) {
      window.speechSynthesis.cancel(); 
      setIsSpeaking(true); 
    }
  };
  const handlePause = () => {
    window.speechSynthesis.pause();
    setIsSpeaking(false);
  };

  
  const handleCancel = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

 const handleSkipForward = () => {
  const newIndex = Math.min(
    speechIndex + 1,
    contentPartsRef.current.length - 1
  );
  if (newIndex !== speechIndex) {
    handleCancel();
    setSpeechIndex(newIndex);
    setIsSpeaking(true);
    // speak(newIndex);
  }
};

const handleSkipBack = () => {
  const newIndex = Math.max(speechIndex - 1, 0);
  if (newIndex !== speechIndex) {
    handleCancel();
    setSpeechIndex(newIndex);
    setIsSpeaking(true);
    // speak(newIndex);
  }
};

  const handleSpeed = () => {
    let id = document.getElementById("speed");

    let val = id.classList;
    if (val.contains("hidden")) {
      id.classList.remove("hidden");
    } else {
      id.classList.add("hidden");
    }
  };

  const handleSeek = (e) => {
    const newCharIndex = parseInt(e.target.value, 10);
    setSpokenChars(newCharIndex);

    let accumulated = 0;
    for (let i = 0; i < contentPartsRef.current.length; i++) {
      const part = contentPartsRef.current[i];
      if (accumulated + part.length >= newCharIndex) {
        setSpeechIndex(i);
        break;
      }
      accumulated += part.length;
    }
  };

  const handleSeekRelease = () => {
    if (isDragging) {
      window.speechSynthesis.cancel();
      setIsSpeaking(true);
      speak(speechIndex);
      setIsDragging(false);
    }
  };

  return (
    <div className="recipe-detail-container max-w-4xl mx-auto px-4 pt-32 pb-16 dark:bg-slate-800 dark:text-white">
      <button
        onClick={() => navigate(`/${recipe.category}`)}
        className=" w-1/2 py-3 flex flex-row items-center justify-center cursor-pointer  !text-red-500 hover:text-red-600 mb-6 dark:!text-white text-xl"
      >
        <span className="block w-fit hover:scale-110"><FaArrowLeft className="mr-2" /> </span>
        
        <span className="block w-fit"> Back to {recipe.category}</span>
        
      </button>

     

      <h1 className="text-4xl font-bold text-center my-10">{recipe.name}</h1>

      <img src={recipe.image} alt={recipe.name} className="w-full h-80 object-cover rounded-xl shadow-lg mb-8" />

       {/* Voice Section */}
      <div className="container bg-slate-400 text-black dark:text-white dark:bg-gray-500 mx-auto w-1/2 my-10 p-4 rounded-lg flex-col flex justify-center items-center sm:p-0 ">
        <div className="flex items-center w-full  justify-center ">
          <p className="text-[10px] sm:text-[15px] md:text-2xl font-bold mr-7">
            Audio Overview
          </p>
          <div
            onClick={handleSpeed}
            className="w-fit text-xl md:text-4xl hover:scale-105 hover:transition-all hover:duration-100 text-black cursor-pointer"
          >
            <IoMdSettings />
          </div>
        </div>
        <div className="flex justify-center sm:justify-around">
          <button
            onClick={handleSkipBack}
            className="bg-transparent text:2xl  sm:text-4xl hover:scale-105 hover:transition-all hover:duration-100 text-black "
          >
            <IoPlaySkipBackSharp />
          </button>
          <button
            onClick={isSpeaking ? handlePause : handlePlay}
            className="bg-transparent text:2xl  sm:text-4xl  hover:scale-105 hover:transition-all hover:duration-100 text-black"
          >
            {isSpeaking ? <IoMdPause /> : <FaPlay />}
          </button>
          <button
            onClick={handleSkipForward}
            className="bg-transparent text:2xl  sm:text-4xl  hover:scale-105 hover:transition-all hover:duration-100 text-black"
          >
            <IoPlaySkipForwardSharp />
          </button>
        </div>
        <div className="w-full">
          <input
            type="range"
            className="bg-white w-full"
            min={0}
            step={1}
            max={contentPartsRef.current.reduce(
              (acc, part) => acc + part.length,
              0
            )}
            value={spokenChars}
            name="voice"
            id="voice"
            onChange={(e) => {
              setIsDragging(true);
              handleSeek(e);
            }}
            onMouseUp={handleSeekRelease}
            onTouchEnd={handleSeekRelease}
          />
        </div>
        <div
          id="speed"
          className="hidden flex justify-center items-center flex-col sm:flex-row w-full md:gap-2"
        >
          <label
            htmlFor="rate"
            className=" text-xl sm:text-2xl font-medium ml-1"
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
            className=" accent-pink-600 w-full focus:none"
          />
          <span className="text-xl">{speechRate}x</span>
        </div>
      </div>

      <section className="prose max-w-none dark:prose-invert">
        <h2 className="text-2xl font-semibold">About this Recipe</h2>
        <p className="!text-black dark:!text-white">{recipe.about}</p>

        <h2 className="text-2xl font-semibold mt-6">Ingredients</h2>
        <ul className="list-disc pl-6 marker:text-red-500 !text-black dark:!text-white">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="mb-1">{ingredient}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mt-6">Preparation Steps</h2>
        <ol className="list-decimal pl-6 space-y-2 !text-black dark:!text-white">
          {recipe.preparationSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>

      {/* User Interaction: Likes and Comments */}
      <div className="mt-10 flex items-center gap-4">
        <button onClick={handleLike} className="flex items-center w-fit text-xl gap-2   dark:!text-white hover:!text-red-500 dark:hover:!text-red-500 focus:outline-none ">
          {liked ? <FaHeart className="text-red-500" /> : <FaRegHeart />} {liked ? 'Liked' : 'Like'}
        </button>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Comments</h3>
        <form onSubmit={handleComment} className="mb-6">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-red-500 min-h-[120px] text-black bg-white"
            rows="4"
          />
          {error && (
             <p className="text-red-600 text-base mt-2 font-semibold">{error}</p>
          )}

          <button type="submit" className="mt-3 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold">
            Post Comment
          </button>
        </form>

        <div className="space-y-4 mt-6">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={comment.id} className="bg-gray-50 p-4 rounded-lg shadow">
                <strong className="block text-gray-800">{comment.user}</strong>
                <p className="text-gray-700 mt-1">{comment.text}</p>
              </div>
            ))
          ) : (
            <div className="bg-gray-100 p-4 rounded-lg shadow text-center text-gray-500">
              No comments yet. Be the first to share your thoughts!
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default RecipeDetailPage;