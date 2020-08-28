module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("posts", function (collectionApi) {
      return collectionApi.getFilteredByGlob("content/posts/*.md");
  });
  return {
    dir: {
      input: "content",
      includes: "../_includes",
    },
  };
};
