module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./_site/tailwind.css");

  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/alpine.js": "./alpine.js",
  });

  eleventyConfig.addPassthroughCopy({ "./_static": "./static" });

  return {
    dir: {
      input: "_pages",
      includes: "../_includes",
      data: "../_data",
    },
  };
};
