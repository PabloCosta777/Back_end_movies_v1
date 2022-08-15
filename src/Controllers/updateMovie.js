const { findByPk } = require("../Services/movies");
module.exports = async (req, res) => {
  const id = req.params.id;
  const isAdmin = req.token.isAdmin;
  console.log(isAdmin)
  console.log(id)
  if ( id && isAdmin === true) {
    res.send("ud es admin y puede editar peliculas");
  } else {
    res.send({ msg: "you do not have permission to perform that action" });
  }
};
