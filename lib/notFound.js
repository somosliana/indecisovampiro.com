const fs = require('fs')

module.exports = {
  callbacks: {
    ready: function (err, bs) {
      const content_404 = fs.readFileSync('_site/404.html')
      bs.addMiddleware('*', (req, res) => {
        res.write(content_404)
        res.end()
      })
    },
  },
}
