import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Star, Users, ChefHat } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    image: "/hero-section-1.jpg",
    title: "Discover Amazing",
    subtitle: "Recipes",
    description: "Explore thousands of delicious recipes from around the world, crafted by passionate food lovers just like you.",
    buttonText: "Start Cooking",
    buttonLink: "#categories",
    accent: "from-red-500 to-pink-600",
    stats: { recipes: "10K+", chefs: "2K+" }
  },
  {
    id: 2,
    image: "/hero-section-2.jpg",
    title: "Share Your Culinary",
    subtitle: "Masterpieces",
    description: "Join our vibrant community and share your favorite recipes with food enthusiasts worldwide.",
    buttonText: "Explore",
    buttonLink: "/register",
    accent: "from-orange-500 to-red-600",
    stats: { recipes: "500+", reviews: "15K+" }
  },
  {
    id: 3,
    image: "/hero-section-3.webp",
    title: "Cook Like a",
    subtitle: "Professional",
    description: "Master the art of cooking with step-by-step guides, expert tips, and interactive cooking sessions.",
    buttonText: "Learn More",
    buttonLink: "/about",
    accent: "from-yellow-500 to-orange-600",
    stats: { tutorials: "200+", students: "5K+" }
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero-section")?.offsetHeight || 0;
      setShowButton(window.scrollY <= heroHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const currentSlideData = heroSlides[currentSlide];

  const FeaturedRecipeCard = (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group max-w-md mx-auto lg:mx-0">
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${currentSlideData.accent} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <ChefHat className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-white font-bold text-lg">Featured Recipe</h3>
          <p className="text-gray-300 text-sm">Trending Today</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
        <span className="text-white ml-2 text-sm">4.9 (234 reviews)</span>
      </div>
    </div>
  );

  return (
    <section id="hero-section" className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.accent} opacity-20`} />
          </div>
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-white/3 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-white/4 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-white/3 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      {/* Main Content */}
      {/* ... (same as before) ... */}

      {/* Mobile Side Navigation */}
      <div className="lg:hidden">
        {showButton && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-4 bg-white/10 backdrop-blur-lg rounded-full p-2 border border-white/20">
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              aria-label="Previous Slide"
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 active:scale-90 flex items-center justify-center transition-all duration-300 disabled:opacity-50 group border border-white/20"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={nextSlide}
              disabled={isAnimating}
              aria-label="Next Slide"
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 active:scale-90 flex items-center justify-center transition-all duration-300 disabled:opacity-50 group border border-white/20"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
