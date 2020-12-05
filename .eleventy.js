module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("_site/tailwind.css");

  eleventyConfig.addPassthroughCopy({
    "node_modules/alpinejs/dist/alpine.js": "alpine.js",
  });

  eleventyConfig.addPassthroughCopy({
    "node_modules/@fortawesome/fontawesome-free/sprites": "static/sprites",
  });

  eleventyConfig.addPassthroughCopy({ "_static": "static" });

  eleventyConfig.addPassthroughCopy({ "netlifycms.yaml": "admin/config.yml" });

  return {
    dir: {
      input: "_pages",
      includes: "../_includes",
      data: "../_data",
    },
  };
};
