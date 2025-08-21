// Explore.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import recipes from "../data/recipes.json"; // Adjust the path as necessary

const ExplorePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Map and filter the imported recipes by category, transforming to the required format
  const vegetarianRecipes = recipes
    .filter((r) => r.category === "veg")
    .map((r, index) => ({
      id: index + 1, // Generating a numeric ID for consistency with original code
      title: r.name,
      description: r.about,
      imageUrl: r.image,
      category: r.category,
      slug: r.id,
    }));

  const nonVegRecipes = recipes
    .filter((r) => r.category === "nonveg")
    .map((r, index) => ({
      id: index + 1,
      title: r.name,
      description: r.about,
      imageUrl: r.image,
      category: r.category,
      slug: r.id,
    }));

  const dessertRecipes = recipes
    .filter((r) => r.category === "dessert")
    .map((r, index) => ({
      id: index + 1,
      title: r.name,
      description: r.about,
      imageUrl: r.image,
      category: r.category,
      slug: r.id,
    }));

  const beverageRecipes = recipes
    .filter((r) => r.category === "beverages")
    .map((r, index) => ({
      id: index + 1,
      title: r.name,
      description: r.about,
      imageUrl: r.image,
      category: r.category,
      slug: r.id,
    }));

  const allSections = [
    { title: "Vegetarian Recipes 🥗", data: vegetarianRecipes },
    { title: "Non-Vegetarian Recipes 🍗", data: nonVegRecipes },
    { title: "Desserts 🍨", data: dessertRecipes },
    { title: "Beverages 🥤", data: beverageRecipes },
  ];

  const filteredSections = allSections.map((section) => ({
    ...section,
    data: section.data.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  const accentByTitle = {
    "Vegetarian Recipes 🥗": "from-emerald-500 to-green-600",
    "Non-Vegetarian Recipes 🍗": "from-rose-500 to-red-600",
    "Desserts 🍨": "from-amber-500 to-orange-600",
    "Beverages 🥤": "from-sky-500 to-indigo-600",
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center">
          <h1 className="text-4xl mt-5 sm:text-5xl lg:text-6xl font-black leading-tight text-white">
            Explore Recipes
          </h1>
        </div>

        <div className="max-w-2xl mx-auto mt-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 rounded-full bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {filteredSections.map((section) => {
          const accent = accentByTitle[section.title] || "from-orange-500 to-red-600";

          return (
            <div key={section.title} className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  <span
                    className={`bg-clip-text text-transparent bg-gradient-to-r ${accent}`}
                  >
                    {section.title}
                  </span>
                </h2>
                <div
                  className={`hidden sm:block h-1 w-24 rounded-full bg-gradient-to-r ${accent} opacity-70`}
                />
              </div>

              <div className="relative">
                <div className="flex overflow-x-auto space-x-6 snap-x snap-mandatory pb-4 scrollbar-hide md:scrollbar-default">
                  {section.data.length > 0 ? (
                    section.data.map((recipe) => (
                      <motion.div
                        key={recipe.id}
                        whileHover={{ y: -6 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        onClick={() =>
                          navigate(`/recipes/${recipe.category}/${recipe.slug}`)
                        }
                        className="group cursor-pointer rounded-2xl overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col min-w-[280px] max-w-[280px] md:min-w-[320px] md:max-w-[320px] snap-start"
                      >
                        <div className="relative">
                          <img
                            src={`${recipe.imageUrl}?auto=format&fit=crop&w=800&h=450&q=80`}
                            alt={recipe.title}
                            className="w-full h-44 md:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <span
                            className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full text-white shadow-md bg-gradient-to-r ${accent}`}
                          >
                            {recipe.category}
                          </span>
                        </div>
                        <div className="p-5 flex flex-col flex-grow">
                          <h3 className="text-lg font-bold text-white mb-1">
                            {recipe.title}
                          </h3>
                          <p className="text-sm text-gray-200 line-clamp-2 flex-grow">
                            {recipe.description}
                          </p>

                          <div className="mt-4">
                            <span
                              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${accent} border border-white/10 group-hover:shadow-xl transition`}
                            >
                              View Recipe
                              <svg
                                className="ml-2 w-4 h-4 transform group-hover:translate-x-0.5 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <p className="text-gray-300 text-center py-8 w-full">
                      No recipes found in this category.
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExplorePage;
