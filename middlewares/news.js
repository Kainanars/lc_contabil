function validateBody(req, res, next) {
    const newPost = req.body;
    if (newPost.title.trim() === "" || newPost.subtitle.trim() === "" || newPost.body_text.trim() === ""){
      res.redirect('/news/create?errorMessage=Erro: é necessario preencher todos os campos')

    }
    next();
  }
  
  module.exports = {
    validateBody: validateBody
  };
  