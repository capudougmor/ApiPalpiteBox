module.exports = {
  index(req, res) {
    return res.end(JSON.stringify({
      showCoupon: true,
      message: 'ok'
    }))
  }
}
