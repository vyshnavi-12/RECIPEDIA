import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ExplorePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // SECTION DATA
  const vegetarianRecipes = [
    { id: 1, title: "Paneer Butter Masala", description: "Rich and creamy paneer curry.", imageUrl: "/paneer.jpg",category: "veg", slug: "paneer-butter-masala" },
    { id: 2, title: "Vegetable Biryani", description: "Fragrant rice with mixed vegetables.", imageUrl: "/vegbiriyani.jpg",category: "veg", slug: "vegetable-biryani" },
    { id: 3, title: "Palak Soup", description: "Healthy spinach soup.", imageUrl: "/palak.jpg", category: "veg", slug: "palak-soup" },
    { id: 4, title: "Dal Makhani", description: "Slow-cooked creamy lentils.", imageUrl: "/dal.jpg", category: "veg", slug: "dal-makhani" },
    { id: 5, title: "Rajma Chawal", description: "Kidney beans curry with rice.", imageUrl: "/rajmaChawal.jpg", category: "veg", slug: "rajma-chawal" },
    { id: 6, title: "Chole Bhature", description: "Spicy chickpeas with fried bread.", imageUrl: "/choleBhature.webp", category: "veg", slug: "chole-bhature" },
    { id: 7, title: "Masala Dosa", description: "Crispy crepe with potato filling.", imageUrl: "/masalaDosa.jpg", category: "veg", slug: "masala-dosa" },
    { id: 8, title: "Pav Bhaji", description: "Spiced mashed vegetables with bread.", imageUrl: "/pavBhaji.jpg", category: "veg", slug: "pav-bhaji" },
    { id: 9, title: "Dhokla", description: "Steamed gram flour snack.", imageUrl: "/dhokla.jpg", category: "veg", slug: "dhokla" },
    { id: 10, title: "Veg Momos", description: "Steamed dumplings with spicy chutney.", imageUrl: "/momos.jpg", category: "veg", slug: "veg-momos" },
  ];

  const nonVegRecipes = [
    { id: 1, title: "Butter Chicken", description: "Juicy chicken in creamy tomato sauce.", imageUrl: "/chicken.jpg", category: "nonveg", slug: "butter-chicken" },
    { id: 2, title: "Chicken Biryani", description: "Spiced rice with tender chicken.", imageUrl: "/chickenBiryani.jpg", category: "nonveg", slug: "chicken-biryani" },
    { id: 3, title: "Mutton Rogan Josh", description: "Flavorful Kashmiri mutton curry.", imageUrl: "/muttonRoganJosh.jpg", category: "nonveg", slug: "mutton-rogan-josh" },
    { id: 4, title: "Fish Curry", description: "Tangy fish curry with coconut milk.", imageUrl: "/fish.jpg", category: "nonveg", slug: "fish-curry" },
    { id: 5, title: "Tandoori Chicken", description: "Grilled chicken with spices.", imageUrl: "/tandooriChicken.webp", category: "nonveg", slug: "tandoori-chicken" },
    { id: 6, title: "Prawn Masala", description: "Spicy prawns with masala gravy.", imageUrl: "/prawn.jpg", category: "nonveg", slug: "prawn-masala" },
    { id: 7, title: "Egg Curry", description: "Boiled eggs in spicy gravy.", imageUrl: "/eggCurry.jpg", category: "nonveg", slug: "egg-curry" },
    { id: 8, title: "Keema Pav", description: "Minced meat curry with bread.", imageUrl: "/keemaPav.webp", category: "nonveg", slug: "keema-pav" },
    { id: 9, title: "Grilled Salmon", description: "Perfectly grilled salmon fillet.", imageUrl: "/grilledSalmon.webp", category: "nonveg", slug: "grilled-salmon" },
    { id: 10, title: "Chicken Shawarma", description: "Middle Eastern chicken wrap.", imageUrl: "/chickenShawarna.jpg", category: "nonveg", slug: "chicken-shawarma" },
  ];

  const dessertRecipes = [
    { id: 1, title: "Gulab Jamun", description: "Fried dough balls in syrup.", imageUrl: "/jamun.jpg", category: "dessert", slug: "gulab-jamun" },
    { id: 2, title: "Kheer", description: "Creamy rice pudding.", imageUrl: "/kheer.webp", category: "dessert", slug: "kheer" },
    { id: 3, title: "Rasgulla", description: "Soft cottage cheese balls in syrup.", imageUrl: "/rasgulla.jpg", category: "dessert", slug: "rasgulla" },
    { id: 4, title: "Jalebi", description: "Sweet crispy spirals.", imageUrl: "/jalebi.jpg", category: "dessert", slug: "jalebi" },
    { id: 5, title: "Ladoo", description: "Sweet round balls of goodness.", imageUrl: "/laddo.webp", category: "dessert", slug: "ladoo" },
    { id: 6, title: "Barfi", description: "Milk-based sweet fudge.", imageUrl: "/barfi.jpg", category: "dessert", slug: "barfi" },
    { id: 7, title: "Kulfi", description: "Traditional Indian ice cream.", imageUrl: "/kulfi.webp", category: "dessert", slug: "kulfi" },
    { id: 8, title: "Chocolate Cake", description: "Rich chocolate dessert.", imageUrl: "/chocolateCake.jpg", category: "dessert", slug: "chocolate-cake" },
    { id: 9, title: "Fruit Custard", description: "Chilled custard with fruits.", imageUrl: "/fruitCustard.webp", category: "dessert", slug: "fruit-custard" },
    { id: 10, title: "Peda", description: "Milk fudge from Mathura.", imageUrl: "/peda.jpg", category: "dessert", slug: "peda" },
  ];

  const beverageRecipes = [
    { id: 1, title: "Masala Chai", description: "Spiced Indian tea.", imageUrl: "/chai.jpg", category: "beverages", slug: "masala-chai" },
    { id: 2, title: "Cold Coffee", description: "Iced coffee with cream.", imageUrl: "/coffee.jpg", category: "beverages", slug: "cold-coffee" },
    { id: 3, title: "Lassi", description: "Sweet yogurt drink.", imageUrl: "/lassi.jpg", category: "beverages", slug: "lassi" },
    { id: 4, title: "Nimbu Pani", description: "Refreshing lemonade.", imageUrl: "/nimbuPani.jpg", category: "beverages", slug: "nimbu-pani" },
    { id: 5, title: "Mango Shake", description: "Mango-flavored milkshake.", imageUrl: "/mangoShake.jpg", category: "beverages", slug: "mango-shake" },
    { id: 6, title: "Hot Chocolate", description: "Creamy cocoa drink.", imageUrl: "/hotChocolate.webp", category: "beverages", slug: "hot-chocolate" },
    { id: 7, title: "Green Tea", description: "Healthy herbal tea.", imageUrl: "/greenTea.avif", category: "beverages", slug: "green-tea" },
    { id: 8, title: "Rose Milk", description: "Milk flavored with rose syrup.", imageUrl: "/roseMilk.jpg", category: "beverages", slug: "rose-milk" },
    { id: 9, title: "Coconut Water", description: "Natural refreshing drink.", imageUrl: "/coconutWater.jpg", category: "beverages", slug: "coconut-water" },
    { id: 10, title: "Thandai", description: "Festive milk-based drink.", imageUrl: "/thandai.jpg", category: "beverages", slug: "thandai" },
  ];

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

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <h1 className="text-4xl font-bold mb-6 mt-4 text-center text-gray-800">
        Explore Recipes 🍽
      </h1>

      {/* Search */}
      <div className="max-w-xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-400"
        />
      </div>

      {/* Sections */}
      {filteredSections.map((section) => (
        <div key={section.title} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            {section.title}
          </h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {section.data.length > 0 ? (
              section.data.map((recipe) => (
                <motion.div
                  key={recipe.id}
                  className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  onClick={() => navigate(`/recipes/${recipe.category}/${recipe.slug}`)}
                >
                  <img
                    src={`${recipe.imageUrl}?auto=format&fit=crop&w=500&h=300&q=80`}
                    alt={recipe.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {recipe.title}
                    </h2>
                    <p className="text-sm text-gray-600 mt-1 truncate">
                      {recipe.description}
                    </p>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center">
                No recipes found in this category.
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExplorePage;
