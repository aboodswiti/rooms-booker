const getAllRooms = require('../database/queries/getAllRooms')


exports.getAllRooms = (req, res) => {

  getAllRooms()
    .then(result => {
      res.json(result.rows)
    })
    .catch(err => res.status(500).json({ message: err.message }))
}

