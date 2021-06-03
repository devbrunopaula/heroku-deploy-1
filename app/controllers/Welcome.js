class Welcome {
  constructor() {
    this.enviroment = process.env.NODE_ENV
  }

  index = (req, res) => {
    res.status(200).json({
      message: 'Working',
      enviromentStatus: this.enviroment,
    })
  }
}

module.exports = new Welcome()
