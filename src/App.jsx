import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import { Posts } from "./pages/Posts";
import { PostCreate } from "./pages/PostCreate";


function App() {
  return (
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/create-post" element={<PostCreate />} />
        </Route>
      </Routes>
  );
}

export default App;
