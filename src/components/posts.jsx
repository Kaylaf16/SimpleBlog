import React, {Component} from 'react';
import {render} from 'react-dom';

class Postings extends Component {
  changedValue(){
    var selected = document.getElementById("selection").value;
      var postingslist = document.getElementById('postingslist');

    if(selected =='date'){
      document.getElementById('categoryinput').style.display='none';
      document.getElementById('categorysubmit').style.display='none';


      postingslist.innerHTML = '';

      fetch('/posts/getposts?by=date')
      .then(results=>{
        return results.json() // promise returned but we want a json object
      }).then(data=>{
        data.forEach(posts=>{
          var listitem= ["Name: "+ posts.Name,"Contact: "+posts.Contact,"Category: "+posts.Category,"Description: "+posts.Description];
          var entry = document.createElement('li');
          listitem.forEach(item=>{
            entry.appendChild(document.createTextNode(item));
            entry.appendChild(document.createElement("br"));
          })
          postingslist.appendChild(entry);

        })
      })
    } else {
      postingslist.innerHTML = '';
      document.getElementById('categoryinput').style.display='block';
      document.getElementById('categorysubmit').style.display='block';

    }
  }
  getCategory(){
    var category = document.getElementById('categoryinput').value.trim();
    console.log(category);
    fetch('/posts/getposts?by=category&category='+category)
    .then(results=>{
      console.log(results);
      return results.json()
    }).then(data=>{
      data.forEach(posts=>{
        var listitem= ["Name: "+ posts.Name,"Contact: "+posts.Contact,"Category: "+posts.Category,"Description: "+posts.Description];
        var entry = document.createElement('li');
        listitem.forEach(item=>{
          entry.appendChild(document.createTextNode(item));
          entry.appendChild(document.createElement("br"));
        })
        postingslist.appendChild(entry);

      })
    })
  }

  render () {
    var SelectStyle={
      marginTop:"40px"
    }
    var getPosts={
      height:"auto",
      textAlign:"center",

    }
    var categoryInput={
      display:"none",
      marginLeft:"auto",
      marginRight:"auto",
      textAlign:"center",
      marginTop:"10px",
      marginBottom:"10px",
      fontSize:"14px",
      height:"20px",
      width:"150px",
      padding: "3px 10px",
      border:"none",
      borderBottom:"1px solid black",
      fontFamily:"avenir",
      fontWeight:"lighter",
    }
    var olStyle={
      display:"inline-block",
      textAlign:"left",
      overflow:"hidden",
      overflowY:"scroll",
      height:"300px",
      marginBottom:"30px",
      width:"auto"
    }
    var categorySubmit={
      display:"none",
      textAlign:"center",
      marginLeft:"auto",
      marginRight:"auto",
      height:"23px",
      width:"100px",
      borderRadius:"10px",
      border:"none",
      fontFamily:"avenir",
      fontWeight:"lighter",
      fontSize:"15px"
    }
    var postingLink ={

      textDecoration:"none",
      color:"black",
      fontSize:"22px",
      fontFamily:"avenir",
      fontWeight:"300"
    }
    var resultStyle={
      textAlign:"center",
      height:"auto"
    }
    return(<div style ={getPosts}>
      <select onChange={this.changedValue} id="selection" style={SelectStyle}>
        <option value="date">Get Posts by Date</option>
        <option value="category">Get Posts by Category</option>
      </select>
      <input style={categoryInput} id ="categoryinput" name ="categoryinput" placeholder="Type in a Category"></input>
      <button style={categorySubmit}onClick={this.getCategory}id ="categorysubmit">Search!</button><br></br>
      <div style={resultStyle}>
      <ol style={olStyle} id = "postingslist">
      </ol>
      </div>
        <a href="/#/" style={postingLink}>Post Something</a>
    </div>)
  }
}
  export default Postings;
