import React from 'react';
import { 
  Search, 
  Heart, 
  Users, 
  BookOpen, 
  Share2, 
  Star, 
  Smartphone, 
  Shield,
  Zap,
  Globe
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Smart Recipe Search",
      description: "Find recipes quickly with our advanced search and filter system. Search by ingredients, cuisine, or dietary preferences.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Like & Save Recipes",
      description: "Like your favorite recipes and save them to your personal collection for easy access later.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Driven",
      description: "Join our community of food lovers. Share your recipes and discover creations from other passionate cooks.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Detailed Instructions",
      description: "Step-by-step cooking instructions with ingredient lists and cooking tips to ensure perfect results every time.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Easy Recipe Sharing",
      description: "Share your culinary creations with the world. Upload photos and detailed instructions for your signature dishes.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Recipe Ratings",
      description: "Rate and review recipes to help others discover the best dishes. See what the community recommends.",
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Optimized",
      description: "Access Recipedia on any device. Our responsive design ensures a perfect experience on phones, tablets, and desktops.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Private",
      description: "Your data is protected with industry-standard security. Control your privacy settings and manage your account safely.",
      color: "from-gray-500 to-slate-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast & Reliable",
      description: "Lightning-fast loading times and reliable performance ensure you can access your recipes whenever you need them.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Cuisine",
      description: "Explore recipes from around the world. From traditional dishes to modern fusion cuisine, discover global flavors.",
      color: "from-emerald-500 to-green-500"
    }
  ];

  const stats = [
    { number: "10K+", label: "Recipes" },
    { number: "50K+", label: "Users" },
    { number: "100K+", label: "Likes" },
    { number: "25K+", label: "Reviews" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Recipedia Features</h1>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              Discover what makes Recipedia the ultimate platform for food lovers, home cooks, and culinary enthusiasts.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} text-white mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Cooking?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of food lovers who are already discovering, sharing, and creating amazing recipes on Recipedia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/register"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Started Free
            </a>
            <a
              href="/explore"
              className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Explore Recipes
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features; 