const { addMovie } = require("../Services/movies");
module.exports = async (req, res) => {
  const { title, comment, image ,genres } = req.body;
  const isAdmin = req.token.isAdmin;

  if (isAdmin === true) {
    if (title && comment && image) {
      
      await addMovie(title, comment, image,genres).then(
        res.send({ msg: "movie added" })
      );
    } else {
      res.send({ msg: "incomplete information" });
    }
  } else {
    res.send({ msg: "you do not have permission to perform that action" });
  }
};
