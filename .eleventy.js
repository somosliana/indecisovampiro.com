module.exports = function (config) {
  // Watch!
  config.addWatchTarget('_site/tailwind.css')

  // Copy!
  // Favicon
  config.addPassthroughCopy({ 'static/favicon.ico': 'favicon.ico' })
  // Static
  config.addPassthroughCopy('static')
  // Netlify CMS
  config.addPassthroughCopy('admin')
  // Vendor
  config.addPassthroughCopy({
    'node_modules/alpinejs/dist/alpine.js': 'alpine.js',
    'node_modules/fitty/dist/fitty.min.js': 'fitty.js',
    'node_modules/@fortawesome/fontawesome-free/sprites': 'static/sprites',
  })

  // Config!
  config.setBrowserSyncConfig(require('./lib/notFound'))
  config.addTransform('minifyHtml', require('./lib/minifyHtml'))

  return {
    dir: {
      input: '_pages',
      includes: '../_includes',
      data: '../_data',
    },
  }
}
