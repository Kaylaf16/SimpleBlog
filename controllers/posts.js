const express = require('express');
const models = require('../config/config');
// application requires model/db and utilizes exports to access the database without having multiple connections
// dummy route for now
const router = express.Router();


// this route creates a new post with attributes name, description, category and date created
router.post('/newpost', (req,res)=>{
var post =  { Name: req.body.name,Contact:req.body.contact, Description:req.body.description, Category: req.body.category,createdAt: new Date() }

models.get().collection('posts').insert(post, (err, result) => {
  if (err) return console.log(err);
  console.log('saved to database');

  res.redirect('/');
  //--> checking to see if post gave correct json res.json(post);
});
});
// this route gets posts by either category or by recent date of a 31 days
//uses req.query to compare if user is requesting to filter by category or recent
router.get('/getposts',(req,res)=>{ // http://localhost:8000/posts/getposts?by=category&category=brooklyn
  var query;
  var by = req.query.by;
  if(by == 'category'){
  query = { Category: req.query.category }
  models.get().collection('posts').find(query).toArray(function(err,result){
    if(err) return console.log(err);
    res.json(result);})
}
else if(by == 'date')
{query = {createdAt : {$gte: new Date(new Date().setDate(new Date().getDate()-31))}};
  models.get().collection('posts').find(query).toArray(function(err,result){
    if(err) return console.log(err);
    res.json(result); })
}
else{
  res.status(404).send("not found");
}
})

module.exports= router;
