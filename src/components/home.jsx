import React, {Component} from 'react';
import {render} from 'react-dom';

class Home extends Component {
  render () {
    var CreatePostStyle ={
    textAlign:"center",
    height:"auto"
}
var InputStyle ={
  marginTop:"10px",
  marginBottom:"10px",
  borderRadius:"10px",
  boxShadow:"0px",
  height:"20px",
  width:"150px",
  padding: "3px 10px",
  border:"1px solid black",
  fontFamily:"avenir",
  fontWeight:"lighter",
}
var TextArea ={
  marginTop:"10px",
  marginBottom:"10px",
  borderRadius:"10px",
  boxShadow:"0px",
  height:"120px",
  width:"200px",
  padding: "3px 10px",
  border:"1px solid black",
  fontFamily:"avenir",
  fontWeight:"lighter",
}
var ButtonStyle={
  height:"23px",
  width:"100px",
  borderRadius:"10px",
  border:"none",
  fontFamily:"avenir",
  fontWeight:"lighter",
  fontSize:"15px"
}
var FormStyle ={
  marginBottom:"70px"
}
var PStyle ={
  fontSize:"20px",
  fontFamily:"avenir",
  fontWeight:"lighter",
}
var postingLink ={
  textDecoration:"none",
  color:"black",
  fontSize:"22px",
  fontFamily:"avenir",
  fontWeight:"300"
}

    return(<div style={CreatePostStyle}>
      <p style={PStyle}>Create a Posting</p>
      <form method="POST" action="/posts/newpost" style={FormStyle}>
        <input style={InputStyle} type="text" placeholder="Name" name="name" id="name"></input><br></br>
        <input style={InputStyle} type="text" placeholder="Contact" name="contact" id="contact"></input><br></br>
        <textarea style={TextArea} placeholder="Description" name="description" id="description"></textarea><br></br>
        <input style={InputStyle} type="text" placeholder="Category" name="category" id="category"></input><br></br>
        <button style={ButtonStyle}>Go!</button>
      </form>
      <a href="/#/postings" style={postingLink}>See all postings</a>
    </div>)
  }
}
export default Home;
