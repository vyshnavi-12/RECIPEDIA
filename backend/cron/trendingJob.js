const cron = require("node-cron");
const Like = require("../models/Like");
const Recipe = require("../models/Recipe");

const trendingJob = cron.schedule("0 0 * * *", async () => {
  try {
    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);

    const trending = await Like.aggregate([
      { $match: { createdAt: { $gte: yesterday } } },
      { $group: { _id: "$recipe", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 1 }
    ]);

    // Reset all recipes
    await Recipe.updateMany({}, { $set: { featured: false } });

    if (trending.length > 0) {
      await Recipe.findByIdAndUpdate(trending[0]._id, { featured: true });
      console.log("Trending Recipe set:", trending[0]._id);
    }
  } catch (err) {
    console.error("Trending job error:", err);
  }
});

module.exports = trendingJob;
