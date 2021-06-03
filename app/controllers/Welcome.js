class Welcome {
  constructor(x) {
    this.enviromen = x
  }

  index(req, res) {
    res.status(200).json({
      message: 'Working',
      enviromentStatus: process.env.NODE_ENV,
    })
  }
}

module.exports = new Welcome(process.env.NODE_ENV)
