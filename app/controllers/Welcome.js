class Welcome {
  constructor() {
    this.enviroment = process.env.NODE_ENV
  }

  index = (req, res) => {
    res.status(200).json({
      message: 'Working',
      enviromentStatus: this.enviroment,
      env_test: process.env.TEST,
    })
  }
}

module.exports = new Welcome()
