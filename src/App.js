import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Movie from "./Movie";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/movie/:id" element={<Movie />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
