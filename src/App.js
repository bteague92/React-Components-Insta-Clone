/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React from "react";
import "./App.css";
import PostPage from "./components/PostsContainer/PostsPage.js";
import Search from "./components/SearchBar/SearchBarContainer";
// import the PostsPage and SearchBar and add them to the App


const App = (props) => {

  return (
    <div className="App">
      <Search />
      <PostPage />
    </div>
  );
};

export default App;
