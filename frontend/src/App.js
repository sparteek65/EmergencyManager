import EMheader from "./components/header/header";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchScreen from "./screens/SearchScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import MoreScreen from "./screens/MoreScreen";
import EMVidScreen from "./screens/EMVidScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <EMheader />
        <Routes>
          <Route path="/search/" element={<SearchScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/more" element={<MoreScreen />} />
          <Route path="/EMVid" element={<EMVidScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
