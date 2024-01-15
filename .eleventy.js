module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("cards");
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("/*.png");
  eleventyConfig.addWatchTarget("styles.css");
}