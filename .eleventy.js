module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("_site/tailwind.css");

  eleventyConfig.addPassthroughCopy({
    "node_modules/alpinejs/dist/alpine.js": "alpine.js",
  });

  eleventyConfig.addPassthroughCopy({
    "node_modules/@fortawesome/fontawesome-free/sprites": "static/sprites",
  });

  eleventyConfig.addPassthroughCopy("static");

  eleventyConfig.addPassthroughCopy("admin");

  return {
    dir: {
      input: "_pages",
      includes: "../_includes",
      data: "../_data",
    },
  };
};
