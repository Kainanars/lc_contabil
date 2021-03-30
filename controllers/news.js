const models = require('../models/news');

const noticy = models.getNews();

function newPost (req, res) {
  const newPost = req.body;
  console.log(newPost)
  
  models.insertNews(newPost);
  res.redirect('/news/create?successMessage=Seu anuncio foi cadastrado com sucesso!');
  
}

function lastNoticy  (newsID){
  if (newsID-1!=undefined){
    return noticy[noticy.length -3];
  }else{
    return newsNext;
  }
};

function nextNoticy  (newsID){
  if (newsID+1!=undefined){
    return noticy[noticy.length - 1];
  }else{
    return newsPrev;
  }
};

function penultNoticy  (newsID){
  if (newsID+2!=undefined){
    return noticy[noticy.length - 2];
  }else{
    return newsPrev;
  }
};

/*
function lastNoticy (){
  
}
*/

function noticyView (req,res) {
  let newsID = req.params.id;
  let news = noticy.find(noticy=>noticy.id==newsID);
  let newsPrev = lastNoticy(newsID);
  let newsNext = nextNoticy(newsID);
  let newsPenult = penultNoticy(newsID);
  console.log(news);

  res.render('newsSelected', 
  { 
    news: news,  
    newsPrev: newsPrev, 
    newsNext: newsNext,
    newsPenult: newsPenult
  });
}


  module.exports = {
    newPost:newPost,
    noticyView:noticyView
  }
