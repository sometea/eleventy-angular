module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("posts", function (collectionApi) {
      return collectionApi.getFilteredByGlob("templates/content/posts/*.md");
  });
  return {
    dir: {
      input: "templates",
      includes: "../_includes",
    },
  };
};
