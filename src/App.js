import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./components/List.js";
import UserDetails from "./components/UserDetails.js";
import Todo from "./components/Todo.js";
import Posts from "./components/Posts"
import Gallery from "./components/Gallery.js";
import Navbar from "./components/Navbar.js";
import DropdownProfile from "./components/DropdownProfile.js";
const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<List />} />
          <Route path="/details" element={<UserDetails />} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/post" element={<Posts/>} />
          <Route path="/todo" element={<Todo/>} />
          <Route path="/navbar" element={<Navbar/>} />
          <Route path="/dropdown" element={<Navbar/>} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
