module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("posts", function (collectionApi) {
      return collectionApi.getFilteredByGlob("templates/content/posts/*.md");
  });
  eleventyConfig.addCollection("pages", function (collectionApi) {
    return collectionApi.getFilteredByGlob("templates/content/pages/*.md");
});
  return {
    dir: {
      input: "templates",
      includes: "../_includes",
    },
  };
};
