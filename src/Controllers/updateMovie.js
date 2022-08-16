const { editMovie,findByPk } = require("../Services/movies");
module.exports = async (req, res) => {
  const id = req.params.id;
  const{title,comment,image} = req.body
  const isAdmin = req.token.isAdmin;

  if ( id && isAdmin === true) {
    if(title && comment && image){
      const movie = await findByPk(id);
      await editMovie(movie, title, comment, image).then(
        res.send({ msg: "movie upodated" })
      );
    }else{
      res.send({msg:'incomplete information'})
    }

  } else {
    res.send({ msg: "you do not have permission to perform that action" });
  }
};
