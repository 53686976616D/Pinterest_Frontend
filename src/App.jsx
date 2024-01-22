import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Explore from "./components/Explore";
import NoPage from "./components/NoPage";
import PinForm from "./components/Forms/PinForm";
import Profile from "./components/Profile/Profile";
import Search from "./components/Header/MidPart/SearchItem/Search";
import ImageData from './ImageData.json';
import Navbar from "./components/Header/Navbar";
import Pin from "./components/Pin/Pin";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route index element={<Home ImageData={ImageData}/>} />
          <Route path="pin" element={<Pin />}/>
          <Route path="explore" element={<Explore />} />
          <Route path="create" element={<PinForm />} />
          <Route path="profile" element={<Profile />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
