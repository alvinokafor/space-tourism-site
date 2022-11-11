import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation().pathname;
  const currentPath = location.split("/")[1];

  return (
    <Routes>
      <Route path="/" element={<Home currentPath={currentPath} />} />
      <Route
        path="/destination"
        element={<Destination currentPath={currentPath} />}
      />
      <Route path="/crew" element={<Crew currentPath={currentPath} />} />
      <Route
        path="/technology"
        element={<Technology currentPath={currentPath} />}
      />
    </Routes>
  );
}

export default App;
