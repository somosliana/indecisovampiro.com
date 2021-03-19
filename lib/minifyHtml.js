const htmlmin = require('html-minifier');

module.exports = (content, outputPath) => {
  const isProduction = process.env.NODE_ENV === 'production';
  const isHtml = outputPath.endsWith('.html');
  if ( isProduction && isHtml ) {
    return htmlmin.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true
    });
  }

  return content;
};